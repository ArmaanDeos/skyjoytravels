import Image from "next/image";

const DealsService = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="w-full">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Image 1 */}
          <div className="relative overflow-hidden">
            <Image
              src="/images/best-price-gurantee.jpg"
              alt="Best Price Guaranteed"
              width={500}
              height={500}
              className="w-full h-[300px] sm:h-[400px] object-cover"
            />
            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center text-white text-center p-6 bg-primary-blue h-30">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">
                Best Price Guaranteed
              </h2>
              <p className="text-lg font-bold sm:text-lg">
                Cheap flight tickets to all destinations
              </p>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative overflow-hidden">
            <Image
              src="/images/excellent-customer-service.jpg"
              alt="Excellent Customer Service"
              width={500}
              height={500}
              className="w-full h-[300px] sm:h-[400px] object-cover"
            />
            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center text-white text-center p-6 bg-primary-blue h-30">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">
                Excellent Customer Service
              </h2>
              <p className="text-lg font-bold sm:text-lg">
                Fast changes and cancellations
              </p>
            </div>
          </div>

          {/* Image 3 */}
          <div className="relative overflow-hidden">
            <Image
              src="/images/secure-booking.jpg"
              alt="Secure Booking"
              width={500}
              height={500}
              className="w-full h-[300px] sm:h-[400px] object-cover"
            />
            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center text-white text-center p-6 bg-primary-blue h-30">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">
                Secure Booking
              </h2>
              <p className="text-lg font-bold sm:text-lg">
                Your personal information is protected
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-10">
          <Image
            src="/images/flight-reservation-image.jpg"
            alt="Flight Reservation"
            width={800}
            height={800}
            className="w-full h-screen object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default DealsService;
