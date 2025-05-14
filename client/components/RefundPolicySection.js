import { Card, CardContent } from "@/components/ui/card";
import { Plane } from "lucide-react";
import Link from "next/link";

export default function RefundPolicy() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white p-6 md:p-12">
      <div className="absolute inset-0 opacity-5 z-0">
        <Plane className="w-full h-full" />
      </div>
      <div className="relative z-10 space-y-10 mt-20 px-4">
        <h1 className="text-4xl font-bold mb-4 text-center text-white">
          Sky Joy Travels – Refund Policy
        </h1>

        <Card className="bg-gray-900/30 text-white">
          <CardContent className="p-6 space-y-6">
            <p className="mb-4">
              At <strong>Sky Joy Travels</strong>, we strive to process refunds
              promptly and fairly. The following outlines our refund policy for
              flights and travel bookings made through our platform.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">
              1. Refund Eligibility
            </h3>
            <p className="mb-4">
              Refunds are subject to the airline’s fare rules and ticket type.
              Refundable tickets will be processed according to the terms set by
              the carrier. Non-refundable tickets may allow partial refunds
              (usually taxes), if permitted by the airline.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">
              2. Refund Timeline
            </h3>
            <p className="mb-4">
              Refunds are typically processed within 7–14 business days after
              the cancellation request is accepted. In some cases, delays may
              occur due to bank processing times or airline confirmation delays.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">
              3. Method of Refund
            </h3>
            <p className="mb-4">
              Refunds will be made to the original payment method used during
              booking. For bookings made via credit/debit card or UPI, the
              amount will reflect in your account once the refund is processed
              successfully.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">4. Service Fees</h3>
            <p className="mb-4">
              Sky Joy Travels may deduct a nominal service fee from the total
              refund amount. This fee helps cover administrative and processing
              costs.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">
              5. Refunds for Flight Delays or Cancellations
            </h3>
            <p className="mb-4">
              If your flight is cancelled or significantly delayed by the
              airline, you may be eligible for a full refund or an alternative
              flight option. Sky Joy Travels will facilitate the refund as per
              the airline’s compensation and refund policy.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">
              6. No-Show Bookings
            </h3>
            <p className="mb-4">
              No-show passengers are generally not eligible for refunds unless
              the airline allows it under specific conditions. We advise
              cancelling your booking in advance to avoid total forfeiture of
              the ticket value.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">7. Need Help?</h3>
            <p>
              For any refund-related concerns, reach out to our support team via
              our{" "}
              <Link href="/contact" className="text-primary-blue underline">
                Contact Page
              </Link>{" "}
              or call our 24/7 helpline. We&apos;re committed to helping you
              receive your refund smoothly and swiftly.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
