import { Roboto, WindSong, Poppins } from "next/font/google";
import "./global.css";
import FixedButton from "@/components/FixedButton";
import Providers from "./provider";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const windSong = WindSong({
  variable: "--font-windsong",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Skyjoytravels | Cheap Flight Tickets & Airline Reservations Online",
  description:
    "Skyjoytravels offers cheap flight tickets, airline reservations, and international flight deals. Book online or call our airline customer care number +1-(888) 370-1612 for fast and secure flight booking.",
  keywords: [
    "Airline Reservation",
    "Flight Reservation",
    "cheap flight tickets",
    "airline phone number",
    "flight booking",
    "airlines tickets",
    "airline tickets booking",
    "cheap flights ticekts",
    "flight ticket",
    "plane tickets Deals",
    "flight ticket booking",
    "cheap airline tickets",
    "air ticket booking",
    "booking com flights",
    "cheap plane tickets",
    "flight ticket booking online",
    "airline Customer Care Number",
    "international flights tickets",
  ],
  openGraph: {
    title: "Skyjoytravels – Book Cheap Flights & Airline Tickets Online",
    description:
      "Get cheap airline tickets and international flight reservations at Skyjoytravels. Book online or call +1-(888) 370-1612 for the best flight deals.",
    url: "https://skyjoytravels.online",
    images: [
      {
        url: "/seo-image.jpg",
        width: 1200,
        height: 630,
        alt: "Skyjoytravels Cheap Airline Tickets",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@skyjoytravels",
    title: "Skyjoytravels – Flight Booking & Airline Reservation Deals",
    description:
      "Skyjoytravels provides affordable airline reservations and cheap plane tickets. Call +1-(888) 370-1612 or book flights online now.",
    images: ["/seo-image.jpg"],
  },
  metadataBase: new URL("https://skyjoytravels.online"),
  alternates: {
    canonical: "https://skyjoytravels.online",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="Skyjoytravels" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/images/red-umb/logo.png" />

        {/* Call Generative Tags */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="telephone" content="+1-888-370-1612" />

        {/* JSON-LD Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Skyjoytravels",
              url: "https://skyjoytravels.online",
              telephone: "+1-888-370-1612",
              description:
                "Skyjoytravels provides cheap flight tickets and airline reservation services worldwide. Book online or call our 24/7 airline support number.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-888-370-1612",
                contactType: "Customer Service",
                areaServed: "US",
                availableLanguage: ["English"],
              },
            }),
          }}
        />
      </head>
      <body
        className={`${roboto.variable} ${windSong.variable} ${poppins.variable} antialiased`}
      >
        <Providers> {children}</Providers>
        <FixedButton />
      </body>
    </html>
  );
}
