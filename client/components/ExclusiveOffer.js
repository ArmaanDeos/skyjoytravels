"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Card } from "./ui/card";
import Link from "next/link";

const hotelOffers = [
  {
    city: "Mexico City, Mexico",
    hotelName: "Howard Johnson By Wyndham Toluca",
    rating: 5,
    price: 37.48,
    offer: 12,
    image: "/images/red-umb/Howard.webp",
    amenities: "Free Wi-Fi, Pool, Spa",
    dates: "18-July-2025 - 29-July-2025",
  },
  {
    city: "Panama City, Panama",
    hotelName: "Novotel Panama City",
    rating: 5,
    price: 53.35,
    offer: 15,
    image: "/images/red-umb/novelty.jpg",
    amenities: "Free Wi-Fi, Breakfast, Gym",
    dates: "18-July-2025 - 29-July-2025",
  },
  {
    city: "Guadalajara, Mexico",
    hotelName: "Krystal Urban Guadalajara",
    rating: 4.5,
    price: 70.4,
    image: "/images/red-umb/krystal.webp",
    amenities: "Free Wi-Fi, Pool, Restaurant",
    dates: "18-July-2025 - 29-July-2025",
  },
  {
    city: "Dubai",
    hotelName: "Burj Al Arab",
    rating: 5,
    price: 1025.74,
    offer: 10,
    image: "/images/red-umb/burj.jpg",
    amenities: "Free Wi-Fi, Private Beach, Spa",
    dates: "18-July-2025 - 29-July-2025",
  },
  {
    city: "Orlando, United States",
    hotelName: "Coco Key Hotel and Water Resort",
    rating: 4.5,
    price: 83.48,
    image: "/images/red-umb/coco-resort.webp",
    amenities: "Free Wi-Fi, Pool, Beachfront",
    dates: "18-July-2025 - 29-July-2025",
  },
  {
    city: "Cancun, Mexico",
    hotelName: "Sandos Cancun All Inclusive",
    rating: 5,
    price: 178.48,
    offer: 20,
    image: "/images/red-umb/sandos.webp",
    amenities: "Free Wi-Fi, Spa, Pool",
    dates: "18-July-2025 - 29-July-2025",
  },
];

const TopHotelDeals = () => {
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
    <div className="py-10 max-w-6xl mx-auto px-5">
      <h1 className="text-3xl font-bold text-center text-primary-blue uppercase mb-10">
        Top Hotel Deals
      </h1>
      {/* Terms and Conditions */}
      <div className="max-w-6xl mx-auto px-4 pb-10 mt-10">
        <p className="text-sm text-black text-center leading-relaxed">
          * All hotel rates on this website are updated as of{" "}
          {lastUpdated || "loading..."} and are provided on a twin-sharing basis
          for one night unless stated otherwise. Additional charges, taxes, and
          fees may be applicable. Please read our{" "}
          <Link href="/terms-conditions" className="text-primary-red underline">
            Terms & Conditions
          </Link>{" "}
          carefully.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotelOffers.map((offer, index) => (
          <Card
            key={index}
            className="flex flex-col h-full p-5 shadow-lg rounded-lg"
          >
            <div className="relative h-48 w-full">
              <Image
                src={offer.image}
                fill
                className="object-cover rounded-lg"
                alt={`${offer.hotelName} in ${offer.city}`}
              />
              {offer.offer && (
                <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                  {offer.offer}% OFF
                </div>
              )}
            </div>

            <div className="flex flex-col justify-between flex-1">
              <div className="text-center">
                <h2 className="text-lg font-bold">{offer.hotelName}</h2>
                <p className="text-gray-600 text-sm">{offer.city}</p>
                <p className="text-yellow-400 text-sm">
                  {"★".repeat(offer.rating)}
                </p>
              </div>

              <div className=" text-sm text-gray-500">
                <p>Amenities: {offer.amenities}</p>
                <p className="mt-2">{offer.dates}</p>
              </div>

              <div className="mt-4 text-lg font-semibold text-primary-blue">
                ${offer.price} per night
              </div>

              <div className="mt-2">
                <Link
                  href="tel:+1-(888) 370-1612"
                  className="block text-center bg-primary-red text-white font-semibold py-2 rounded-[8px_0_8px_0] transition hover:bg-primary-blue"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TopHotelDeals;
