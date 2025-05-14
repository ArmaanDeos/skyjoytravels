import Image from "next/image";

const BestTravelDeals = () => {
  return (
    <section className="py-10 bg-gray-100 px-5">
      <div className=" max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-primary-blue uppercase mb-10">
          Get Exclusive Online Travel Deals – Book Flights, Hotels, Cars, and
          More
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:grid-cols-1">
          <div className="col-span-2">
            <p className="text-justify mb-4 text-lg">
              Booking your next adventure is easier and more affordable with
              GoAirFare! We offer exclusive travel deals so you can book
              flights, hotels, car rentals, and more—all in one place. Whether
              you are traveling for business or leisure, we guarantee the best
              prices to make your journey seamless.
            </p>
            <h2 className="text-2xl font-bold mb-4">Save Big on Flights</h2>
            <p className="text-justify mb-4 text-lg">
              Unlock unbeatable flight deals on domestic and international
              routes. Our platform connects you with top airlines at the lowest
              fares, ensuring a budget-friendly travel experience.
            </p>
            <h2 className="text-2xl font-bold mb-4">Affordable Hotel Stays</h2>
            <p className="text-justify mb-4 text-lg">
              Find the perfect stay at the best price! From budget-friendly
              hotels to luxury resorts, we provide exclusive discounts to fit
              every traveler’s needs.
            </p>
          </div>
          <div className="col-span-1">
            <Image
              src="/images/travel-deals.jpg"
              width={500}
              height={500}
              alt="Travel Deals"
            />
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4"> Hassle-Free Car Rentals</h2>
        <p className="text-justify mb-4 text-lg">
          Need a ride? Choose from a wide selection of rental cars, from economy
          to luxury, all at affordable rates. Book early to secure the best
          deal!
        </p>
        <h2 className="text-2xl font-bold mb-4"> More Travel Services</h2>
        <p className="text-justify mb-4 text-lg">
          Beyond flights and hotels, we offer airport transfers, guided tours,
          and travel insurance—everything you need for a stress-free journey.
        </p>
        <p className="text-justify mb-4 text-lg">
          Book today and save more with our unbeatable online travel deals!
        </p>
      </div>
    </section>
  );
};

export default BestTravelDeals;
