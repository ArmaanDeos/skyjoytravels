import { Card, CardContent } from "@/components/ui/card";
import { Plane } from "lucide-react";
import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white p-6 md:p-12">
      <div className="absolute inset-0 opacity-5 z-0">
        <Plane className="w-full h-full" />
      </div>
      <div className="relative z-10 space-y-10 mt-20 px-4">
        <h1 className="text-4xl font-bold mb-4 text-center text-white">
          Sky Joy Travels Holidays – Terms & Conditions
        </h1>

        <Card className="bg-gray-900/30 text-white">
          <CardContent className="p-6 space-y-6">
            <p>
              Welcome to Sky Joy Travels By using our website
              (https://skyjoytravels.online), mobile site, or app, you&apos;re
              agreeing to the terms outlined here. These apply to all the travel
              services we offer — including flights and holiday packages.
            </p>
            <p>
              We’ve designed these terms to be clear and simple. If anything
              sounds confusing, feel free to reach out. When we say “we,” “our,”
              or “us,” we’re talking about Sky Joy Travels . When we say “you,”
              we’re referring to our valued users and travelers.
            </p>
            <p>
              Before you make any bookings, please take a moment to read through
              this page as well as our{" "}
              <Link
                href="/privacy-policy"
                className="text-primary-red underline"
              >
                Privacy Policy
              </Link>
              . Using our site means you accept everything mentioned here — so
              it&apos;s worth the read.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Booking Confirmation:</strong> All bookings are based on
                availability. A reservation is confirmed only after full payment
                has been made and acknowledged.
              </li>
              <li>
                <strong>Changes & Cancellations:</strong> Plans can change — we
                get it! Any changes or cancellations will follow the rules of
                the airline or hotel you’ve booked. Additional charges may
                apply.
              </li>
              <li>
                <strong>Responsibility:</strong> We act as a link between you
                and third-party providers (like airlines or hotels). If there’s
                a delay, cancellation, or issue on their end, we’ll do our best
                to help but can’t take responsibility for their services.
              </li>
              <li>
                <strong>Documents & Health:</strong> Make sure your passport,
                visa, and any health requirements (like vaccinations) are sorted
                before you travel.
              </li>
              <li>
                <strong>Travel Insurance:</strong> We strongly suggest getting
                travel insurance. It can save you a lot of trouble in case of
                unexpected issues.
              </li>
              <li>
                <strong>Website Content:</strong> We aim to keep our info
                up-to-date and accurate, but some details are pulled from
                third-party sources and may change without notice.
              </li>
              <li>
                <strong>Unforeseen Events:</strong> We’re not liable for delays
                or service issues caused by events out of our control — like
                natural disasters, weather problems, or strikes.
              </li>
              <li>
                <strong>Jurisdiction:</strong> These terms follow Indian law.
                Any legal matters will be handled in the courts of New Delhi,
                India.
              </li>
              <li>
                <strong>Proper Use:</strong> Don’t misuse our platform — no
                spamming, offensive language, or illegal activities. We reserve
                the right to block users who violate this.
              </li>
              <li>
                <strong>Updates:</strong> We may update these terms from time to
                time. Using the site after changes means you agree to the new
                version.
              </li>
            </ul>

            <p>
              If you need help or want more clarity on anything mentioned above,
              our support team is happy to assist you.
            </p>

            {/* Flight Specific Terms Start Here */}
            <div className="space-y-8 pt-10 border-t border-white/20">
              <h2 className="text-2xl font-bold">Flight Terms & Conditions</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg">
                    International Travel Guidelines
                  </h3>
                  <p>
                    All international travel is subject to the Montreal
                    Convention, which may limit airline liability for injuries
                    or death. Travelers must carry valid passports and visas
                    (tourist, business, or transit) and present them when
                    required. Sky Joy Travels Holidays is not responsible for
                    denied entry or boarding due to incomplete or invalid
                    documentation.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Visa & Passport Requirements
                  </h3>
                  <p>
                    Check with the relevant embassy or consulate before booking.
                    Regulations vary and change frequently. We are not liable
                    for disruptions due to missing or incorrect documents.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Health & Medical Precautions
                  </h3>
                  <p>
                    Consult your doctor before traveling. Carry prescriptions
                    and check for vaccination requirements. Travel insurance is
                    highly recommended.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Aircraft Disinfection Notice
                  </h3>
                  <p>
                    Airlines may use WHO-approved insecticides on board, either
                    sprayed while passengers are present or applied before
                    boarding.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Baggage Policy</h3>
                  <p>
                    Always confirm baggage rules with the airline. Most low-cost
                    carriers charge extra for checked baggage.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Check-In Guidelines</h3>
                  <p>
                    Domestic: Arrive at least 90 minutes before departure.
                    <br />
                    International: Arrive at least 3 hours before departure.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Flight Schedule Changes
                  </h3>
                  <p>
                    Flight times may change due to operational issues. Always
                    confirm your schedule 72 hours prior to travel. Post
                    check-in changes are handled by the airline directly.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Overbooking Policy</h3>
                  <p>
                    Airlines may overbook flights. Check with the carrier for
                    their specific terms regarding denied boarding or
                    compensation.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Pricing Policy</h3>
                  <p>
                    Fares are dynamic and confirmed only after full payment. We
                    are not responsible for price increases before ticket
                    issuance. Segment misuse may result in cancellation.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Cancellations & Refunds
                  </h3>
                  <p>
                    Most tickets are non-refundable. Refunds, if applicable, may
                    take 60–90 days and exclude service charges.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Contact Center Booking Fee
                  </h3>
                  <p>
                    Bookings through our contact center may include additional
                    service fees between $10–$200.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Currency & Payment</h3>
                  <p>
                    Charges in non-USD/CAD currencies may result in foreign
                    transaction fees. Check with your bank.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Unaccompanied Minors
                  </h3>
                  <p>
                    Travelers under 16 must be accompanied. Airline rules vary.
                    Confirm with your airline before booking.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    Credit Card Chargebacks
                  </h3>
                  <p>
                    Contact us before filing a chargeback. Unauthorized
                    chargebacks may result in booking cancellations. Coupons and
                    discounts are non-refundable.
                  </p>
                </div>
              </div>
            </div>
            {/* Flight Specific Terms End Here */}
          </CardContent>
        </Card>
      </div>
      {/* CTA Card */}
      <Card className="bg-[linear-gradient(90deg,_rgba(89,3,18,1)_0%,_rgba(171,3,19,1)_57%,_rgba(137,3,18,1)_100%)] text-white shadow-xl mt-10">
        <CardContent className="p-8 space-y-4 text-center">
          <h2 className="text-3xl font-bold">
            Got Questions or Special Requests?
          </h2>
          <p className="text-lg">
            Our friendly travel experts are always ready to help with your trip.
            Whether it’s customizing a package, clarifying a policy, or booking
            last-minute flights, we’re just a click away.
          </p>
          <a href="tel:+1-(888) 370-1612">
            <button className="bg-white text-primary-blue cursor-pointer font-semibold py-3 px-6 rounded-[8px_0_8px_0] hover:bg-gray-100 transition relative z-50">
              Talk to Our Team
            </button>
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
