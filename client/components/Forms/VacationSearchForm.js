"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  CalendarDays,
  Moon,
  Users,
  ChevronDown,
  Plus,
  Minus,
} from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

export default function VacationSearch() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [duration, setDuration] = useState(3);
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(2);

  return (
    <Card className="w-full max-w-7xl mx-auto shadow-xl rounded-none border border-gray-200">
      <CardContent className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* FROM */}
          <div>
            <label className="text-xs font-semibold text-primary-blue flex items-center gap-1 mb-1">
              <MapPin className="w-4 h-4 text-primary-red" /> GOING FROM
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input placeholder="New York" className="pl-10 py-3" />
            </div>
          </div>

          {/* TO */}
          <div>
            <label className="text-xs font-semibold text-primary-blue flex items-center gap-1 mb-1">
              <MapPin className="w-4 h-4 text-primary-red" /> GOING TO
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input placeholder="Bali" className="pl-10 py-3" />
            </div>
          </div>

          {/* CHECK-IN */}
          <div>
            <label className="text-xs font-semibold text-primary-blue flex items-center gap-1 mb-1">
              <CalendarDays className="w-4 h-4 text-primary-red" /> CHECK-IN
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-between py-3"
                >
                  {checkInDate ? format(checkInDate, "PPP") : "Select date"}
                  <CalendarDays className="w-4 h-4 ml-2" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={checkInDate}
                  onSelect={setCheckInDate}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* DURATION */}
          <div>
            <label className="text-xs font-semibold text-primary-blue flex items-center gap-1 mb-1">
              <Moon className="w-4 h-4 text-primary-red" /> DURATION
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-between py-3"
                >
                  {duration} Night{duration > 1 ? "s" : ""}
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-64 p-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">No. of Nights</span>
                  <div className="flex items-center gap-2">
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => setDuration(Math.max(1, duration - 1))}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span>{duration}</span>
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => setDuration(duration + 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* ROOMS & GUESTS */}
          <div className="sm:col-span-1 md:col-span-1 xl:col-span-2">
            <label className="text-xs font-semibold text-primary-blue flex items-center gap-1 mb-1">
              <Users className="w-4 h-4 text-primary-red" /> ROOMS & GUESTS
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-between py-3"
                >
                  {rooms} Room{rooms > 1 ? "s" : ""}, {guests} Guest
                  {guests > 1 ? "s" : ""}
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-72 p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Rooms</span>
                  <div className="flex items-center gap-2">
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => setRooms(Math.max(1, rooms - 1))}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span>{rooms}</span>
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => setRooms(rooms + 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Guests</span>
                  <div className="flex items-center gap-2">
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span>{guests}</span>
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => setGuests(guests + 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* SEARCH BUTTON */}
          <div className="sm:col-span-2 md:col-span-3 xl:col-span-1">
            <Button className="w-full h-full bg-primary-red hover:bg-primary-blue text-white font-semibold rounded-[8px_0_8px_0] text-base mt-1 sm:mt-0">
              Search Deals
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
