import { NextRequest, NextResponse } from "next/server";

type RdapBootstrap = {
  services: [string[], string[]][];
};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const domain = searchParams.get("domain");

    if (!domain) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a domain name.",
        },
        { status: 400 }
      );
    }

    // Clean domain name
    const cleanDomain = domain
      .trim()
      .toLowerCase()
      .replace(/^https?:\/\//, "")
      .replace(/^www\./, "")
      .replace(/\/.*$/, "")
      .replace(/\.$/, "");

    // Basic validation
    const domainRegex =
      /^(?!-)(?:[a-z0-9-]+\.)+[a-z]{2,}$/i;

    if (!domainRegex.test(cleanDomain)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please enter a valid domain name, for example example.com.",
        },
        { status: 400 }
      );
    }

    // Get TLD
    const parts = cleanDomain.split(".");
    const tld = parts[parts.length - 1];

    if (!tld) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid domain name.",
        },
        { status: 400 }
      );
    }

    // Get RDAP server from IANA Bootstrap Registry
    const bootstrapResponse = await fetch(
      "https://data.iana.org/rdap/dns.json",
      {
        cache: "no-store",
      }
    );

    if (!bootstrapResponse.ok) {
      console.error(
        "IANA RDAP Bootstrap error:",
        bootstrapResponse.status
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Unable to check domain availability right now.",
        },
        { status: 502 }
      );
    }

    const bootstrap =
      (await bootstrapResponse.json()) as RdapBootstrap;

    // Find RDAP server for this TLD
    const service = bootstrap.services.find(
      ([tlds]) =>
        tlds.some(
          (item) =>
            item.toLowerCase() === tld.toLowerCase()
        )
    );

    if (!service) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Domain availability checking is not supported for this extension.",
        },
        { status: 400 }
      );
    }

    const rdapServers = service[1];

    if (!rdapServers || rdapServers.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Unable to find an RDAP server for this domain.",
        },
        { status: 502 }
      );
    }

    // Check domain on RDAP server
    const rdapBaseUrl = rdapServers[0].replace(/\/+$/, "");

    const rdapUrl = `${rdapBaseUrl}/domain/${encodeURIComponent(
      cleanDomain
    )}`;

    console.log("Checking RDAP:", rdapUrl);

    const rdapResponse = await fetch(rdapUrl, {
      method: "GET",
      cache: "no-store",
      headers: {
        Accept:
          "application/rdap+json, application/json",
      },
    });

    // Domain does not exist
    // Consider it available
    if (rdapResponse.status === 404) {
      return NextResponse.json({
        success: true,
        domain: cleanDomain,
        available: true,
        message: "Domain Available",
      });
    }

    // Domain exists
    // Consider it registered
    if (rdapResponse.status === 200) {
      return NextResponse.json({
        success: true,
        domain: cleanDomain,
        available: false,
        message: "Already Registered",
      });
    }

    // Rate limit
    if (rdapResponse.status === 429) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Too many requests. Please try again after some time.",
        },
        { status: 429 }
      );
    }

    // Other RDAP errors
    const errorText = await rdapResponse.text();

    console.error(
      "RDAP error:",
      rdapResponse.status,
      errorText
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to check domain availability right now.",
      },
      { status: 502 }
    );
  } catch (error) {
    console.error(
      "Domain availability error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong while checking the domain.",
      },
      { status: 500 }
    );
  }
}