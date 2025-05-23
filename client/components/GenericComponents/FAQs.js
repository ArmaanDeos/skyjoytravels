"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Faqs = ({ brandName = "Expedia", agencyName = "SkyjoyTravels" }) => {
  const faqs = [
    {
      question: `Can I book ${brandName} flights through ${agencyName}?`,
      answer: `${agencyName} helps travelers find great flight deals, including options available on ${brandName}. We are not affiliated with ${brandName}, but we provide guidance and assistance in comparing options to help you save.`,
    },
    {
      question: `Is it safe to book through ${agencyName}?`,
      answer: `Yes, ${agencyName} prioritizes customer security and privacy. We offer trusted booking services, secure payment methods, and expert assistance throughout the process.`,
    },
    {
      question: `How can I get the best deal for my flight?`,
      answer: `We recommend calling us directly to explore unpublished deals, seasonal discounts, and other personalized offers that may not be available online. ${agencyName} always aims to help you save more.`,
    },
    {
      question: `Can I make changes or cancel my booking through ${agencyName}?`,
      answer: `Yes, our team provides support with modifications or cancellations based on the airline or provider's policies. We assist you throughout the process to keep it stress-free.`,
    },
    {
      question: `Why choose ${agencyName} for booking flights?`,
      answer: `${agencyName} offers independent, unbiased booking assistance with access to a wide range of airline options — including those listed on platforms like ${brandName}. We focus on delivering customer satisfaction and the best available prices.`,
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mb-10">
          Common questions about booking flights with help from {agencyName}.
        </p>

        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-xl overflow-hidden shadow-sm transition"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full p-4 bg-gray-50 hover:bg-gray-100 transition"
              >
                <span className="font-medium text-gray-800">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-4 pb-4 text-sm text-gray-700"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
