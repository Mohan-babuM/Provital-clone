import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { HeartIcon, ActivityIcon, MoonIcon, UsersIcon, BrainIcon, ShieldIcon } from "lucide-react";

export const SixPillarsSection = (): JSX.Element => {
  const [selectedPillar, setSelectedPillar] = useState("nutrition");

  const pillars = [
    { id: "nutrition", label: "Nutrition" },
    { id: "physical-activity", label: "Physical activity" },
    { id: "restorative-sleep", label: "Restorative sleep" },
    { id: "stress-management", label: "Stress management" },
    { id: "social-connection", label: "Social connection" },
    { id: "substance-abuse", label: "Substance abuse" },
  ];

  const pillarCards = [
    {
      title: "Nutrition",
      description: "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.",
      image: "/nutrition-pillar.jpg",
      hasMetric: true,
      metric: "121/80 mmHg",
      emoji: "🍳",
      stats: "12.5K views"
    },
    {
      title: "Physical activity",
      description: "Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.",
      image: "/physical-activity-pillar.jpg",
      hasMetric: true,
      metric: "32 minutes",
      emoji: "🏃‍♀️",
      stats: "8.2K views"
    },
    {
      title: "Restorative sleep",
      description: "Consistent, quality sleep supports optimal health, mental function and aids in reversing chronic disease.",
      image: "/sleep-pillar.jpg",
      hasMetric: true,
      metric: "8 hours",
      emoji: "🛌",
      stats: "15 min read"
    }
  ];

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <Badge className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
            Lifestyle as medicine: The six pillars
          </Badge>
        </div>

        {/* Navigation Pills */}
        <div className="flex justify-center mb-12">
          <ToggleGroup
            type="single"
            value={selectedPillar}
            onValueChange={(value) => {
              if (value) setSelectedPillar(value);
            }}
            className="flex flex-wrap gap-2 bg-gray-100 rounded-full p-1"
          >
            {pillars.map((pillar) => (
              <ToggleGroupItem
                key={pillar.id}
                value={pillar.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedPillar === pillar.id
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {pillar.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        {/* Pillars Cards Grid - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {pillarCards.map((card, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden hover:scale-105">
              <div className="relative">
                <div className="w-full h-32 md:h-40 lg:h-48 overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={`${card.title} lifestyle medicine`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white/90 rounded-full mx-auto mb-2 lg:mb-3 flex items-center justify-center shadow-lg">
                        <span className="text-xl md:text-2xl lg:text-3xl">{card.emoji}</span>
                      </div>
                      <p className="text-white font-semibold text-sm md:text-base drop-shadow-md">{card.title}</p>
                    </div>
                  </div>
                </div>
                
                {/* Health Metrics Badge */}
                {card.hasMetric && (
                  <div className="absolute top-3 left-3">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1 shadow-lg">
                      <div className="text-green-600 font-bold text-sm">
                        {card.metric}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <CardContent className="p-3 md:p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 leading-tight">
                    {card.title}
                  </h3>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full ml-2 flex-shrink-0">
                    {card.stats}
                  </span>
                </div>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
