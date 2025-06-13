import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AppointmentSection } from "./sections/AppointmentSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { LifestyleOverviewSection } from "./sections/LifestyleOverviewSection";
import { SixPillarsSection } from "./sections/SixPillarsSection";

export const Desktop = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col min-h-screen w-full">
      {/* Main Hero Section with Navigation and Booking */}
      <section className="relative">
        <AppointmentSection />

        {/* Simple Login/Signup Links - Top Right */}
        <div className="absolute top-6 right-6 hidden lg:flex items-center space-x-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Login
          </a>
          <span className="text-gray-300">|</span>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Signup
          </a>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              HOW IT WORKS
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive approach to lifestyle medicine follows evidence-based practices to help you achieve optimal health and wellness.
            </p>
          </div>
          <HowItWorksSection />
        </div>
      </section>

      {/* Six Pillars Section */}
      <section className="relative py-12 md:py-16">
        <SixPillarsSection />

        {/* Navigation Buttons */}
        <div className="absolute top-8 right-4 md:right-[72px] flex space-x-2 md:space-x-4">
          <Button
            variant="outline"
            size="icon"
            className="w-8 h-8 md:w-[46px] md:h-[46px] rounded-full border-[#c5c5c5] hover:bg-gray-100"
          >
            <ArrowLeftIcon className="h-4 w-4 md:h-6 md:w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="w-8 h-8 md:w-[46px] md:h-[46px] rounded-full border-[#c5c5c5] hover:bg-gray-100"
          >
            <ArrowRightIcon className="h-4 w-4 md:h-6 md:w-6" />
          </Button>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="relative py-12 md:py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Start Your Wellness Journey Today
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of people who have transformed their health through evidence-based lifestyle medicine practices.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold">
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
};
