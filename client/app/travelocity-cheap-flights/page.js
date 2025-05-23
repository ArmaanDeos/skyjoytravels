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

const TravelocityReservations = () => {
  return (
    <div className="">
      {/* Navbar for desktop */}
      <div className="hidden md:block">
        <Navbar />
      </div>

      {/* Mobile Promo styled for Travelocity */}
      <MobilePromo
        headingText="Travelocity Booking Desk"
        phoneNumber="+1-(888) 370-1612"
        primaryBgColor="#0060a9"
        buttonColor="#0060a9"
        textColor="#ffffff"
      />

      {/* Banner Section */}
      <GenericBanner
        backgroundImage="/images/brand-bg.jpg"
        heading="Book with Confidence – Travelocity Flights via Skyjoy Travels"
        subheading="Trusted fares. Expert support. Same Travelocity experience, powered by Skyjoy Travels."
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
      <CheapFlightDeals brandName="Travelocity" />

      {/* Why Choose Section with Travelocity branding */}
      <WhyChooseUs
        airlineName="Travelocity"
        travelAgency="Skyjoy Travels"
        primaryColor="text-blue-700"
        accentColor="from-blue-900 to-orange-400"
      />

      {/* Trust-Builder Content Section */}
      <WhyBookWithSkyJoyTravels
        brandName="Travelocity"
        phoneNumber="+1-888-370-1612"
        phoneDisplay="+1 (888) 370-1612"
      />

      {/* FAQs specific to Travelocity via Skyjoy Travels */}
      <Faqs brandName="Travelocity" agencyName="Skyjoy Travels" />

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Call-to-Action Promo */}
      <MobilePromoModal
        bgColor="bg-[#0060a9]"
        deskTitle="Travelocity Reservations Desk"
        phoneNumber="+1-888-370-1612"
      />
    </div>
  );
};

export default TravelocityReservations;
