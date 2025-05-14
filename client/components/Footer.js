"use client";

import {
  DollarSign,
  FacebookIcon,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const quickLinks = [
    "about-us",
    "cancellation-policy",
    "contact-us",
    "disclaimer",
    "faqs",
    "price-match-policy",
    "refund-policy",
    "taxes-and-fees",
    "terms-conditions",
    "sitemap",
  ];

  const midIndex = Math.ceil(quickLinks.length / 2);
  const firstHalf = quickLinks.slice(0, midIndex);
  const secondHalf = quickLinks.slice(midIndex);

  return (
    <>
      {/* Mobile Subscribe Above Footer */}
      <div className="md:hidden bg-primary-red text-white px-4 py-6">
        <div className="max-w-xl mx-auto space-y-4 text-center">
          <h4 className="text-2xl font-bold">Subscribe for Hot Deals!</h4>
          <p className="text-sm">
            Be the first to get our exclusive flight offers and travel updates.
          </p>
          <form className="flex flex-col gap-3 mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white/90 text-gray-800 text-sm px-4 py-2 rounded-md focus:outline-none placeholder:text-gray-600 shadow"
            />
            <button
              type="submit"
              className="bg-white text-primary-red font-semibold px-4 py-2 rounded-md hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Subscribe Now
            </button>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="relative bg-gray-900 text-white pt-16 pb-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Logo & Tagline */}
            <div className="flex flex-col gap-4">
              <Image
                src="/images/red-umb/logo.png"
                alt="Logo"
                width={160}
                height={40}
              />
              <p className="text-sm text-gray-300 leading-relaxed">
                Your trusted partner for unforgettable travel experiences.
              </p>
            </div>

            {/* Quick Links Split into 2 columns */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                <ul className="space-y-2">
                  {firstHalf.map((link) => (
                    <li key={link}>
                      <Link
                        href={`/${link}`}
                        className="hover:text-primary-red transition-colors capitalize"
                      >
                        {link.replace(/-/g, " ")}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2">
                  {secondHalf.map((link) => (
                    <li key={link}>
                      <Link
                        href={`/${link}`}
                        className="hover:text-primary-red transition-colors capitalize"
                      >
                        {link.replace(/-/g, " ")}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-3 text-sm text-gray-300">
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="flex items-center gap-2 hover:text-primary-blue transition-colors">
                <MapPin className="w-4 h-4 text-primary-red" />
                2516 7th Ave, East Meadow, NY 11554
              </p>
              <p className="flex items-center gap-2 hover:text-primary-blue transition-colors">
                <Phone className="w-4 h-4 text-primary-red" />
                +1-(888) 370-1612
              </p>
              <p className="flex items-center gap-2 hover:text-primary-blue transition-colors">
                <Mail className="w-4 h-4 text-primary-red" />
                info@skyjoytravels.online
              </p>
            </div>

            {/* Desktop Subscribe */}
            <div className="hidden md:block">
              <h4 className="text-lg font-semibold mb-4">Subscribe Now</h4>
              <form className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800/70 border border-gray-600 focus:border-primary-red text-white text-sm px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-red transition-all shadow-inner placeholder:text-gray-400"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-primary-red hover:bg-primary-blue transition-all px-4 py-2 rounded-md text-sm font-semibold shadow-md"
                >
                  <Send className="w-4 h-4" />
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="mt-6 flex justify-center gap-6">
            <Link
              href="#"
              className="text-primary-red hover:text-primary-blue transition-all"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="text-primary-red hover:text-primary-blue transition-all"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="text-primary-red hover:text-primary-blue transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              className="text-primary-red hover:text-primary-blue transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
          </div>

          {/* Language Selector & Currency Switcher */}
          <div className="mt-6 flex justify-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-primary-red" />
              <select className="bg-gray-800 text-white border border-gray-600 rounded-md py-2 px-3">
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-primary-red" />
              <select className="bg-gray-800 text-white border border-gray-600 rounded-md py-2 px-3">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="INR">INR</option>
              </select>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-12 text-sm text-gray-400 text-center space-y-2 border-t border-gray-700 pt-6">
            <p className="text-white">
              <strong>SKY JOY TRAVELS</strong> bearing Registration No.{" "}
              <strong>10843049</strong>, is located at 2516 7th Ave, East
              Meadow, NY 11554
            </p>
            <p className="text-white">
              All users are subject to SKY JOY TRAVELS{" "}
              <Link
                href="/terms-conditions"
                className="underline text-primary-red"
              >
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy-policy"
                className="underline text-primary-red"
              >
                Privacy Policy
              </Link>
              .
            </p>
            <p className="text-white">
              Subject to{" "}
              <Link
                href="/taxes-and-fees"
                className="underline text-primary-red"
              >
                Our service fees
              </Link>{" "}
              and{" "}
              <Link
                href="/taxes-and-fees"
                className="underline text-primary-red"
              >
                Post-ticketing fees
              </Link>
              . See our{" "}
              <Link
                href="/cookie-policy"
                className="underline text-primary-red"
              >
                Cookie Policy
              </Link>
              .
            </p>
            <p className="text-white">
              &copy; {new Date().getFullYear()}{" "}
              <span className="font-medium">Skyjoy Travels</span>. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
