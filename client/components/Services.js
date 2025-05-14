"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Card } from "./ui/card";
import Link from "next/link";

const Services = () => {
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    // Fixed timestamp: Previous day at 9:35 PM (April 17, 2025)
    const fixedTime = new Date("2025-04-17T21:35:00");
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    setLastUpdated(fixedTime.toLocaleString("en-US", options));
  }, []);

  return (
    <>
      {/* Services Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-5">
        {/* Affordable Plans */}
        <Card className="flex flex-col sm:flex-row items-center gap-4 px-5 py-6 text-center sm:text-left h-full">
          <Image
            src="/images/red-umb/icons/deal.png"
            width={80}
            height={80}
            alt="affordable"
          />
          <div>
            <h2 className="text-xl font-semibold mb-1 text-primary-blue">
              Affordable Plans
            </h2>
            <p className="text-sm text-gray-700">
              We provide cheap plans for both domestic and international
              locations.
            </p>
          </div>
        </Card>

        {/* Safe and Secure */}
        <Card className="flex flex-col sm:flex-row items-center gap-4 px-5 py-6 text-center sm:text-left h-full">
          <Image
            src="/images/red-umb/icons/secure.png"
            width={80}
            height={80}
            alt="secure"
          />
          <div>
            <h2 className="text-xl font-semibold mb-1 text-primary-blue">
              Safe and Secure
            </h2>
            <p className="text-sm text-gray-700">
              Our website is fully safe and secure, with increased SSL
              encryption.
            </p>
          </div>
        </Card>

        {/* Call Us */}
        <a href="tel:+1-(888) 370-1612 " className="block h-full">
          <Card className="relative flex flex-col sm:flex-row items-center gap-4 px-5 py-6 text-center sm:text-left h-full bg-[linear-gradient(90deg,_rgba(89,3,18,1)_0%,_rgba(171,3,19,1)_57%,_rgba(137,3,18,1)_100%)] overflow-hidden">
            <div className="z-10">
              <p className="text-sm text-white mb-2 leading-snug">
                Call Only Offer: Save up to $30 <br />
                on Unpublished Deals
              </p>
              <h2 className="text-2xl font-bold text-white">
                +1-(888) 370-1612
              </h2>
            </div>
            <Image
              src="/images/red-umb/call-strip-girlImg.png"
              width={150}
              height={80}
              alt="support"
              className="absolute bottom-0 right-0 w-32 sm:w-36 object-contain"
            />
          </Card>
        </a>
      </div>

      {/* Terms and Conditions */}
      <div className="max-w-6xl mx-auto px-4 pb-10">
        <p className="text-sm text-gray-700 text-center leading-relaxed">
          * All holiday package rates displayed are updated as of {lastUpdated},
          and are on a twin-sharing basis for one night unless stated otherwise.{" "}
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
    </>
  );
};

export default Services;
