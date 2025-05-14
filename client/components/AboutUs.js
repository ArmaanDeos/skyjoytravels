import { Card, CardContent } from "@/components/ui/card";
import { Plane } from "lucide-react";

export default function SkyJoyAboutSection() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white p-6 md:p-12">
      <div className="absolute inset-0 opacity-5 z-0">
        <Plane className="w-full h-full" />
      </div>
      <div className="relative z-10 space-y-10 mt-20 px-4">
        <h1 className="text-4xl font-bold mb-4 text-center text-white">
          Welcome to Sky Joy Travels
        </h1>

        <Card className="bg-gray-900/30 text-white">
          <CardContent className="p-6 space-y-6">
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Your Gateway to Exceptional Travel Experiences
            </h2>

            <p>
              At Sky Joy Travels, we are proud to offer an exceptional travel
              experience for all our customers, no matter where in the world
              they wish to explore. From luxurious first-class flights to
              budget-friendly accommodations, we provide everything to make your
              journey unforgettable. Whether you’re planning a family getaway, a
              romantic escape, or an adventure to exotic destinations, our team
              works tirelessly to ensure that your travels are meticulously
              planned to exceed all expectations.
            </p>

            <p>
              Our mission is simple – to make your travel dreams a reality. We
              take the hassle out of the booking process and help you embrace
              the joy of exploring new places. With exclusive flight deals from
              over 500 global airline providers and access to over 1,500
              cities&apos; worth of holiday accommodations, we make sure that
              every trip is as smooth and delightful as possible. At Sky Joy
              Travels, you can trust that each itinerary is designed with care,
              attention to detail, and the highest level of service.
            </p>

            <p>
              From personalized journeys to breathtaking destinations like the
              turquoise waters of the Maldives to the historic wonders of Rome,
              we make sure that every detail of your journey is tailored to
              perfection. Whether it’s a serene beach vacation or an
              action-packed adventure, we’re here to guide you every step of the
              way.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">
              Why Book With Sky Joy Travels?
            </h3>

            <ul className="space-y-2">
              <li>Exclusive flight offers from 500+ top-rated airlines.</li>
              <li>Affordable hotels in over 1,500 cities worldwide.</li>
              <li>
                100% customizable holiday itineraries crafted by travel experts.
              </li>
              <li>
                Special holiday packages at the best prices with our Low-Fare
                Promise.
              </li>
              <li>Transparent booking terms with no hidden fees.</li>
              <li>
                Dedicated travel support team to assist you with any queries,
                anytime.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-4">
              Ready to Plan Your Next Adventure?
            </h3>

            <p>
              The world is waiting for you, and Sky Joy Travels is here to take
              you there. Let us handle the details so you can enjoy every moment
              of your journey. Whether you’re looking for a family vacation, a
              solo trip, or a group adventure, our team is ready to turn your
              dreams into a reality.
            </p>

            <div className="mt-8 flex justify-center space-x-4">
              <a
                href="tel:+1-(888) 370-1612"
                className="bg-primary-blue text-white py-2 px-4 rounded-md hover:bg-primary-red transition duration-200"
              >
                Call Us: +1-(888) 370-1612
              </a>
              <a
                href="mailto:info@skyjoytravels.com"
                className="bg-primary-blue text-white py-2 px-4 rounded-md hover:bg-primary-red transition duration-200"
              >
                Email Us: info@skyjoytravels.com
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
