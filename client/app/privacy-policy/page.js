import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  Lock,
  User,
  Globe,
  CreditCard,
  MessageSquare,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrivacyPolicySection from "@/components/PrivacyPolicy";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />

      <PrivacyPolicySection />

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
