"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Calendar as CalendarIcon,
  MapPin,
  CalendarDays,
  Users,
  Plus,
  Minus,
  ChevronDown,
} from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

export default function HotelSearch() {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const totalGuests = adults + children;

  return (
    <Card className="w-full max-w-7xl mx-auto shadow-xl border border-gray-200 rounded-none">
      <CardContent className="p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* CITY / AREA */}
          <div className="flex flex-col">
            <label className="text-sm font-medium flex items-center gap-1 text-primary-blue">
              <MapPin className="w-4 h-4 text-primary-red" />
              City/Area/Destination
            </label>
            <div className="relative mt-1">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Enter your city name"
                className="pl-10 py-5"
              />
            </div>
          </div>

          {/* CHECK-IN */}
          <div className="flex flex-col">
            <label className="text-sm font-medium flex items-center gap-1 text-primary-blue">
              <CalendarDays className="w-4 h-4 text-primary-red" /> CHECK-IN
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="mt-1 py-5 justify-between">
                  {checkIn ? format(checkIn, "PPP") : "Select date"}
                  <CalendarIcon className="w-4 h-4 ml-2" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={checkIn}
                  onSelect={setCheckIn}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* CHECK-OUT */}
          <div className="flex flex-col">
            <label className="text-sm font-medium flex items-center gap-1 text-primary-blue">
              <CalendarDays className="w-4 h-4 text-primary-red" /> CHECK-OUT
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="mt-1 py-5 justify-between">
                  {checkOut ? format(checkOut, "PPP") : "Select date"}
                  <CalendarIcon className="w-4 h-4 ml-2" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={checkOut}
                  onSelect={setCheckOut}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* GUESTS */}
          <div className="flex flex-col">
            <label className="text-sm font-medium flex items-center gap-1 text-primary-blue">
              <Users className="w-4 h-4 text-primary-red" /> GUESTS
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="mt-1 py-5 justify-between">
                  {totalGuests} Guest{totalGuests > 1 ? "s" : ""}
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-72 p-4 space-y-4">
                {[
                  { label: "Adults", value: adults, setter: setAdults, min: 1 },
                  {
                    label: "Children",
                    value: children,
                    setter: setChildren,
                    min: 0,
                  },
                ].map(({ label, value, setter, min }) => (
                  <div
                    className="flex justify-between items-center"
                    key={label}
                  >
                    <span className="font-medium">{label}</span>
                    <div className="flex items-center gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => setter((v) => Math.max(min, v - 1))}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span>{value}</span>
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => setter((v) => v + 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </PopoverContent>
            </Popover>
          </div>

          {/* SEARCH BUTTON */}
          <div className="flex items-end">
            <Button className="w-full h-full bg-primary-red hover:bg-primary-blue text-white text-lg font-semibold rounded-[8px_0_8px_0] transition-all duration-300">
              Search Hotels
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
