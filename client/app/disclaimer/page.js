import {
  ShieldCheck,
  AlertTriangle,
  Globe,
  Lock,
  Info,
  FileText,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkyJoyDiscountDisclaimerSection from "@/components/DisclaimerSection";

const Disclaimer = () => {
  return (
    <>
      <Navbar />

      <SkyJoyDiscountDisclaimerSection />

      <Footer />
    </>
  );
};

export default Disclaimer;
