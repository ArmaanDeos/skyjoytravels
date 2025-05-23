"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import Image from "next/image";
import { PhoneCall, PhoneForwarded } from "lucide-react";

const PopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current page path

  useEffect(() => {
    setIsOpen(true); // Show modal on first load
  }, []);

  useEffect(() => {
    if (pathname) {
      setIsOpen(true); // Show modal on every route change
    }
  }, [pathname]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl p-4 sm:p-6">
        <DialogHeader>
          {/* Move Title Elements OUTSIDE of DialogTitle */}
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/images/expedia-logo.jpg"
              width={350}
              height={150}
              alt="Expedia Logo"
              className="object-contain w-full max-w-xs sm:max-w-sm"
            />
            <a
              href="tel:+1-(888) 370-1612"
              className="text-gray-500 text-lg sm:text-xl font-medium animate-pulse"
            >
              Call Our Travel Experts Now!
            </a>
            <a
              href="tel:+1-(888) 370-1612"
              className="flex items-center gap-2 text-[#2560b0] font-extrabold tracking-wider text-2xl sm:text-3xl hover:text-blue-800 transition mt-2"
            >
              <PhoneCall className="w-8 sm:w-10 h-8 sm:h-10 text-red-600 mr-2" />
              +1-(888) 370-1612
            </a>
            <p className="text-gray-600 text-sm sm:text-lg font-medium">
              24/7 Reservation Support
            </p>
          </div>

          {/* Only use DialogTitle for plain text */}
          <DialogTitle className="text-center text-lg sm:text-xl md:text-2xl font-bold">
            Call Now for Assistance
          </DialogTitle>

          {/* Move DialogDescription content outside */}
          <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-4">
            {[
              "Ticket Booking",
              "Manage Booking",
              "Cancellation",
              "Customer Service",
            ].map((service, index) => (
              <a
                key={index}
                href="tel:+1-(888) 370-1612"
                className="block p-2 sm:p-3 bg-[#2560b0] text-white rounded-lg text-center font-semibold shadow-2xl text-sm sm:text-lg tracking-wider hover:bg-[#2560b1] transition"
              >
                {service}
              </a>
            ))}
          </div>

          {/* Support Image */}
          <div className="flex justify-center mt-4 sm:mt-6">
            <Image
              src="/images/mp-img.jpg"
              width={400}
              height={150}
              alt="Support Team"
              className="object-contain w-full max-w-xs sm:max-w-sm"
            />
          </div>
        </DialogHeader>

        {/* Call Button */}
        <div className="flex items-center justify-center gap-4 mt-4 sm:mt-6 rounded-2xl">
          <a
            href="tel:+1-(888) 370-1612"
            className="text-white bg-[#ff6e03] font-bold py-4 sm:py-5 px-3 sm:px-4 rounded flex items-center gap-4 w-full max-w-sm"
          >
            <span className="flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 bg-white text-[#2560b0] shadow-lg rounded-xl">
              <PhoneForwarded className="w-5 sm:w-6 h-5 sm:h-6" />
            </span>
            <div className="flex flex-col text-sm sm:text-lg">
              <p className="font-extralight shadow-2xl">Phone Offer Only</p>
              <p className="font-bold tracking-wide shadow-2xl text-lg sm:text-2xl">
                +1-(888) 370-1612
              </p>
            </div>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PopupModal;
