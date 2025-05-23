"use client";

import FlightSearch from "@/components/FlightSearchForm";
import Footer from "@/components/Footer";
import AirlinesContent from "@/components/GenericComponents/AirlinesContent";
import Faqs from "@/components/GenericComponents/FAQs";
import GenericBanner from "@/components/GenericComponents/GenericBanner";
import PopupModal from "@/components/GenericComponents/MobileModal";
import PopularDeals from "@/components/GenericComponents/PopularDeals";
import PromotionBanner from "@/components/GenericComponents/PromotionBanner";
import WhyChooseUs from "@/components/GenericComponents/WhyChooseUs";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Suspense } from "react";

const PricelineReservations = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Navbar */}
      <div className="hidden md:block">
        <Navbar />
      </div>

      {/* Promo Banner */}
      <PromotionBanner
        logoSrc="/images/priceline.svg"
        serviceName="Priceline Flight Deals"
        ctaBgColor="#2b66e7"
      />

      {/* Hero / Banner */}
      <GenericBanner
        backgroundImage="/images/brand-bg.jpg"
        heading="Skyjoy Travels + Priceline: Smarter Ways to Fly"
        subheading="Discover unbeatable flight deals powered by Priceline — flexible options, big savings, and trusted service."
      />

      {/* Mobile Search Bar */}
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

      {/* Services Section */}
      <Services />

      {/* Popular Flight Deals */}
      <PopularDeals
        heading="Top Priceline Flight Deals from U.S. Cities"
        subheading="Book exclusive airfare deals with Skyjoy Travels, featuring Priceline-powered discounts to global destinations. Call now for the best prices."
        gradientFrom="#e3f2fd"
        gradientTo="#fff8e1"
        buttonFrom="#003366"
        buttonTo="#00bcd4"
        phone="+1-(888) 370-1612"
      />

      {/* Why Choose Us Section */}
      <WhyChooseUs
        airlineName="Priceline"
        travelAgency="Skyjoy Travels"
        primaryColor="text-blue-700"
        accentColor="from-blue-800 to-cyan-400"
      />

      {/* Airline Info & About */}
      <AirlinesContent
        airlineName="Priceline"
        phoneNumber="+1-(888) 370-1612"
      />

      {/* FAQ Section */}
      <Faqs brandName="Priceline" agencyName="Skyjoy Travels" />

      {/* Footer */}
      <Footer />

      {/* Call-to-Action Modal */}
      <PopupModal
        logoSrc="/images/priceline.svg"
        phoneNumber="+1-(888) 370-1612"
        ctaBgColor="#2b66e7"
      />
    </div>
  );
};

export default PricelineReservations;
