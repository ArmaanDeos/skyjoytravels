"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  DollarSign,
  Phone,
  Globe,
  PlaneTakeoff,
  ThumbsUp,
} from "lucide-react";

const WhyChooseUs = ({
  airlineName = "Expedia",
  travelAgency = "Skyjoy Travels",
  primaryColor = "text-blue-600",
  accentColor = "from-blue-500 to-blue-300", // Tailwind gradient
}) => {
  const features = [
    {
      title: "Trusted & Secure",
      icon: ShieldCheck,
      description:
        "Book with confidence through trusted platforms and secure payment gateways.",
    },
    {
      title: "Best Price Guarantee",
      icon: DollarSign,
      description:
        "Get the most competitive fares available when booking through our partners.",
    },
    {
      title: "24/7 Support",
      icon: Phone,
      description:
        "Reach out to our expert team anytime for fast and friendly support.",
    },
    {
      title: "Global Coverage",
      icon: Globe,
      description:
        "Access flights and deals to thousands of destinations around the world.",
    },
    {
      title: "Easy Booking",
      icon: PlaneTakeoff,
      description:
        "Smooth, user-friendly booking experience with no hidden steps.",
    },
    {
      title: "Customer Satisfaction",
      icon: ThumbsUp,
      description:
        "Highly rated by thousands of happy travelers booking through us.",
    },
  ];

  return (
    <section className={`py-20 px-4 bg-gradient-to-br ${accentColor}`}>
      <div className="max-w-6xl mx-auto text-center text-white">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
        >
          Why Choose <span className="text-white/90">{airlineName}</span> for
          Booking with <span>{travelAgency}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-base md:text-lg text-white/90 max-w-3xl mx-auto mb-12"
        >
          Discover why thousands of travelers trust us to book flights, save
          money, and enjoy a smooth, stress-free travel experience.
        </motion.p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 text-left"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`p-2 rounded-full bg-opacity-10 ${primaryColor}`}
                  >
                    <Icon className={`w-6 h-6 ${primaryColor}`} />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {feature.title}
                  </h4>
                </div>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
