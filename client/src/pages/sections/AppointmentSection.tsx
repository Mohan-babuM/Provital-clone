import { ChevronDownIcon, MapPinIcon, SearchIcon, PhoneIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export const AppointmentSection = (): JSX.Element => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Navigation menu items data
  const navItems = [
    "List your practice",
    "For Employers",
    "Courses",
    "Books",
    "Speakers",
    "Doctors",
    "Login / Signup",
  ];

  return (
    <div className="relative w-full bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {/* Animated loop text background */}
        <div className="absolute top-[50px] left-[50px] text-gray-200 text-xs opacity-50 font-mono">
          Images in column 1 will move from top to<br />
          bottom in a loop and images in column 2 will<br />
          move from bottom to top.
        </div>
        
        {/* Colored background blurs */}
        <div className="w-[318px] h-[313px] absolute top-[300px] left-[400px] bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full opacity-30 blur-3xl" />
        <div className="w-[250px] h-[246px] absolute top-[600px] left-[900px] bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-30 blur-3xl" />
        <div className="w-[174px] h-[173px] absolute top-[650px] left-[800px] bg-gradient-to-br from-green-200 to-emerald-200 rounded-full opacity-30 blur-3xl" />
        
        {/* Curved background element */}
        <div className="absolute bottom-0 left-0 right-0 h-[200px]">
          <svg viewBox="0 0 1200 200" className="w-full h-full">
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFB84D" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#FF69B4" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#40E0D0" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <path d="M0,150 Q300,50 600,100 T1200,80 L1200,200 L0,200 Z" fill="url(#gradient1)" />
          </svg>
        </div>
      </div>

      {/* Header */}
      <header className="relative w-full h-[72px] bg-white border-b border-[#eaeaea] z-10">
        <div className="h-full max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="relative w-[32px] h-[32px] bg-white rounded-[6px] shadow-sm flex items-center justify-center mr-3">
              <svg
                className="w-[20px] h-[20px]"
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 0L25 7.5V18.5L12.5 26L0 18.5V7.5L12.5 0Z"
                  fill="#3B82F6"
                />
              </svg>
            </div>
            <div className="font-semibold text-black text-xl">
              ProVital
            </div>
          </div>

          {/* Navigation Menu - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.slice(0, -1).map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors"
              >
                {item}
              </a>
            ))}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Button
                variant="ghost"
                className="h-auto p-0 font-medium text-sm text-gray-600 hover:text-gray-900"
              >
                Login / Signup
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </Button>
              
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-[214px] h-[81px] bg-white border border-gray-200 rounded-[4px] shadow-lg z-50">
                  <div className="h-full flex flex-col">
                    <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 flex-1">
                      <span className="font-medium text-gray-900 text-sm">Doctor</span>
                      <div className="flex space-x-3">
                        <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                          Login
                        </a>
                        <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                          Sign up
                        </a>
                      </div>
                    </div>
                    <Separator className="mx-4" />
                    <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 flex-1">
                      <span className="font-medium text-gray-900 text-sm">Patients</span>
                      <div className="flex space-x-3">
                        <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                          Login
                        </a>
                        <a href="#" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                          Sign up
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="lg:hidden h-9 w-9 p-0"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </header>

      {/* Main Content Section */}
      <div className="relative px-4 py-8 md:py-16">
        <div className="max-w-[1200px] mx-auto">
          {/* Mobile Layout - Single Column */}
          <div className="block lg:hidden">
            {/* Mobile Hero Content */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-black leading-tight mb-4">
                Book an appointment with{" "}
                <span className="text-[#3B82F6]">lifestyle medicine</span>{" "}
                experts
              </h1>
              <p className="text-base text-[#6f6f6f] leading-relaxed mb-6">
                Optimize your lifestyle and reverse chronic diseases.
              </p>
            </div>

            {/* Mobile Images Grid - 2x2 */}
            <div className="grid grid-cols-2 gap-3 mb-8 h-[300px]">
              <div className="space-y-3">
                <div className="h-[145px] rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/1_1749733355656.jpg" 
                    alt="Family cooking together" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-[145px] rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/2_1749733355655.jpg" 
                    alt="Yoga practice by the beach" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-[145px] rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/3_1749733355655.jpg" 
                    alt="Professional chef cooking" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-[145px] rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/4_1749733355654.jpg" 
                    alt="Gardening and wellness" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Mobile Search Form */}
            <div className="space-y-4 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl">
              <div className="space-y-4">
                <div className="relative">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Condition, procedure, spe..."
                    className="pl-11 h-12 border-gray-300 rounded-xl text-base w-full"
                  />
                </div>
                <div className="relative">
                  <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="City, state, or zipcode"
                    className="pl-11 h-12 border-gray-300 rounded-xl text-base w-full"
                  />
                </div>
                <div className="relative">
                  <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Insurance carrier"
                    className="pl-11 h-12 border-gray-300 rounded-xl text-base w-full"
                  />
                </div>
              </div>
              <Button className="w-full h-12 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
                Find now
              </Button>
            </div>
          </div>

          {/* Desktop Layout - Two Columns */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Side - Animated Images */}
            <div className="lg:col-span-5 relative h-[600px] overflow-hidden">
              {/* Column 1 - Moving down */}
              <div className="absolute space-y-4 animate-scroll-down" style={{ left: '0px' }}>
                <div className="w-[247px] h-[354px] rounded-[16px] overflow-hidden shadow-lg">
                  <img 
                    src="/1_1749733355656.jpg" 
                    alt="Family cooking together" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[247px] h-[354px] rounded-[16px] overflow-hidden shadow-lg">
                  <img 
                    src="/2_1749733355655.jpg" 
                    alt="Yoga practice by the beach" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[247px] h-[354px] rounded-[16px] overflow-hidden shadow-lg">
                  <img 
                    src="/3_1749733355655.jpg" 
                    alt="Professional chef cooking" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[247px] h-[354px] rounded-[16px] overflow-hidden shadow-lg">
                  <img 
                    src="/4_1749733355654.jpg" 
                    alt="Gardening and wellness" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Column 2 - Moving up */}
              <div className="absolute space-y-4 pt-8 animate-scroll-up" style={{ left: '250px' }}>
                <div className="w-[247px] h-[354px] rounded-[16px] overflow-hidden shadow-lg">
                  <img 
                    src="/col2-1.jpg" 
                    alt="Outdoor yoga practice" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[247px] h-[354px] rounded-[16px] overflow-hidden shadow-lg">
                  <img 
                    src="/col2-2.jpg" 
                    alt="Father and son cooking together" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[247px] h-[354px] rounded-[16px] overflow-hidden shadow-lg">
                  <img 
                    src="/col2-3.jpg" 
                    alt="Couple preparing healthy meal" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[247px] h-[354px] rounded-[16px] overflow-hidden shadow-lg">
                  <img 
                    src="/col2-4.jpg" 
                    alt="Indoor meditation practice" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Booking Form */}
            <div className="lg:col-span-7 space-y-8 relative z-10">
              <div className="space-y-6">
                <h1 className="text-5xl font-bold text-black leading-tight">
                  Book an appointment with{" "}
                  <span className="text-[#3B82F6]">lifestyle medicine</span>{" "}
                  experts
                </h1>
                <p className="text-xl text-[#6f6f6f] leading-relaxed">
                  Optimize your lifestyle and reverse chronic diseases.
                </p>
              </div>

              {/* Search Form */}
              <div className="space-y-4 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
                <div className="grid grid-cols-4 gap-4">
                  <div className="relative">
                    <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      placeholder="Condition, procedure, speciality..."
                      className="pl-11 h-14 border-gray-300 rounded-xl text-base"
                    />
                  </div>
                  <div className="relative">
                    <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      placeholder="City, state, or zipcode"
                      className="pl-11 h-14 border-gray-300 rounded-xl text-base"
                    />
                  </div>
                  <div className="relative">
                    <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      placeholder="Insurance carrier"
                      className="pl-11 h-14 border-gray-300 rounded-xl text-base"
                    />
                  </div>
                  <Button className="h-14 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
                    Find now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
