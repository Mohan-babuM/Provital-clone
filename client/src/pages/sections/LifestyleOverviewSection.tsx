import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const LifestyleOverviewSection = (): JSX.Element => {
  // Data for lifestyle cards
  const lifestyleCards = [
    {
      id: 1,
      title: "Nutrition",
      description:
        "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.",
      image: "/figmaAssets/rectangle-144.png",
      metric: "121/80",
      unit: "mmHg",
      iconSrc: "/figmaAssets/vector.svg",
    },
    {
      id: 2,
      title: "Physical activity",
      description:
        "Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.",
      image: "/figmaAssets/rectangle-144-1.png",
      metric: "32",
      unit: "minutes",
      iconSrc: "/figmaAssets/vector-2.svg",
    },
    {
      id: 3,
      title: "Restorative sleep",
      description:
        "Consistent, quality sleep is essential for cognitive function and physical health.",
      image: "/figmaAssets/rectangle-144-2.png",
      metric: "8",
      unit: "hours",
      iconSrc: "/figmaAssets/mask-group.png",
    },
  ];

  return (
    <section className="w-full py-8 px-44">
      <div className="grid grid-cols-3 gap-6">
        {lifestyleCards.map((card) => (
          <Card
            key={card.id}
            className="w-full h-[485px] rounded-2xl shadow-[0px_3.39px_26.26px_#0000001f] overflow-hidden"
          >
            <div className="relative h-80">
              {card.id === 3 ? (
                <img
                  className="h-full object-cover"
                  alt={card.title}
                  src={card.image}
                />
              ) : (
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
              )}
              <Badge className="absolute bottom-4 left-6 h-[42px] bg-[#ffffffde] text-black hover:bg-[#ffffffde] backdrop-blur-[7.5px] rounded-[67px] px-3.5 py-2.5 flex items-center">
                <img
                  className="w-6 h-[21px] mr-2"
                  alt="Icon"
                  src={card.iconSrc}
                />
                <span className="font-medium">
                  {card.metric}
                  <span className="text-lg">&nbsp;</span>
                  <span className="text-[#919191] text-sm">{card.unit}</span>
                </span>
              </Badge>
            </div>
            <CardContent className="pt-7 px-7">
              <h3 className="font-medium text-xl text-black mb-[35px]">
                {card.title}
              </h3>
              <p className="text-[#919191] text-base leading-6">
                {card.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
