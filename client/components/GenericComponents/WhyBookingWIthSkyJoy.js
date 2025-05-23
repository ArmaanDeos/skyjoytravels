"use client";

const WhyBookWithSkyjoyBrand = ({
  brandName = "Cheapoair",
  phoneNumber = "+1-888-370-1612",
  phoneDisplay = "+1 (888) 370-1612",
}) => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          Book {brandName} Flights with SkyjoyTravels
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Looking to book cheap flights with <strong>{brandName}</strong>? At{" "}
          <strong>SkyjoyTravels</strong>, we help you compare and reserve the
          best deals from {brandName} and other top travel brands — all with
          personalized service and exclusive unpublished discounts.
        </p>

        <div className="bg-blue-50 rounded-xl p-6 shadow-md mb-8 text-left">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Why Book {brandName} Flights Through SkyjoyTravels?
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>
              Access {brandName}&apos;s flight deals along with 475+ other
              airlines in one place.
            </li>
            <li>
              Save up to <strong>40%</strong> using SkyjoyTravels’ exclusive
              coupon offers.
            </li>
            <li>
              Unpublished fares only available by phone with our travel agents.
            </li>
            <li>
              Dedicated 24/7 support for changes, cancellations, and airline
              queries.
            </li>
            <li>
              We handle everything from last-minute tickets to round-the-world
              bookings.
            </li>
            <li>
              Trusted U.S.-based agency offering both online and phone bookings.
            </li>
          </ul>
        </div>

        <div className="bg-purple-50 rounded-xl p-6 shadow-md mb-10 text-left">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Prefer to Book Over the Phone?
          </h3>
          <p className="text-gray-700 mb-4">
            Our expert agents can help you find better rates than what’s shown
            online — often beating direct {brandName} offers.
          </p>
          <p className="text-lg text-gray-800 font-semibold text-center">
            📞 Book {brandName} Flights Now:
            <a
              href={`tel:${phoneNumber}`}
              className="ml-2 text-primary-blue underline hover:text-primary-red"
            >
              {phoneDisplay}
            </a>
          </p>
        </div>

        <div className="mb-10">
          <h4 className="text-2xl font-semibold text-gray-800 mb-3">
            Lock In the Best {brandName} Deals with SkyjoyTravels
          </h4>
          <p className="text-gray-600 mb-6">
            Whether you&apos;re booking with {brandName}, Priceline, or Expedia
            — <strong>SkyjoyTravels</strong> is your all-in-one partner for
            trusted, secure, and low-cost airfare. Call us today to discover
            what unpublished deals we can offer you!
          </p>
          <a
            href={`tel:${phoneNumber}`}
            className="inline-block bg-gradient-to-r from-primary-blue to-primary-red text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:shadow-xl hover:from-primary-red hover:to-primary-blue transition-all duration-300"
          >
            Call Now and Book {brandName} Flights
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyBookWithSkyjoyBrand;
