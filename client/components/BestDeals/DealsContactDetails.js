import Image from "next/image";

const DealsContactDetails = () => {
  return (
    <section className="py-16 sm:py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
              Contact Information
            </h2>
            <h3 className="text-xl font-bold text-primary-blue mb-2">
              Goairfare Agency
            </h3>
            <p className="text-gray-700 mb-4">
              A licensed travel agency based in the USA.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Our Address
            </h3>
            <p className="text-gray-700 mb-4">301 Rae Rd Many , LA 71449</p>

            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Customer Service Email
            </h3>
            <p className="text-gray-700 mb-4">info@goairfare.online</p>

            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Customer Support Phone
            </h3>
            <p className="text-gray-700 text-lg font-bold">+1-(844) 408-2510</p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <Image
              src="/images/flight-deal-contact.jpg"
              alt="Flight Deals Contact"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsContactDetails;
