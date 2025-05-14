import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TermsConditionsSection from "@/components/TermsCondition";

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />

      <TermsConditionsSection />

      <Footer />
    </>
  );
};

export default TermsAndConditions;
