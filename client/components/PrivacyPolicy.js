import { Card, CardContent } from "@/components/ui/card";
import { Plane } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicySection() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white p-6 md:p-12">
      <div className="absolute inset-0 opacity-5 z-0">
        <Plane className="w-full h-full" />
      </div>
      <div className="relative z-10 space-y-10 mt-20 px-4">
        <h1 className="text-4xl font-bold mb-4 text-center text-white">
          Sky Joy Travels Holidays – Privacy Policy
        </h1>

        <Card className="bg-gray-900/30 text-white">
          <CardContent className="p-6 space-y-6">
            <p className="mb-4">
              At Red Umbrella Holidays, your privacy is our topmost priority. We
              want to ensure that you understand how we collect, use, and share
              your information. This Privacy Policy explains our practices when
              you visit our website or use our services via desktop, mobile, or
              contact centers.
            </p>

            <p className="mb-4">
              By accessing or using our website and services, you agree to this
              Privacy Policy and our Terms & Conditions.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Personal Information
            </h2>

            <h3 className="text-xl font-medium mb-2">Information We Collect</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>Name, postal address, phone number, and email</li>
              <li>Credit/debit card details</li>
              <li>
                Passport number and travel preferences (e.g., dietary or health
                needs)
              </li>
              <li>Social media account information</li>
            </ul>
            <p className="mb-4">
              If you provide personal details of others, you must have their
              consent and authorization to share their data with us.
            </p>

            <h3 className="text-xl font-medium mb-2">
              How We Collect Information
            </h3>
            <ul className="list-disc pl-5 mb-4">
              <li>
                Via bookings or newsletter subscriptions through our website
              </li>
              <li>Offline via call centers or customer support</li>
              <li>
                Via social media platforms such as Facebook, Instagram, and
                others
              </li>
            </ul>

            <h3 className="text-xl font-medium mb-2">
              How We Use Your Information
            </h3>
            <ul className="list-disc pl-5 mb-4">
              <li>To complete your bookings and communicate with you</li>
              <li>To respond to your inquiries and send promotional offers</li>
              <li>To send administrative and legal updates</li>
              <li>To improve our services and personalize your experience</li>
              <li>To prevent fraud and enhance security</li>
              <li>To comply with US laws and requests from authorities</li>
            </ul>

            <h3 className="text-xl font-medium mb-2">Who We Share It With</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>
                Service providers (hosting, analytics, payment gateways, etc.)
              </li>
              <li>
                Our subsidiaries, partners, and affiliated travel suppliers
              </li>
              <li>Airlines, hotels, and insurance partners</li>
              <li>
                Review sites and third-party integrations with your consent
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Other Information We Collect
            </h2>

            <p className="mb-4">
              We also collect anonymous data that does not identify you
              directly, such as:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Browser and device information</li>
              <li>Geographic location and IP address</li>
              <li>Cookies, pixel tags, and analytics data</li>
            </ul>

            <p className="mb-4">
              Cookies help us understand your behavior and tailor content. Pixel
              tags help us evaluate campaign effectiveness. You can disable
              location and cookies via your device/browser settings.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Third-Party Services
            </h2>
            <p className="mb-4">
              We are not responsible for third-party websites linked to ours,
              including social media buttons (e.g., Facebook, Google). Please
              review their privacy policies separately.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Third-Party Advertisers
            </h2>
            <p className="mb-4">
              We may work with third-party advertisers who use cookies to
              deliver relevant ads based on your usage. Learn more about opting
              out here:
              <br />
              <a
                className="text-primary-blue underline"
                href="http://www.networkadvertising.org/managing/opt_out.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Network Advertising Initiative
              </a>{" "}
              &nbsp;|&nbsp;
              <a
                className="text-primary-blue underline"
                href="https://optout.aboutads.info/"
                target="_blank"
                rel="noopener noreferrer"
              >
                AboutAds.info
              </a>
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Security</h2>
            <p className="mb-4">
              We implement organizational and technical measures to protect your
              data. However, no system is 100% secure. If you suspect any data
              breach, contact us immediately at{" "}
              <a
                className="text-primary-blue underline"
                href="mailto:info@https://skyjoytravels.online"
              >
                info@https://skyjoytravels.online
              </a>{" "}
              or call <strong>+1-(888) 370-1612 </strong>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Your Choices & Access
            </h2>
            <p className="mb-4">
              You may opt out of promotional emails by contacting us. However,
              you will continue to receive essential communications related to
              your bookings.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Retention Period
            </h2>
            <p className="mb-4">
              We retain your Personal Information as long as required for our
              services or as per legal obligations. In some cases, this may
              include extended periods for regulatory compliance.
            </p>

            <p className="mt-8">
              For any privacy-related concerns, please contact us at{" "}
              <a
                className="text-primary-blue underline"
                href="mailto:info@https://skyjoytravels.online"
              >
                info@https://skyjoytravels.online
              </a>{" "}
              or call <strong>+1-(888) 370-1612 </strong>.
            </p>
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
