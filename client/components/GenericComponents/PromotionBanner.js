"use client";

import { PhoneCall } from "lucide-react";
import Image from "next/image";

const PromotionBanner = ({
  logoSrc,
  serviceName,
  ctaBgColor = "#0a3965",
  ctaTextColor = "#000",
}) => {
  const phoneNumber = "+1-(888) 370-1612";

  const renderFixedCTA = () => (
    <div
      className="mobileCta w-full py-3 px-4 shadow-md md:hidden"
      style={{ backgroundColor: ctaBgColor }}
    >
      <div className="ctaContent flex items-center justify-center gap-3 max-w-md mx-auto">
        <span className="h-[45px] w-[45px] relative">
          <Image
            src="/images/call-pullu-love.png"
            alt="Phone Ringing"
            fill
            className="animate-[trin_1.5s_linear_infinite] object-contain"
          />
        </span>
        <div className="ctaText text-center text-white font-medium">
          <p className="text-sm" style={{ color: ctaTextColor }}>
            Call & Get Unpublished Flight Deals
          </p>
          <a
            href={`tel:${phoneNumber}`}
            className="block text-white font-bold text-3xl"
            style={{ color: ctaTextColor }}
          >
            {phoneNumber}
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Fixed Top CTA */}
      <div className="fixed top-0 left-0 right-0 z-20">{renderFixedCTA()}</div>

      {/* Main Content */}
      <div className="md:hidden bg-gray-50 p-4 pt-4 pb-20 mt-[110px]">
        <div className="w-full bg-white rounded-xl shadow-lg p-4">
          <div className="flex flex-col items-center gap-1 mb-4">
            <Image
              src={logoSrc}
              width={200}
              height={80}
              alt={`${serviceName} Logo`}
              className="object-contain w-3/4 mb-2"
            />
            <p className="text-black text-lg font-bold uppercase mb-1">
              {serviceName}
            </p>
            <p className="text-[#e99e21] text-base font-extrabold uppercase mb-1">
              Un-Published Fares
            </p>
            <p className="text-black text-base font-extrabold uppercase mb-2">
              Saved for Our Callers
            </p>
          </div>

          <div className="space-y-3">
            <div className="bg-[#158ea9] p-3 text-white text-center text-sm font-medium rounded-lg">
              We also provide support for {serviceName} Customers
            </div>
            <div className="p-2 text-center text-sm font-medium">
              New Reservations, Changes, Cancellations & Customer Services
            </div>
          </div>

          <h2 className="text-center text-[#2461b1] text-lg font-extrabold mt-3">
            No Hold Time
          </h2>

          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center justify-center gap-2 mt-3 bg-[#0a3965] text-white px-3 py-2 rounded-lg hover:bg-[#ff7b1a] transition-colors"
          >
            <PhoneCall className="w-5 h-5" />
            <span className="text-lg font-bold">{phoneNumber}</span>
          </a>
        </div>
      </div>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-20">
        {renderFixedCTA()}
      </div>
    </>
  );
};

export default PromotionBanner;
