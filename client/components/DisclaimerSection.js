import { Card, CardContent } from "@/components/ui/card";
import { Plane } from "lucide-react";

export default function SkyJoyDiscountDisclaimerSection() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white p-6 md:p-12">
      <div className="absolute inset-0 opacity-5 z-0">
        <Plane className="w-full h-full" />
      </div>
      <div className="relative z-10 space-y-10 mt-20 px-4">
        <h1 className="text-4xl font-bold mb-4 text-center text-white">
          Sky Joy Travels Discount Policy & Disclaimer
        </h1>

        <Card className="bg-gray-900/30 text-white">
          <CardContent className="p-6 space-y-6">
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Sky Joy Travels Discount Policy
            </h2>

            <p>
              At Sky Joy Travels, we strive to ensure that all the information
              provided on our website is accurate, up-to-date, and complete. Our
              data is sourced directly from our trusted travel service
              providers, so we make every effort to ensure the correctness of
              our content, pricing, and other details. However, as the travel
              industry is dynamic, we acknowledge that market factors can lead
              to frequent changes in airfares, hotel prices, and other related
              services due to demand and availability.
            </p>

            <p>
              While we continually update our website to reflect the latest
              changes, it is important to note that our prices and services may
              be subject to change without prior notice. We recommend that you
              always check the most current information before booking. Sky Joy
              Travels assumes no responsibility for any discrepancies arising
              from outdated or incorrect data on our site. By continuing to use
              our services, you accept the responsibility of checking the latest
              details and booking accordingly.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Sky Joy Travels Disclaimer
            </h2>

            <p>
              In line with the Terms & Conditions of Sky Joy Travels, we
              disclaim any liability for any losses, damages, or injuries that
              may occur as a result of your reliance on the information provided
              on our website or third-party links. This applies to all content,
              data, pricing, and tariffs published by us.
            </p>

            <p>
              The offers listed on Sky Joy Travels are subject to change based
              on several factors, including travel dates, booking dates,
              blackout dates, and other variables outlined in our terms and
              conditions. As a result, airfares, tariffs, and deals may
              fluctuate without prior notice. In the event you claim a discount,
              we will thoroughly review your booking to confirm the validity of
              the discount. We cannot guarantee the availability of any offers
              or discounts, as they are contingent upon several factors outside
              of our control.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Please Note:</h3>

            <ul className="space-y-2">
              <li>
                Prices and services are subject to availability and market
                changes.
              </li>
              <li>
                Sky Joy Travels is not liable for any inaccuracies in the data
                published on the website.
              </li>
              <li>
                Offers, airfares, and tariffs may change without prior notice
                based on factors such as demand and availability.
              </li>
              <li>
                Discount eligibility is subject to assessment and verification
                during the booking process.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
