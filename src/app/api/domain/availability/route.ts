import { NextRequest, NextResponse } from "next/server";

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
      .replace(/\/.*$/, "");

    // Basic validation
    const domainRegex =
      /^(?!-)[a-z0-9-]+(?:\.[a-z0-9-]+)+$/;

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

    // Get API key from environment
    const apiKey = process.env.WHOISXML_API_KEY;

    if (!apiKey) {
      console.error("WHOISXML_API_KEY is missing.");

      return NextResponse.json(
        {
          success: false,
          message:
            "Domain availability service is not configured.",
        },
        { status: 500 }
      );
    }

    // WhoisXML Domain Availability API
    const apiUrl = new URL(
      "https://domain-availability.whoisxmlapi.com/api/v1"
    );

    apiUrl.searchParams.set("apiKey", apiKey);
    apiUrl.searchParams.set("domainName", cleanDomain);
    apiUrl.searchParams.set("credits", "DA");
    apiUrl.searchParams.set("outputFormat", "JSON");

    const response = await fetch(apiUrl.toString(), {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      const errorText = await response.text();

      console.error(
        "WhoisXML API error:",
        response.status,
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
    }

    const data = await response.json();

    console.log("WhoisXML response:", data);

    const availability =
      data?.DomainInfo?.domainAvailability;

    if (!availability) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Could not determine domain availability.",
        },
        { status: 502 }
      );
    }

    const available =
      availability.toUpperCase() === "AVAILABLE";

    return NextResponse.json({
      success: true,
      domain: cleanDomain,
      available,
      status: availability,
      message: available
        ? `${cleanDomain} is available!`
        : `${cleanDomain} is not available.`,
    });
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