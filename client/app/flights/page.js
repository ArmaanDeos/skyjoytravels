"use client";
import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/LoadingPage";
import dynamic from "next/dynamic";

// Dynamically import the client component
const FlightResultClient = dynamic(
  () => import("@/components/FlightResultClient"),
  {
    ssr: false,
    loading: () => <Loader />,
  }
);

const FlightResultPage = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <FlightResultClient />
      </Suspense>
      <Footer />
    </>
  );
};

export default FlightResultPage;
