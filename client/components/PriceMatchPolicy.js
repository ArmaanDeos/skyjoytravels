import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck } from "lucide-react";

export default function PriceMatchPolicySection() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white p-6 md:p-12">
      <div className="absolute inset-0 opacity-5 z-0">
        <BadgeCheck className="w-full h-full" />
      </div>

      <div className="relative z-10 space-y-10 mt-20 px-4">
        <h1 className="text-4xl font-bold mb-4 text-center text-white">
          Sky Joy Travels – Price Match Promise
        </h1>

        <Card className="bg-gray-900/30 text-white">
          <CardContent className="p-6 space-y-6">
            <p className="mb-4">
              At Sky Joy Travels, we’re committed to helping you secure the best
              possible travel deals. That’s why we offer our **Price Match
              Promise** — if you find the same itinerary at a lower
              all-inclusive price on a major online travel agency (OTA) within
              24 hours of booking with us, we’ll match the price and refund you
              the difference.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              What qualifies as the &quot;Same Itinerary&quot;?
            </h2>
            <p className="mb-4">
              The term *same itinerary* means that all booking details must be
              identical, including:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Flight number and airline</li>
              <li>Travel dates and times</li>
              <li>Passenger count</li>
              <li>Cabin class or seat type</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Why must the fare be &quot;offered and available&quot;?
            </h2>
            <p className="mb-4">
              To qualify, the competing fare must be publicly available and
              bookable online at the time our team verifies it. Screenshots or
              expired links will not be considered valid unless our agents can
              locate the fare live on the website.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              How to Claim the Price Match
            </h2>
            <p className="mb-4">
              Email us at{" "}
              <a
                className="text-primary-blue underline"
                href="mailto:info@skyjoytravels.online"
              >
                info@skyjoytravels.online
              </a>{" "}
              or call us at <strong>+1-(888) 370-1612</strong> within 24 hours
              of your booking.
            </p>
            <p className="mb-4">Please include:</p>
            <ul className="list-disc pl-5 mb-4">
              <li>Your Sky Joy Travels booking reference number</li>
              <li>URL or live screenshot of the lower-priced itinerary</li>
              <li>All relevant booking details for comparison</li>
            </ul>
            <p className="mb-4">
              Our Travel Experts will verify the fare, and if eligible, we’ll
              match it or refund the difference. If we are unable to validate
              the claim, we reserve the right to deny the request.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              What Doesn’t Qualify?
            </h2>
            <p className="mb-4">
              Our Price Match Promise does <strong>not</strong> apply to:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Member-only, reward, corporate, or group discounts</li>
              <li>Military, student, government, or tour operator fares</li>
              <li>Fares from coupons, flash sales, or promo codes</li>
              <li>Vacation packages, charter flights, or bulk fares</li>
              <li>Obvious pricing errors or unavailable rates</li>
            </ul>

            <p className="mt-8">
              For any questions or claims, contact our Price Match team
              directly. Your satisfaction is our priority, and we’re here to
              help you book with confidence.
            </p>
          </CardContent>
        </Card>

        {/* CTA Card */}
        <Card className="bg-[linear-gradient(90deg,_rgba(89,3,18,1)_0%,_rgba(171,3,19,1)_57%,_rgba(137,3,18,1)_100%)] text-white shadow-xl mt-10">
          <CardContent className="p-8 space-y-4 text-center">
            <h2 className="text-3xl font-bold">Have a Price Match Claim?</h2>
            <p className="text-lg">
              Call our support line or email us within 24 hours of booking to
              claim your refund. We’re here to help you travel smarter and
              cheaper.
            </p>
            <a href="tel:+1-(888) 370-1612">
              <button className="bg-white text-primary-blue cursor-pointer font-semibold py-3 px-6 rounded-[8px_0_8px_0] hover:bg-gray-100 transition relative z-50">
                Contact Support
              </button>
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
