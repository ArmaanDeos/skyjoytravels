import React from "react";

const AirlinesContent = ({
  airlineName = "Virgin Atlantic",
  phoneNumber = "0-800-058-4202",
}) => {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center">
          Book {airlineName} Tickets with Skyjoytravels
        </h2>
        <p className="text-sm md:text-base text-gray-600 mb-2 ">
          {airlineName}, a leading global airline, has been connecting
          passengers to destinations around the world. Whether you’re searching
          for cheap flight tickets, flight reservations, or looking for{" "}
          {airlineName} airline tickets booking, {airlineName}
          ensures you have access to affordable flight ticket booking options.
          The airline is well-known for providing exceptional service, comfort,
          and a wide variety of flight booking options for travelers. From cheap
          airline tickets to premium flight reservation services, {
            airlineName
          }{" "}
          covers it all. Book your {airlineName} flight tickets online now and
          get access to unbeatable plane tickets deals. You can even secure
          international flights tickets, {airlineName} flight reservation, and
          much more at Skyjoytravels. Call us to get your
          {airlineName} flight tickets booked hassle-free.
        </p>

        {/* Combined Column Layout */}
        <div className="space-y-10">
          {/* Fleet */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 ">Fleet</h3>
            <p className="text-gray-600">
              {airlineName} operates a modern fleet of Boeing and Airbus
              aircraft, including the luxurious Boeing 787 Dreamliner and Airbus
              A350. These aircraft are designed for maximum comfort, efficiency,
              and passenger safety, ensuring that every journey with{" "}
              {airlineName} is unforgettable. Whether you&apos;re booking a
              flight for business or leisure, {airlineName} provides the best
              flights with comfort in mind. Book your {airlineName} plane
              tickets today and experience the difference. Don&apos;t miss out
              on our affordable flights with {airlineName} airline tickets
              booking, available right here.
            </p>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 ">
              Destinations
            </h3>
            <p className="text-gray-600">
              With over 30 destinations worldwide, {airlineName} offers flights
              to major cities across North America, the Caribbean, Africa, Asia,
              and Europe. Whether you’re looking to book your {airlineName}{" "}
              flight reservation online or simply browse for cheap airline
              tickets, {airlineName} ensures you have access to an extensive
              flight network. You can search for international flights tickets
              to top destinations or explore a variety of cheap flights tickets
              options from {airlineName} that suit your travel needs. Book your{" "}
              {airlineName} flight tickets today and enjoy the journey.
            </p>
          </div>

          {/* Frequent Flyer Programme */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 ">
              Frequent Flyer Programme
            </h3>
            <p className="text-gray-600">
              {airlineName}&apos;s loyalty program rewards its members with
              miles for every flight taken, which can be redeemed for flights,
              upgrades, and a range of exclusive rewards. As part of their
              commitment to providing exceptional service, members also receive
              benefits like priority boarding and access to luxurious lounges.
              This makes {airlineName} the perfect choice for both frequent
              flyers and those new to air travel. Don’t forget to use your
              loyalty miles for discounted or free {airlineName} airline tickets
              booking.
            </p>
          </div>

          {/* Partnerships */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 ">
              Partnerships
            </h3>
            <p className="text-gray-600">
              {airlineName} is a part of a global airline network, offering
              passengers benefits through partnerships with other airlines. By
              booking flights with {airlineName}, you gain access to exclusive
              flight ticket booking deals, including multi-leg flight options.
              Whether you&apos;re flying domestically or internationally,{" "}
              {airlineName} makes it easy to book your airline tickets through
              its seamless partnerships with other carriers. Searching for
              flights?
              {airlineName}&apos;s airline phone number is available for
              inquiries.
            </p>
          </div>

          {/* Hubs */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 ">Hubs</h3>
            <p className="text-gray-600">
              The main hub of {airlineName} is at a major international airport,
              a bustling center for both domestic and international flights.
              From this central location, {airlineName} offers extensive flight
              options across continents. Whether you’re looking to book cheap
              plane tickets for short domestic travel or secure international
              flights tickets for your next vacation, {airlineName} ensures a
              smooth experience. Discover your next adventure with {airlineName}{" "}
              flight reservation today!
            </p>
          </div>

          {/* Booking Information */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 ">
              Booking Information
            </h3>
            <p className="text-gray-600">
              Ready to book your {airlineName} flight? With Skyjoytravels,
              booking your tickets is simple, fast, and secure. Whether
              you&apos;re booking a one-way flight or round-trip tickets,
              Skyjoytravels offers the best prices on {airlineName}
              flight ticket booking. You can also find amazing deals on cheap
              airline tickets for both international and domestic flights. Get
              the best {airlineName} flight ticket booking online experience and
              save on your travel by booking through our platform. From{" "}
              {airlineName} flight reservations to securing cheap flight
              tickets, we have all your travel needs covered.
            </p>
          </div>
        </div>

        {/* Customer Care Info & CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            For assistance with booking your flight ticket, feel free to reach
            out to our customer care team at{" "}
            <span className="font-semibold text-primary-red">
              {phoneNumber}
            </span>
            . Our team is ready to help you with all your {airlineName} flight
            reservation needs and answer any questions you may have about{" "}
            {airlineName} flight tickets. Get in touch with the {airlineName}{" "}
            customer care number for support or to book your flight today. Call
            now and get the best deals for {airlineName} flight tickets and
            travel packages.
          </p>

          <a
            href={`tel:${phoneNumber.replace(/[^+\d]/g, "")}`}
            className="inline-block px-8 py-3 bg-primary-blue text-white font-bold rounded-full text-lg transition-all duration-300 hover:bg-primary-red hover:shadow-lg"
          >
            Book Now & Get Exclusive {airlineName} Deals
          </a>
        </div>
      </div>
    </section>
  );
};

export default AirlinesContent;
