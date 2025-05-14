import { PhoneCall, SquareArrowDownRightIcon } from "lucide-react";

const OurPlatform = () => {
  return (
    <section className="py-16 sm:py-20 bg-primary-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-center sm:text-left leading-relaxed">
          People love our platform because it’s easy to use and packed with
          extra features. But that’s just one of many reasons. Our customers
          also highlight:
        </h3>

        {/* Features & Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Feature List - Column 1 */}
          <ul className="space-y-4">
            <li className="flex items-center gap-3 sm:gap-4 text-lg lg:text-xl font-bold">
              <SquareArrowDownRightIcon className="text-white w-6 h-6" />
              No waiting times
            </li>
            <li className="flex items-center gap-3 sm:gap-4 text-lg lg:text-xl font-bold">
              <SquareArrowDownRightIcon className="text-white w-6 h-6" />
              No hidden fees
            </li>
          </ul>

          {/* Feature List - Column 2 */}
          <ul className="space-y-4">
            <li className="flex items-center gap-3 sm:gap-4 text-lg lg:text-xl font-bold">
              <SquareArrowDownRightIcon className="text-white w-6 h-6" />
              Expert support
            </li>
            <li className="flex items-center gap-3 sm:gap-4 text-lg lg:text-xl font-bold">
              <SquareArrowDownRightIcon className="text-white w-6 h-6" />
              24/7 online assistance
            </li>
          </ul>

          {/* Contact Button */}
          <div className="flex justify-center sm:justify-start lg:justify-end">
            <a
              href="tel:+18001234567"
              className="flex items-center gap-3 text-xl sm:text-2xl lg:text-3xl font-bold border-b-4 border-secondary-blue py-4 px-6 bg-secondary-blue rounded-md tracking-wide transition-all duration-300 hover:bg-primary-blue hover:border-white"
            >
              <PhoneCall className="w-7 h-7" /> +1-(844) 408-2510
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPlatform;
