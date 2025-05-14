import { Card, CardContent } from "@/components/ui/card";
import { Plane } from "lucide-react";

export default function TaxesAndFeesSection() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white p-6 md:p-12">
      <div className="absolute inset-0 opacity-5 z-0">
        <Plane className="w-full h-full" />
      </div>
      <div className="relative z-10 space-y-10 mt-20 px-4">
        <h1 className="text-4xl font-bold mb-4 text-center text-white">
          Sky Joy Travels – Taxes and Fees
        </h1>

        <Card className="bg-gray-900/30 text-white">
          <CardContent className="p-6 space-y-6">
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Taxes and Fees Breakdown
            </h2>

            <table className="min-w-full table-auto text-white">
              <thead>
                <tr>
                  <th className="border-b px-4 py-2 text-left">
                    Name & Description
                  </th>
                  <th className="border-b px-4 py-2 text-left">May Apply To</th>
                  <th className="border-b px-4 py-2 text-left">Code</th>
                  <th className="border-b px-4 py-2 text-left">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b px-4 py-2">
                    Security & Insurance Surcharge Departure Israeli Carriers
                    <br />
                    On all Israeli Flights, also when the arrival/departure is
                    not from/to Israel.
                  </td>
                  <td className="border-b px-4 py-2">Each Way</td>
                  <td className="border-b px-4 py-2">AP</td>
                  <td className="border-b px-4 py-2">$4.00</td>
                </tr>
                <tr>
                  <td className="border-b px-4 py-2">
                    Travel Facilities Tax (Alaska/Hawaii Ticket Tax)
                    <br />
                    Charged for certain flights to/from Alaska and/or Hawaii.
                  </td>
                  <td className="border-b px-4 py-2">
                    U.S. Domestic and International
                  </td>
                  <td className="border-b px-4 py-2">US</td>
                  <td className="border-b px-4 py-2">$10.60 OW / $21.20 RT</td>
                </tr>
                <tr>
                  <td className="border-b px-4 py-2">
                    U.S. Flight Segment Tax Domestic
                    <br />
                    Charged for flights traversing the U.S. depending on the
                    per-segment fee.
                  </td>
                  <td className="border-b px-4 py-2">
                    U.S. Domestic and International
                  </td>
                  <td className="border-b px-4 py-2">ZP</td>
                  <td className="border-b px-4 py-2">$4.80</td>
                </tr>
                <tr>
                  <td className="border-b px-4 py-2">
                    U.S. Excise Tax (U.S. Domestic Transportation Tax)
                    <br />
                    Charged for flights around the U.S. or Canada/Mexico and its
                    225-mile buffer zones.
                  </td>
                  <td className="border-b px-4 py-2">U.S. Domestic</td>
                  <td className="border-b px-4 py-2">US</td>
                  <td className="border-b px-4 py-2">7.50%</td>
                </tr>
                <tr>
                  <td className="border-b px-4 py-2">
                    Passenger Facility Charge (PFC)
                    <br />
                    This is charged as a variable fee as a facilities
                    improvement tax by particular airports. A maximum of 4
                    charges on one itinerary can be charged.
                  </td>
                  <td className="border-b px-4 py-2">Per Arrival in USA</td>
                  <td className="border-b px-4 py-2">XF</td>
                  <td className="border-b px-4 py-2">$4.50</td>
                </tr>
                <tr>
                  <td className="border-b px-4 py-2">
                    September 11th Security Fee (U.S. Passenger Civil Aviation
                    Security Fee)
                    <br />
                    For every one-way trip; Not over $11.20 per round trip.
                    Charged to passengers on domestic and international flights
                    for new civil aviation security measures enforced after
                    9/11.
                  </td>
                  <td className="border-b px-4 py-2">
                    U.S. Domestic and International
                  </td>
                  <td className="border-b px-4 py-2">AY</td>
                  <td className="border-b px-4 py-2">$5.60</td>
                </tr>
                <tr>
                  <td className="border-b px-4 py-2">
                    U.S. International Transportation (Arrival/Departure) Tax
                    <br />
                    Levied on all flights arriving/departing from the U.S.,
                    Puerto Rico, or the U.S. Virgin Islands.
                  </td>
                  <td className="border-b px-4 py-2">International</td>
                  <td className="border-b px-4 py-2">US</td>
                  <td className="border-b px-4 py-2">$21.10</td>
                </tr>
                <tr>
                  <td className="border-b px-4 py-2">
                    U.S. Animal and Plant Health Inspection Service (APHIS) Fee
                    <br />
                    Levied on all flights starting abroad, except Canada, and
                    landing in the U.S., Puerto Rico, or the U.S. Virgin
                    Islands.
                  </td>
                  <td className="border-b px-4 py-2">International</td>
                  <td className="border-b px-4 py-2">XA</td>
                  <td className="border-b px-4 py-2">$3.83</td>
                </tr>
                <tr>
                  <td className="border-b px-4 py-2">
                    U.S. Immigration User Fee
                    <br />
                    Applicable on all international arrivals to the U.S., Puerto
                    Rico, or the U.S. Virgin Islands.
                  </td>
                  <td className="border-b px-4 py-2">International</td>
                  <td className="border-b px-4 py-2">XY</td>
                  <td className="border-b px-4 py-2">$7.00</td>
                </tr>
                <tr>
                  <td className="border-b px-4 py-2">
                    U.S. Customs User Fee
                    <br />
                    Charged to passengers arriving in the U.S. or Puerto Rico
                    and the District of Columbia, for flights that don’t begin
                    in the U.S. territories.
                  </td>
                  <td className="border-b px-4 py-2">International</td>
                  <td className="border-b px-4 py-2">YC</td>
                  <td className="border-b px-4 py-2">$6.52</td>
                </tr>
                <tr>
                  <td className="border-b px-4 py-2">
                    International Taxes and Government or Airport-imposed Fees
                    <br />
                    International Taxes and Government or Airport-imposed fees.
                  </td>
                  <td className="border-b px-4 py-2">International</td>
                  <td className="border-b px-4 py-2">Varies</td>
                  <td className="border-b px-4 py-2">
                    up to several hundred dollars
                  </td>
                </tr>
                <tr>
                  <td className="border-b px-4 py-2">
                    Online Air Transaction Service Fees
                    <br />
                    On all airfares, a service fee of up to $30 is levied on per
                    pax for every passenger type.
                  </td>
                  <td className="border-b px-4 py-2">
                    U.S. Domestic and International
                  </td>
                  <td className="border-b px-4 py-2">Fees</td>
                  <td className="border-b px-4 py-2">up to $30.00</td>
                </tr>
                <tr>
                  <td className="border-b px-4 py-2">
                    Online Hotel Transaction Services Fees
                    <br />
                    (per night, per room)
                  </td>
                  <td className="border-b px-4 py-2">All Hotels</td>
                  <td className="border-b px-4 py-2">Fees</td>
                  <td className="border-b px-4 py-2">up to $35</td>
                </tr>
                <tr>
                  <td className="border-b px-4 py-2">
                    Online Car Rental Transaction Service Fees
                    <br />
                    (per rental)
                  </td>
                  <td className="border-b px-4 py-2">All Car Rentals</td>
                  <td className="border-b px-4 py-2">Fees</td>
                  <td className="border-b px-4 py-2">$14.00</td>
                </tr>
              </tbody>
            </table>

            <p className="mt-6 text-sm text-gray-300">
              *Approximate amount. Service fees on all transactions are
              non-refundable. Government taxes are subject to change without
              prior notice.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
