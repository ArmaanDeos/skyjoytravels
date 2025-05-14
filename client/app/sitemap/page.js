import Head from "next/head";
import Link from "next/link";

const pages = [
  { name: "Home", path: "/", lastModified: "2025-03-25" },
  { name: "About Us", path: "/about-us", lastModified: "2025-03-20" },
  {
    name: "Best Travel Deals",
    path: "/best-travel-deals",
    lastModified: "2025-03-22",
  },
  { name: "Contact Us", path: "/contact-us", lastModified: "2025-03-22" },
  { name: "Disclaimer", path: "/disclaimer", lastModified: "2025-03-22" },
  {
    name: "Privacy Policy",
    path: "/privacy-policy",
    lastModified: "2025-03-22",
  },
  { name: "Refund Policy", path: "/refund-policy", lastModified: "2025-03-22" },
  {
    name: "Cancellation Policy",
    path: "/cancellation-policy",
    lastModified: "2025-03-22",
  },
  {
    name: "Terms & Conditions",
    path: "/terms-conditions",
    lastModified: "2025-03-22",
  },
  {
    name: "Taxes and Fees",
    path: "/taxes-and-fees",
    lastModified: "2025-03-22",
  },
  { name: "Sitemap", path: "/sitemap", lastModified: "2025-03-22" },
  {
    name: "Price Match Policy",
    path: "/price-match-policy",
    lastModified: "2025-03-22",
  },
  { name: "FAQs", path: "/faqs", lastModified: "2025-03-22" },
];

export default function Sitemap() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto flex flex-col items-center justify-center bg-gray-100 p-5">
      {/* ✅ SEO Optimized Head Section */}
      <Head>
        <title>Website Sitemap | SkyJoy Travels</title>
        <meta
          name="description"
          content="A structured sitemap of all pages available on SkyJoy Travels for better navigation and SEO."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="SkyJoy Travels Team" />
        <meta
          name="keywords"
          content="sitemap, website pages, SEO, structured data, travel site"
        />
        <link rel="canonical" href="https://skyjoytravels.online/" />
      </Head>

      <h1 className="text-3xl font-bold text-blue-600 mb-5">
        📍 Website Sitemap
      </h1>
      <div className="overflow-x-auto w-full">
        <table className="w-full bg-white shadow-lg rounded-lg border-collapse border border-gray-200">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-3 border border-gray-300 text-left">
                Page Name
              </th>
              <th className="p-3 border border-gray-300 text-left">URL</th>
              <th className="p-3 border border-gray-300 text-left">
                Last Modified
              </th>
            </tr>
          </thead>
          <tbody>
            {pages.map((page, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="p-3 border border-gray-300">{page.name}</td>
                <td className="p-3 border border-gray-300">
                  <Link
                    href={page.path}
                    className="text-blue-500 hover:underline"
                  >
                    {page.path}
                  </Link>
                </td>
                <td className="p-3 border border-gray-300">
                  {page.lastModified}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
