import Link from "next/link";
import { ShieldCheck, Headset, DollarSign } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import SkyJoyAboutSection from "@/components/AboutUs";

const About = () => {
  return (
    <>
      <Navbar />
      <SkyJoyAboutSection />
      <Footer />
    </>
  );
};

export default About;
