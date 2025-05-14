"use client";

import {
  PlaneTakeoff,
  ChevronLeft,
  ChevronRight,
  BadgeCheck,
  Clock,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const flightDeals = [
  {
    route: "NYC → LAX",
    price: "$149",
    fromDate: "Apr 20, 2025",
    toDate: "Apr 28, 2025",
  },
  {
    route: "SFO → MIA",
    price: "$179",
    fromDate: "Apr 25, 2025",
    toDate: "May 2, 2025",
  },
  {
    route: "CHI → DFW",
    price: "$129",
    fromDate: "May 1, 2025",
    toDate: "May 5, 2025",
  },
  {
    route: "SEA → ATL",
    price: "$159",
    fromDate: "May 3, 2025",
    toDate: "May 8, 2025",
  },
  {
    route: "BOS → ORD",
    price: "$99",
    fromDate: "May 5, 2025",
    toDate: "May 10, 2025",
  },
  {
    route: "LAX → DEN",
    price: "$119",
    fromDate: "May 6, 2025",
    toDate: "May 12, 2025",
  },
  {
    route: "PHX → LAS",
    price: "$109",
    fromDate: "May 7, 2025",
    toDate: "May 14, 2025",
  },
  {
    route: "MIA → FLL",
    price: "$89",
    fromDate: "May 8, 2025",
    toDate: "May 15, 2025",
  },
  {
    route: "SFO → SEA",
    price: "$139",
    fromDate: "May 9, 2025",
    toDate: "May 16, 2025",
  },
  {
    route: "ORD → DTW",
    price: "$119",
    fromDate: "May 10, 2025",
    toDate: "May 17, 2025",
  },
  {
    route: "BWI → CLT",
    price: "$129",
    fromDate: "May 11, 2025",
    toDate: "May 18, 2025",
  },
  {
    route: "DCA → ATL",
    price: "$109",
    fromDate: "May 12, 2025",
    toDate: "May 19, 2025",
  },
  {
    route: "LGA → BOS",
    price: "$119",
    fromDate: "May 13, 2025",
    toDate: "May 20, 2025",
  },
  {
    route: "JFK → PHL",
    price: "$99",
    fromDate: "May 14, 2025",
    toDate: "May 21, 2025",
  },
];

const BestSellingFlights = () => {
  return (
    <section
      className="relative text-white py-20 px-6 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/images/red-umb/bg-fixed.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/70  z-0" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left: Slider */}
        <div className="md:col-span-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
              <PlaneTakeoff className="w-8 h-8 text-primary-red" />
              Best Selling Flights
            </h2>
            <div className="flex items-center gap-2">
              <div className="swiper-button-prev-custom bg-primary-red hover:bg-red-700 text-white p-2 rounded-full cursor-pointer">
                <ChevronLeft size={20} />
              </div>
              <div className="swiper-button-next-custom bg-primary-red hover:bg-red-700 text-white p-2 rounded-full cursor-pointer">
                <ChevronRight size={20} />
              </div>
            </div>
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            autoplay={{ delay: 5000 }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
            }}
          >
            {flightDeals.map((deal, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white/10 backdrop-blur p-6 rounded-xl shadow-lg border border-white/20 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{deal.route}</h3>
                    <p className="text-lg font-medium mb-2">{deal.price}</p>
                    <p className="text-sm text-gray-300">
                      From: <span className="text-white">{deal.fromDate}</span>{" "}
                      → To: <span className="text-white">{deal.toDate}</span>
                    </p>
                  </div>
                  <a
                    href="tel:+1-(888) 370-1612 
"
                    className="mt-4 inline-flex items-center justify-center gap-2 bg-primary-red text-white font-semibold px-4 py-2 rounded-[8px_0_8px_0] hover:bg-red-700 transition"
                  >
                    Book Now
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right: Upgraded CTA */}
        <div className="md:col-span-4 bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20 space-y-6 text-white">
          <div>
            <h3 className="text-3xl font-bold mb-2">Book Your Flight Now</h3>
            <p className="text-sm text-gray-200 flex items-center gap-2">
              <Clock size={16} className="text-primary-red" />
              Limited-time exclusive fares!
            </p>
          </div>

          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <BadgeCheck size={18} className="text-green-400" />
              24/7 Live Travel Support
            </li>
            <li className="flex items-center gap-2">
              <BadgeCheck size={18} className="text-green-400" />
              Free Cancellations on Select Routes
            </li>
            <li className="flex items-center gap-2">
              <BadgeCheck size={18} className="text-green-400" />
              Mobile-Only Special Discounts
            </li>
          </ul>

          <a href="tel:+1-(888) 370-1612">
            <button className="w-full bg-primary-red text-white py-3 rounded-[8px_0_8px_0] font-semibold hover:bg-red-700 transition duration-300 shadow-lg animate-pulse cursor-pointer">
              Find My Flight
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BestSellingFlights;
