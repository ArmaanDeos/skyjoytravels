import {
  AlertTriangle,
  CalendarCheck,
  RefreshCw,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RefundPolicy from "@/components/RefundPolicySection";

const RefundPolicyPage = () => {
  return (
    <>
      <Navbar />

      <RefundPolicy />

      <Footer />
    </>
  );
};

export default RefundPolicyPage;
