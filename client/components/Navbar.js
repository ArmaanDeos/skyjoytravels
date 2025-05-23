"use client";
import { useState } from "react";
import {
  Menu,
  X,
  House,
  BriefcaseBusiness,
  Phone,
  Box,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navLinks = [
    { name: "Home", icon: <House className="w-5 h-5" />, link: "/" },
    {
      name: "About Us",
      icon: <BriefcaseBusiness className="w-5 h-5" />,
      link: "/about-us",
    },
    {
      name: "Contact Us",
      icon: <Phone className="w-5 h-5" />,
      link: "/contact-us",
    },
  ];

  return (
    <>
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl px-4 md:px-6 py-3 rounded-2xl shadow-md flex items-center justify-between transition-all duration-300 bg-black/70 text-white backdrop-blur-md">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/red-umb/logo.png"
            alt="Logo"
            width={120}
            height={80}
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 relative">
          {navLinks.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className="flex items-center hover:text-primary-red transition"
            >
              <span className="bg-primary-blue text-white rounded w-6 h-6 flex items-center justify-center p-1 mr-2">
                {item.icon}
              </span>
              <span className="text-sm font-medium text-white">
                {item.name}
              </span>
            </Link>
          ))}

          {/* Dropdown */}
          <div
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            className="relative"
          >
            <button className="flex items-center hover:text-primary-red transition">
              <span className="bg-primary-blue text-white rounded w-6 h-6 flex items-center justify-center p-1 mr-2">
                <Box className="w-5 h-5" />
              </span>
              <span className="text-sm font-medium text-white">
                Flight Deals
              </span>
              <ChevronDown className="ml-1 w-4 h-4" />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-10 left-0 bg-white rounded-xl shadow-xl overflow-hidden w-52 z-50"
                >
                  <li>
                    <Link
                      href="/flights-reservation"
                      className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                    >
                      Flight Reservation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/expedia-reservations"
                      className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                    >
                      Expedia Reservations
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/priceline-reservations"
                      className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                    >
                      Priceline Reservations
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cheapoair-flight-deals"
                      className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                    >
                      Cheapoair Flight Deals
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/travelocity-cheap-flights"
                      className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                    >
                      Travelocity Cheap Flights
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/booking-holdings-booking"
                      className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                    >
                      Booking Holdings Inc.
                    </Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Desktop CTA */}
        <a
          href="tel:+1-(888) 370-1612"
          className="hidden md:flex items-center space-x-2 bg-white px-2 py-2 rounded-[8px_0_8px_0] transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <Image
            src="/images/red-umb/icons/call-agent-icon.png"
            alt="Call"
            width={35}
            height={35}
            className="animate-pulse hover:animate-none transition-all duration-300 ease-in-out"
          />
          <div className="text-sm">
            <p className="text-xs font-medium text-primary-blue">
              Call Us For 24x7 Support
            </p>
            <p className="font-bold text-base text-primary-red">
              +1-(888) 370-1612
            </p>
          </div>
        </a>

        {/* Mobile CTA + Menu Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href="tel:+1-(888) 370-1612"
            className="flex items-center justify-center text-white text-xs font-semibold bg-[#cc0200] rounded-[8px_0_8px_0] px-4 py-2.5 uppercase transition-all duration-300 ease-in-out transform hover:bg-[#9b0100] hover:scale-105"
          >
            <img
              src="/images/red-umb/icons/cal2.gif"
              alt="Call Now"
              className="w-5 h-5 mr-2"
            />
            <span>Call Now</span>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white transition-all duration-300 hover:text-primary-red"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-[#cc0200] shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="p-4 flex items-center justify-between border-b bg-[#531c18]">
          <div className="bg-[#1e1e1e] p-2 rounded-full">
            <Link href="/">
              <Image
                src="/images/red-umb/red-logo.png"
                alt="Logo"
                width={100}
                height={80}
                className="object-contain"
              />
            </Link>
          </div>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <ul className="p-4 space-y-4">
          {[
            ...navLinks,
            {
              name: "Flight Reservation",
              icon: <Box className="w-5 h-5" />,
              link: "/flights-reservation",
            },
            {
              name: "Expedia Reservations",
              icon: <Box className="w-5 h-5" />,
              link: "/expedia-reservations",
            },
            {
              name: "Priceline Reservations",
              icon: <Box className="w-5 h-5" />,
              link: "/priceline-reservations",
            },
            {
              name: "Cheapoair Flight Deals",
              icon: <Box className="w-5 h-5" />,
              link: "/cheapoair-flight-deals",
            },
            {
              name: "Travelocity Cheap Flights",
              icon: <Box className="w-5 h-5" />,
              link: "/travelocity-cheap-flights",
            },
            {
              name: "Booking Holdings Inc.",
              icon: <Box className="w-5 h-5" />,
              link: "/booking-holdings-booking",
            },
          ].map((item, i) => (
            <li key={i}>
              <Link
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="flex items-center text-gray-800 hover:text-primary-red"
              >
                <span className="bg-primary-blue text-white rounded w-6 h-6 flex items-center justify-center p-1 mr-2">
                  {item.icon}
                </span>
                <span className="text-base font-medium">{item.name}</span>
              </Link>
              <div className="h-[2px] bg-gradient-to-r from-red-500 to-white w-full mt-2"></div>
            </li>
          ))}
        </ul>
      </div>

      {/* Background overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
        />
      )}
    </>
  );
};

export default Navbar;
