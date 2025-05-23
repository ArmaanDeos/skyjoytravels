"use client";

import FlightSearch from "@/components/FlightSearchForm";
import Footer from "@/components/Footer";
import CheapFlightDeals from "@/components/GenericComponents/CheapFlightDeals";
import Faqs from "@/components/GenericComponents/FAQs";
import GenericBanner from "@/components/GenericComponents/GenericBanner";
import MobilePromo from "@/components/GenericComponents/MobilePromo";
import MobilePromoModal from "@/components/GenericComponents/MobilePromoModal";
import WhyBookWithSkyJoyTravels from "@/components/GenericComponents/WhyBookingWIthSkyJoy";
import WhyChooseUs from "@/components/GenericComponents/WhyChooseUs";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Suspense } from "react";

const BookingHoldingsReservations = () => {
  return (
    <div className="">
      {/* Navbar for desktop */}
      <div className="hidden md:block">
        <Navbar />
      </div>

      {/* Mobile Promo styled for Booking Holdings Inc. */}
      <MobilePromo
        headingText="Booking Holdings Support Desk"
        phoneNumber="+1-(888) 370-1612"
        primaryBgColor="#003B95" // Booking blue
        buttonColor="#003B95"
        textColor="#ffffff"
      />

      {/* Banner Section */}
      <GenericBanner
        backgroundImage="/images/brand-bg.jpg"
        heading="Access Trusted Travel Brands through Skyjoy Travels"
        subheading="Book flights with confidence through Skyjoy Travels — your trusted partner for Booking Holdings brands."
      />

      {/* Mobile Flight Search */}
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

      {/* Services Overview */}
      <Services />

      {/* Featured Flight Deals */}
      <CheapFlightDeals brandName="Booking Holdings Inc." />

      {/* Why Choose Us Section */}
      <WhyChooseUs
        airlineName="Booking Holdings Inc."
        travelAgency="Skyjoy Travels"
        primaryColor="text-blue-900"
        accentColor="from-blue-900 to-sky-400"
      />

      {/* Trust-Building Section */}
      <WhyBookWithSkyJoyTravels
        brandName="Booking Holdings Inc."
        phoneNumber="+1-888-370-1612"
        phoneDisplay="+1 (888) 370-1612"
      />

      {/* FAQs tailored for Booking Holdings customers */}
      <Faqs brandName="Booking Holdings Inc." agencyName="Skyjoy Travels" />

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Call-to-Action Promo */}
      <MobilePromoModal
        bgColor="bg-[#003B95]"
        deskTitle="Booking Holdings Reservations Desk"
        phoneNumber="+1-888-370-1612"
      />
    </div>
  );
};

export default BookingHoldingsReservations;
