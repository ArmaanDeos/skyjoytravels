import BestFlightDeals from "@/components/BestDeals/BestFlightDeals";
import DealsContactDetails from "@/components/BestDeals/DealsContactDetails";
import DealsService from "@/components/BestDeals/DealsService";
import FixedBackground from "@/components/BestDeals/FixedBackground";
import OurPlatform from "@/components/BestDeals/OurPlatform";
import WhyChooseUs from "@/components/BestDeals/WhyChooseUs";
import Footer from "@/components/Footer";

const BestTravelDeal = () => {
  return (
    <div className="">
      <BestFlightDeals />
      {/* <FixedBackground /> */}
      <WhyChooseUs />
      <DealsService />
      <OurPlatform />
      <DealsContactDetails />
      {/* <Footer /> */}
    </div>
  );
};

export default BestTravelDeal;
