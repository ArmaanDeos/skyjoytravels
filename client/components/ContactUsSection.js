"use client";
import { Mail, MapPin, Phone, Send, Users, CalendarDays } from "lucide-react";
import { useState } from "react";

export default function ContactUsSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <div className="relative bg-gray-950 text-white py-20 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 opacity-5 z-0 bg-[url('/bg-map.svg')] bg-no-repeat bg-center bg-cover " />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 z-10 relative mt-20">
        {/* Left: Info & CTA */}
        <div className="space-y-10">
          <div>
            <h2 className="text-4xl font-extrabold text-primary-blue mb-4">
              Let&apos;s Plan Your Journey Together
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Have a question or need help with your booking? We&apos;re
              available 24/7 to make your travel experience seamless. Contact us
              via phone, email, or drop by our office – we’re always happy to
              help!
            </p>
          </div>

          <div className="space-y-4 text-base">
            <div className="flex items-start gap-4">
              <Phone className="text-primary-red w-6 h-6 mt-1" />
              <span className="text-white text-lg font-medium">
                (888) 370-1612
              </span>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-primary-red w-6 h-6 mt-1" />
              <span>2516 7th Ave, East Meadow, NY 11554</span>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-primary-red w-6 h-6 mt-1" />
              <span>info@skyjoytravels.online</span>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-gradient-to-r from-primary-blue to-primary-red p-6 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold">Need Immediate Help?</h3>
                <p className="text-sm">
                  Call our expert travel agents now and get personalized
                  assistance.
                </p>
              </div>
              <a
                href="tel:8883701612"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-blue rounded-full font-semibold hover:bg-gray-100 transition"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Right: Contact Form & Map */}
        <div className="space-y-8 w-full">
          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent!");
            }}
            className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl space-y-6"
          >
            <h3 className="text-2xl font-semibold text-primary-blue">
              Send Us a Message
            </h3>
            <div>
              <label className="block text-sm mb-1">Full Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:border-primary-blue outline-none"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email Address</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:border-primary-blue outline-none"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Your Message</label>
              <textarea
                rows="4"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:border-primary-blue outline-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-primary-blue text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>

          {/* Google Map */}
          <div className="rounded-xl overflow-hidden border border-primary-blue shadow-lg">
            <iframe
              title="Sky Joy Travels Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.3781864792265!2d-73.5633761!3d40.7050872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2631e4f49b4e9%3A0x68e1d29f09b849a5!2s2516%207th%20Ave%2C%20East%20Meadow%2C%20NY%2011554%2C%20USA!5e0!3m2!1sen!2sin!4v1713429651234!5m2!1sen!2sin"
              width="100%"
              height="300"
              loading="lazy"
              className="w-full border-none"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
