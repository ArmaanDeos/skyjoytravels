"use client";
import Image from "next/image";

const MobilePromo = ({
  phoneNumber = "+1-(888) 370-1612",
  headingText = "Airline Reservations Desk",
  primaryBgColor = "#1f2937", // default gray-900
  textColor = "#ffffff",
  buttonColor = "#1f2937",
}) => {
  return (
    <>
      {/* Fixed Top CTA */}
      <div
        className="mobileCta fixed top-0 left-0 right-0 w-full py-3 px-4 z-[999999] shadow-md md:hidden"
        style={{ backgroundColor: primaryBgColor }}
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
          <div
            className="ctaText text-center font-medium"
            style={{ color: textColor }}
          >
            <p className="text-sm">Call & Get Unpublished Flight Deals</p>
            <a
              href={`tel:${phoneNumber}`}
              className="block font-bold text-3xl"
              style={{ color: textColor }}
            >
              {phoneNumber}
            </a>
          </div>
        </div>
      </div>

      {/* Main Mobile Section */}
      <section className="block md:hidden py-4 px-3 bg-white shadow-md rounded mt-[80px] mb-[100px]">
        {/* Header */}
        <div
          className="py-2 rounded mb-4 text-white text-center font-semibold text-lg"
          style={{ backgroundColor: primaryBgColor }}
        >
          {headingText}
        </div>

        <Image
          src="/images/Generic-Banner.png"
          alt="Airlines Ticket"
          width={500}
          height={300}
          className="w-full mb-4"
        />

        <div className="grid grid-cols-2 gap-2 text-sm font-fira mb-4">
          {[
            "New Bookings",
            "Changes",
            "Cancellations",
            "Customer Service",
            "Refunds",
            "Upgrades",
          ].map((text, i) => (
            <a
              key={i}
              href={`tel:${phoneNumber}`}
              className="py-2 rounded text-center text-white"
              style={{ backgroundColor: buttonColor }}
            >
              {text}
            </a>
          ))}
        </div>

        <Image
          src="/images/airline-generic.png"
          alt="Airplane"
          width={500}
          height={300}
          className="w-full mb-4"
        />

        <h5 className="font-semibold text-lg text-gray-900 mb-2 text-center">
          Booking & Changes Over The Phone
        </h5>
        <div className="flex justify-center flex-wrap gap-3 text-sm text-gray-800 mb-3">
          <span>✅ Flexible payment</span>
          <span>✅ Price match guarantee</span>
        </div>

        <div className="w-4/5 mx-auto h-1 bg-primary-red rounded-full mb-4" />

        <Image
          src="/images/calling-cus.png"
          alt="Agent"
          width={80}
          height={80}
          className="w-20 h-20 object-cover rounded-full border-2 border-black mx-auto mb-2"
        />
        <p className="text-center font-semibold text-gray-900 mb-1">
          No Hold - Call Answered in 5 Sec
        </p>
        <p className="text-center font-bold text-rose-600 animate-pulse">
          Click to Call!
        </p>

        <div
          className="text-white rounded-full px-5 py-3 flex flex-wrap items-center justify-center gap-3 mt-4 max-w-xs mx-auto"
          style={{ backgroundColor: buttonColor }}
        >
          <span className="h-12 w-12 rounded-full bg-center bg-no-repeat bg-[url('https://www.aireticket.us/images/phoneRotate.png')] bg-[length:28px] animate-[trin_1.5s_linear_infinite]" />
          <div>
            <small className="block text-sm">
              Unpublished Phone-Only Offers
            </small>
            <span className="text-xl font-bold block">{phoneNumber}</span>
          </div>
        </div>

        <p className="text-center text-gray-800 font-semibold text-base mt-4 px-4">
          Call Our Airline Customer Service&apos;s and Save Up to 60% on
          Domestic and Up to 50% on International Flight Booking.
        </p>
      </section>

      {/* Fixed Bottom CTA */}
      <div
        className="mobileCta fixed bottom-0 left-0 right-0 w-full py-3 px-4 z-[999999] shadow-md md:hidden"
        style={{ backgroundColor: primaryBgColor }}
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
          <div
            className="ctaText text-center font-medium"
            style={{ color: textColor }}
          >
            <p className="text-sm">Call & Get Unpublished Flight Deals</p>
            <a
              href={`tel:${phoneNumber}`}
              className="block font-bold text-3xl"
              style={{ color: textColor }}
            >
              {phoneNumber}
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes trin {
          0%,
          20%,
          32%,
          44%,
          56%,
          68%,
          80% {
            transform: rotate(0deg);
          }
          23%,
          35%,
          47%,
          59%,
          71% {
            transform: rotate(15deg);
          }
          26%,
          38%,
          50%,
          62%,
          74% {
            transform: rotate(0deg);
          }
          29%,
          41%,
          53%,
          65%,
          77% {
            transform: rotate(-15deg);
          }
        }
      `}</style>
    </>
  );
};

export default MobilePromo;
