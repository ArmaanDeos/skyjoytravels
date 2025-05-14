import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <section className="py-16 sm:py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 relative">
          {/* Left Image - Adjusted for small screens */}
          <div className="hidden md:block absolute top-1/2 -left-10 transform -translate-y-1/2 -translate-x-6">
            <Image
              src="/images/leaf-left.svg"
              alt="best flight deals"
              width={80}
              height={80}
              className="w-16 sm:w-20"
            />
          </div>

          {/* Feature 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-primary-blue mb-3">
              Book Your Flight
            </h3>
            <p className="text-primary-blue lg:text-xl text-base sm:text-lg font-medium">
              Book a flight with us and enjoy a genuine travel experience.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-primary-blue mb-3">
              Exclusive Deals
            </h3>
            <p className="text-primary-blue lg:text-xl text-base sm:text-lg font-medium">
              Get access to exclusive and unpublished airfare deals only
              available on our website.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-primary-blue mb-3">
              24/7 Support
            </h3>
            <p className="text-primary-blue text-base lg:text-xl sm:text-lg font-medium">
              Make changes, cancel your flight, or request a refund quickly. Our
              customer service team is always here to help you.
            </p>
          </div>

          {/* Right Image - Adjusted for small screens */}
          <div className="hidden md:block absolute top-1/2 -right-10 transform -translate-y-1/2 translate-x-6">
            <Image
              src="/images/leaf-right.svg"
              alt="best flight deals"
              width={80}
              height={80}
              className="w-16 sm:w-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
