"use client";
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Plane } from "lucide-react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "WHAT IS MEANT BY ONLINE CHECK-IN FOR AIRLINES?",
      answer:
        "The process of confirming your tickets online is called online check-in. This process confirms your presence on the flight booked. It involves printing your boarding pass at your convenience or scanning it at the airport. It helps you to avoid long queues to wait for checking in. After online check-in, you only drop in your baggage and proceed to the security gates directly. For most airlines, the process of online check-in opens 24-48 hours before the flight departure time and stays open until 1-2 hours.",
    },
    {
      question: "HOW TO PLACE A REQUEST FOR AN IN-FLIGHT MEAL?",
      answer:
        "Most airlines who are low-cost carriers do not offer free meals to the flyers while onboard. Usually, they charge an additional amount for providing meals to the travelers. At the time of booking, you have an option to place a request for an in-flight meal. The request then reaches the airlines, and you are required to place this request at least 24 hours before the flight departure time.",
    },
    {
      question:
        "WHY DID THE FARE INCREASE AFTER I PLACED MY BOOKING AND RECEIVED CONFIRMATION?",
      answer:
        "The booking confirmation email that you receive from Sky Joy Travels informs you that we have received your booking request. Once we receive your query, our agents begin working on the same for you. The airline's airfares are dynamic and regulated every minute. You may observe the change in fare depending upon the demand and supply matrix of your travel.",
    },
    {
      question: "HOW TO BOOK CHEAP FLIGHTS?",
      answer:
        "There are many ways to book cheap flights. Some of the most common tips are: \n\n1. Be flexible with your travel dates and times. \n2. Book your flights in advance (typically 2-3 weeks before departure). \n3. Use flight comparison websites to compare prices. \n4. Set up price alerts for your desired route. \n5. Consider flying mid-week (Tuesday or Wednesday) for cheaper fares. \n6. Avoid peak travel seasons. \n7. Check out budget airlines or consider indirect flights for a cheaper fare.",
    },
    {
      question: "WHAT IS THE BEST TIME TO BOOK FLIGHTS?",
      answer:
        "The best time to book flights is generally 2-3 weeks before your travel date. For international flights, it's ideal to book about 2-6 months in advance. Flights tend to be cheaper if booked mid-week, with Tuesday and Wednesday being the best days to book for domestic and international travel. Avoid booking flights during peak travel seasons like holidays or major events when prices tend to be higher.",
    },
    {
      question: "HOW DO I KNOW IF MY FLIGHT IS DELAYED?",
      answer:
        "To check if your flight is delayed, you can visit the airline's website or use their mobile app for real-time updates. You can also use flight tracking websites or apps that provide live flight status updates. Additionally, if you have already checked in, you will likely receive an email or SMS alert from the airline about any delays.",
    },
    {
      question: "IS IT SAFE TO TRAVEL DURING COVID-19?",
      answer:
        "Many airlines and airports have implemented stringent safety protocols to reduce the risk of COVID-19 transmission, such as mandatory mask-wearing, enhanced cleaning procedures, and social distancing measures. However, the safety of travel depends on the region you are flying to and from, the airline, and government guidelines. Always check the latest travel advisories and follow safety recommendations.",
    },
    {
      question: "CAN I CANCEL MY FLIGHT BOOKING?",
      answer:
        "It depends on the airline and the type of ticket you have booked. Some tickets are refundable with a cancellation fee, while others may not be refundable. It is recommended to check the airline's cancellation policy before booking. If you need to cancel, contact the airline or travel agency as soon as possible. Some airlines offer the option to cancel or change flights online through their website or customer service.",
    },
    {
      question: "CAN I CHANGE MY FLIGHT AFTER BOOKING?",
      answer:
        "Most airlines allow you to change your flight after booking, but you may be subject to a change fee and any difference in fare. The flexibility of your ticket will depend on the fare rules of the airline and the type of ticket purchased. If you need to make changes, it is recommended to contact the airline as soon as possible to understand your options.",
    },
    {
      question: "HOW CAN I CONTACT CUSTOMER SERVICE FOR MY FLIGHT?",
      answer:
        "You can contact customer service for your flight booking through the airline’s official website, where they often provide phone numbers, email addresses, or live chat options. Additionally, many airlines offer 24/7 customer service through their apps, which can be a quicker way to get in touch. For flight issues, it’s always best to reach out directly to the airline as soon as you encounter a problem.",
    },
    {
      question: "CAN I BOOK A FLIGHT FOR SOMEONE ELSE?",
      answer:
        "Yes, you can book a flight for someone else. When booking, simply enter the traveler’s details such as their name, passport number (if needed), and contact information. However, it’s important to ensure that the traveler’s name matches exactly as it appears on their identification, as discrepancies could lead to issues at check-in.",
    },
    {
      question: "HOW CAN I CHECK-IN ONLINE?",
      answer:
        "To check-in online, visit the airline’s website or mobile app, usually 24-48 hours before your flight departure. Enter your booking reference or ticket number along with other required information like passport details. After completing the check-in process, you can either print your boarding pass or save it to your phone for easy access at the airport.",
    },
    {
      question: "WHAT SHOULD I DO IF I LOST MY FLIGHT TICKET?",
      answer:
        "If you have lost your flight ticket, contact the airline or travel agent immediately. They can verify your booking and issue a new boarding pass. If you booked online, most airlines allow you to reprint or download your ticket from their website or app. Be prepared to provide your booking reference number and personal information to confirm your identity.",
    },
  ];

  const toggleAnswer = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-950 text-white p-6 md:p-12">
      <div className="absolute inset-0 opacity-5 z-0">
        <Plane className="w-full h-full" />
      </div>
      <div className="relative z-10 space-y-10 mt-20 px-4">
        <h1 className="text-4xl font-bold mb-4 text-center text-white">
          Sky Joy Travels FAQS
        </h1>

        <Card className="bg-gray-900/30 text-white">
          <CardContent className="p-6 space-y-6">
            <div
              className="faq-container  p-4"
              itemscope=""
              itemtype="https://schema.org/FAQPage"
            >
              <h2 className="text-3xl font-semibold text-center mb-6">
                Frequently Asked Questions
              </h2>
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="faq-item mb-4 blue"
                  itemscope=""
                  itemprop="mainEntity"
                  itemtype="https://schema.org/Question"
                >
                  <div
                    itemprop="name"
                    className="panel-title text-xl font-medium cursor-pointer mb-2 bg-primary-blue p-4 rounded-[8px_0_8px_0] transition-all duration-300 ease-in-out"
                    onClick={() => toggleAnswer(index)}
                  >
                    {faq.question}
                  </div>
                  <div
                    className={`panel-body text-md text-black bg-white p-4 ${
                      activeIndex === index ? "block" : "hidden"
                    }`}
                    itemscope=""
                    itemprop="acceptedAnswer"
                    itemtype="https://schema.org/Answer"
                  >
                    <div itemprop="text">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;
