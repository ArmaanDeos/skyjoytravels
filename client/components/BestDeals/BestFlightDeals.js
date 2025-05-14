import { SquareArrowDownRight } from "lucide-react";
import Image from "next/image";

const BestFlightDeals = () => {
  return (
    <section
      className="w-full h-full pl-4 md:pl-16 lg:pl-24"
      style={{ fontFamily: "var(--font-roboto)" }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Available Agent Section */}
        <div className="py-4">
          <div className="flex items-center gap-6 flex-wrap relative mb-5">
            {/* Agent Image */}
            <div className="flex-shrink-0">
              <a href="tel:+1-(844) 408-2510">
                <Image
                  src="/images/agent.jpg"
                  alt="Available Agent"
                  width={110}
                  height={100}
                  className="relative z-1"
                />
              </a>
            </div>
            <a href="tel:+1-(844) 408-2510" className="flex items-center gap-2">
              <h2 className="text-sm sm:text-md md:text-xl font-bold border-5 border-primary-blue rounded-full px-12 py-2 absolute left-10 md:left-20 lg:left-20 z-0">
                <span
                  className="w-4 h-4 rounded-full bg-green-500 inline-block animate-pulse mr-2"
                  aria-label="Available Agent"
                ></span>
                Agent Available Now
              </h2>
            </a>
          </div>

          {/* Title and Subtitle */}
          <div className="pr-4 md:pr-10">
            <h1 className="text-4xl md:text-6xl font-extrabold uppercase text-primary-blue mb-4">
              Airline Reservations & 24/7 Support
            </h1>
            <div className="flex flex-wrap items-center gap-5 py-2 border-b-4 border-destructive mb-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary-blue border-r-4 border-primary-blue pr-5">
                24/7 Support
              </h2>
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary-blue">
                No Hold Time
              </h2>
            </div>
            <p className="text-lg md:text-[22px] uppercase text-primary-blue mb-4">
              <span className="font-semibold italic uppercase mr-2">
                Phone Reservations Only:
              </span>
              Call Now to Book!
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-8 mb-12">
            <a
              href="tel:+1-(844) 408-2510"
              className="bg-primary-blue px-6 py-4 md:px-10 md:py-6 text-white text-2xl sm:text-xl md:text-3xl lg:text-5xl font-semibold hover:text-white transition-all duration-300 border-b-4 border-secondary-blue"
            >
              +1-(844) 408-2510
            </a>
          </div>

          {/* Services Offered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["New Booking", "Cancellation", "Changes", "Refunds"].map(
              (service, index) => (
                <a
                  key={index}
                  href="tel:+1-(844) 408-2510"
                  className="flex items-center gap-2 text-xl md:text-2xl font-extrabold text-primary-blue"
                >
                  <SquareArrowDownRight className="text-destructive" />{" "}
                  {service}
                </a>
              )
            )}
          </div>
        </div>

        {/* Second Column - Image */}
        <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
          <Image
            src="/images/book-international-airlines.jpg"
            alt="Best Flight Deals"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default BestFlightDeals;
