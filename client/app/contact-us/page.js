import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import ContactUsSection from "@/components/ContactUsSection";

const ContactUsPage = () => {
  return (
    <>
      <Navbar />
      <ContactUsSection />
      <Footer />
    </>
  );
};

export default ContactUsPage;
