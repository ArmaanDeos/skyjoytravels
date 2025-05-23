"use client";

import PopupModal from "@/components/ExpediaModal";
import FlightSearch from "@/components/FlightSearchForm";
import Footer from "@/components/Footer";
import AirlinesContent from "@/components/GenericComponents/AirlinesContent";
import Faqs from "@/components/GenericComponents/FAQs";
import GenericBanner from "@/components/GenericComponents/GenericBanner";
import PopularDeals from "@/components/GenericComponents/PopularDeals";
import PromotionBanner from "@/components/GenericComponents/PromotionBanner";
import WhyChooseUs from "@/components/GenericComponents/WhyChooseUs";
import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Suspense } from "react";

const ExpediaReservations = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Navbar */}
      <div className="hidden md:block">
        <Navbar />
      </div>

      {/* Promo Banner */}
      <PromotionBanner
        logoSrc="/images/expedia-logo.jpg"
        serviceName="Expedia Booking Deals"
        ctaBgColor="#f8de55"
        ctaTextColor="#003366"
      />

      {/* Hero / Banner */}
      <GenericBanner
        backgroundImage="/images/brand-bg.jpg"
        heading="Book Smarter with Expedia Deals on Skyjoy Travels"
        subheading="Compare prices, explore top destinations, and book flights at unbeatable rates."
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
        heading="Explore Popular Flight Deals from Major U.S. Cities"
        subheading="Access exclusive airfare discounts to top international destinations. Limited-time offers available – call to secure the lowest prices!"
        gradientFrom="#f5f9ff"
        gradientTo="#fffde7"
        buttonFrom="#003366"
        buttonTo="#ffd700"
        phone="+1-(888) 370-1612"
      />

      {/* Why Choose Us Section */}
      <WhyChooseUs
        airlineName="Expedia"
        travelAgency="Skyjoy Travels"
        primaryColor="text-yellow-600"
        accentColor="from-blue-900 to-yellow-400"
      />

      {/* Airline Info & About */}
      <AirlinesContent airlineName="Expedia" phoneNumber="+1-(888) 370-1612" />

      {/* FAQ Section */}
      <Faqs brandName="Expedia" agencyName="Skyjoy Travels" />

      {/* Footer */}
      <Footer />

      {/* Call-to-Action Modal */}
      <PopupModal
        logoSrc="/images/expedia-logo.jpg"
        phoneNumber="+1-(888) 370-1612"
        ctaBgColor="#003366"
      />
    </div>
  );
};

export default ExpediaReservations;
