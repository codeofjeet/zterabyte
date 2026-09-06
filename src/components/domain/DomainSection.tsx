"use client";

import { FormEvent, useState } from "react";

const extensions = [".com", ".in", ".net", ".org", ".co.in"];

type DomainResult = {
  domain: string;
  available: boolean;
  message: string;
};

export default function DomainSection() {
  const [domainName, setDomainName] = useState("");
  const [results, setResults] = useState<DomainResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();

    const value = domainName.trim();

    if (!value) {
      setError("Please enter a domain name.");
      setResults([]);
      return;
    }

    setLoading(true);
    setError("");
    setResults([]);

    try {
      const cleanDomain = value
        .replace(/^https?:\/\//i, "")
        .replace(/^www\./i, "")
        .replace(/\/.*$/, "")
        .trim();

      const baseName = cleanDomain
        .toLowerCase()
        .replace(/\.(co\.in|com|in|net|org)$/i, "");

      if (!/^[a-z0-9-]+$/.test(baseName)) {
        setError("Please enter a valid domain name.");
        setLoading(false);
        return;
      }

      const response = await Promise.all(
        extensions.map(async (extension) => {
          const domain = `${baseName}${extension}`;

          const res = await fetch(
            `/api/domain/availability?domain=${encodeURIComponent(domain)}`,
            {
              method: "GET",
              cache: "no-store",
            }
          );

          const data = await res.json();

          return {
            domain,
            available: Boolean(data.available),
            message: data.message || "Unable to check domain",
          };
        })
      );

      setResults(response);
    } catch (err) {
      console.error("Domain availability error:", err);
      setError("Unable to check domain availability. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="domain-search"
      className="w-full bg-[#f6fafd] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Find the Perfect Domain for Your Business
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Your domain is the foundation of your online identity. Choose a
            memorable domain name and give your business a professional
            presence on the internet.
          </p>
        </div>

        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="mx-auto mt-10 flex w-full max-w-3xl flex-col gap-3 sm:flex-row"
        >
          <input
            type="text"
            value={domainName}
            onChange={(e) => setDomainName(e.target.value)}
            placeholder="Enter your domain name"
            className="h-14 flex-1 rounded-xl border border-gray-300 bg-white px-5 text-base text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

          <button
            type="submit"
            disabled={loading}
            className="h-14 rounded-xl bg-blue-600 px-7 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Checking..." : "Check Domain"}
          </button>
        </form>

        {/* Error */}
        {error && (
          <p className="mt-4 text-center text-sm font-medium text-red-600">
            {error}
          </p>
        )}

        {/* Results */}
        {results.length > 0 && (
          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((result) => (
              <div
                key={result.domain}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <p className="break-all text-base font-semibold text-gray-900">
                  {result.domain}
                </p>

                <p
                  className={`mt-2 text-sm font-semibold ${
                    result.available
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {result.available
                    ? "✓ Domain Available"
                    : "✕ Already Registered"}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Benefits */}
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              ✓
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Easy Registration
              </h3>
              <p className="text-sm text-gray-600">
                Simple and hassle-free domain registration.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              ✓
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Secure Management
              </h3>
              <p className="text-sm text-gray-600">
                Manage your domain safely and easily.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}