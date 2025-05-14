import { Card, CardContent } from "@/components/ui/card";
import { Plane } from "lucide-react";
import Link from "next/link";

export default function CancellationPolicy() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white p-6 md:p-12">
      <div className="absolute inset-0 opacity-5 z-0">
        <Plane className="w-full h-full" />
      </div>
      <div className="relative z-10 space-y-10 mt-20 px-4">
        <h1 className="text-4xl font-bold mb-4 text-center text-white">
          Sky Joy Travels – Cancellation Policy
        </h1>

        <Card className="bg-gray-900/30 text-white">
          <CardContent className="p-6 space-y-6">
            <p className="mb-4">
              At <strong>Sky Joy Travels</strong>, we understand that plans may
              change. Our cancellation policy is designed to be clear, fair, and
              transparent, ensuring you know exactly what to expect if you need
              to cancel your travel plans.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">
              1. General Guidelines
            </h3>
            <p className="mb-4">
              Cancellation policies vary based on the airline, ticket type, and
              time of cancellation. It’s important to review the fare rules at
              the time of booking to understand the specific terms attached to
              your ticket.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">
              2. Cancellation Procedure
            </h3>
            <p className="mb-4">
              You can cancel your booking by contacting our customer support
              team or through your Sky Joy Travels account under the “My
              Bookings” section. Make sure to have your booking reference number
              ready for quick assistance.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">
              3. Refund Policy
            </h3>
            <p className="mb-4">
              Refund eligibility is determined by the airline’s policy. If your
              ticket is refundable, the applicable amount will be processed
              within 7–14 business days. For non-refundable tickets, only
              applicable taxes may be refunded.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">
              4. Cancellation Fees
            </h3>
            <div className="mb-4">
              Cancellation charges may include:
              <ul className="list-disc list-inside mt-2">
                <li>Airline cancellation fee</li>
                <li>Sky Joy Travels service fee</li>
                <li>Any applicable fare difference</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-2">
              5. No-Show Policy
            </h3>
            <p className="mb-4">
              If you fail to cancel your booking prior to the flight’s departure
              and do not show up, the ticket may be marked as a “no-show,”
              making it non-refundable.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">
              6. Partial Cancellations
            </h3>
            <p className="mb-4">
              For round-trip or multi-city itineraries, partial cancellations
              may be available depending on airline rules. Contact our support
              team to explore available options.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">
              7. Contact for Cancellations
            </h3>
            <p>
              If you need assistance, please reach out to our support team via
              our{" "}
              <a href="/contact" className="text-primary-blue underline">
                Contact Page
              </a>{" "}
              or call our 24/7 helpline listed in the footer. We’re here to help
              you with the best possible solution.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
