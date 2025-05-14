"use client";
import { useEffect, useState } from "react";
import { ArrowUp, PhoneCall } from "lucide-react";

const FixedButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col space-y-3 z-50">
      {/* CTA Button */}
      <a
        href="tel:+1-(844) 408-2510"
        className="bg-primary-red text-white flex items-center justify-center p-3 rounded-full shadow-lg hover:bg-red-600 transition duration-300"
        title="Call Now"
      >
        <PhoneCall size={24} />
      </a>

      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-gray-900 text-white flex items-center justify-center p-3 rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
          title="Back to Top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default FixedButton;
