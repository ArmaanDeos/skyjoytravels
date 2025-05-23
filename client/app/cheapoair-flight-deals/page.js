import FlightSearch from "@/components/FlightSearchForm";
import Footer from "@/components/Footer";
import HotelSearch from "@/components/Forms/HotelSearchForm";
import VacationSearch from "@/components/Forms/VacationSearchForm";
import CheapFlightDeals from "@/components/GenericComponents/CheapFlightDeals";
import Faqs from "@/components/GenericComponents/FAQs";
import GenericBanner from "@/components/GenericComponents/GenericBanner";
import MobilePromo from "@/components/GenericComponents/MobilePromo";
import MobilePromoModal from "@/components/GenericComponents/MobilePromoModal";
import WhyBookWithSkyJoyTravels from "@/components/GenericComponents/WhyBookingWIthSkyJoy";
import WhyChooseUs from "@/components/GenericComponents/WhyChooseUs";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Hotel, Palmtree, Plane } from "lucide-react";
import { Suspense } from "react";

const CheapoairReservations = () => {
  return (
    <div className="">
      <div className="hidden md:block">
        <Navbar />
      </div>

      <MobilePromo
        headingText="Cheapoair Reservations Desk"
        phoneNumber="+1-(888) 370-1612"
        primaryBgColor="#eb5628"
        buttonColor="#eb5628"
        textColor="#ffffff"
      />

      <GenericBanner
        backgroundImage="/images/brand-bg.jpg"
        heading="Cheapoair Flights at Unbeatable Prices"
        subheading="Book top destinations worldwide with trusted Cheapoair fares through Skyjoy Travels."
      />

      {/* Mobile Search Form - Shows below banner on small screens */}
      <div className="block md:hidden bg-white py-6 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="flights">
            <TabsContent value="flights">
              <Suspense fallback={<div>Loading...</div>}>
                <FlightSearch />
              </Suspense>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Services />

      <CheapFlightDeals brandName="Cheapoair" />

      <WhyChooseUs
        airlineName="Cheapoair"
        travelAgency="Skyjoy Travels"
        primaryColor="text-red-700"
        accentColor="from-red-800 to-orange-400"
      />

      <WhyBookWithSkyJoyTravels
        brandName="Cheapoair"
        phoneNumber="+1-888-370-1612"
        phoneDisplay="+1 (888) 370-1612"
      />

      <Faqs brandName="Cheapoair" agencyName="Skyjoy Travels" />

      <Footer />

      <MobilePromoModal
        bgColor="bg-[#eb5628]"
        deskTitle="Cheapoair Reservations Desk"
        phoneNumber="+1-888-370-1612"
      />
    </div>
  );
};

export default CheapoairReservations;
