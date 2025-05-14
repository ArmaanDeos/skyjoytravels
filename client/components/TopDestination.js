"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const destinations = [
  { image: "/images/red-umb/beaches.jpg", category: "Beaches" },
  { image: "/images/red-umb/safari.jpg", category: "Safari" },
  { image: "/images/red-umb/family.jpg", category: "Family" },
  { image: "/images/red-umb/honeymoon.jpg", category: "Honeymoon" },
  { image: "/images/red-umb/luxury.jpg", category: "Luxury" },
  { image: "/images/red-umb/group.jpg", category: "Group" },
];

const TopDestination = () => {
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    // Get the current date and subtract one day to get the previous date
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1); // Move to previous day

    // Set the fixed time to 9:35 PM
    currentDate.setHours(21, 35, 0, 0); // 9:35 PM

    // Format the previous date with the fixed time
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    };

    // Format the date in the format "April 17, 2025, 9:35 PM"
    const formattedDate = currentDate.toLocaleString("en-US", options);

    // Set the last updated date state
    setLastUpdated(formattedDate);
  }, []);

  return (
    <div className="relative py-14 px-5 bg-gradient-to-br from-[#1a202c] via-[#2d3748] to-[#4a5568] animate-gradient">
      {/* Section Title */}
      <div className="max-w-6xl mx-auto mb-10 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">EXPERIENCES</h2>
      </div>

      {/* Destination Cards with categories and button inside */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {destinations.map((destination, index) => (
          <Link href="#" key={index}>
            <div className="relative group rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer">
              {/* Image */}
              <div className="relative w-full h-80 md:h-96 lg:h-[25rem]">
                <Image
                  src={destination.image}
                  alt={destination.category}
                  fill
                  unoptimized={true}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-between p-6">
                  {/* Category and Button at the center */}
                  <div className="flex flex-col justify-center items-center space-y-4 mt-auto">
                    <span className="bg-white/80 text-primary-blue text-xs font-semibold px-4 py-2 rounded-full shadow-md uppercase">
                      {destination.category}
                    </span>
                    <button className="bg-primary-red text-white text-sm px-6 py-3 rounded-[8px_0_8px_0] font-semibold hover:bg-primary-blue transition duration-300">
                      Start Planning Your Trip
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Terms and Conditions */}
      <div className="max-w-6xl mx-auto px-4 pb-10 mt-10">
        <p className="text-sm text-white text-center leading-relaxed">
          * All holiday package rates displayed are updated as of{" "}
          {lastUpdated || "loading..."}. They are on a twin-sharing basis for
          one night unless stated otherwise.{" "}
          <Link href="/terms-conditions" className="text-primary-red underline">
            Our Service Fees
          </Link>{" "}
          and{" "}
          <Link href="/terms-conditions" className="text-primary-red underline">
            Taxes & Fees
          </Link>{" "}
          may apply. Please read our{" "}
          <Link href="/terms-conditions" className="text-primary-red underline">
            Terms & Conditions
          </Link>{" "}
          carefully.
        </p>
      </div>
    </div>
  );
};

export default TopDestination;
