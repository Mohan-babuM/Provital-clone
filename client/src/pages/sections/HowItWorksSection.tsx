import { MapPinIcon, SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const HowItWorksSection = (): JSX.Element => {
  // Data for search fields
  const searchFields = [
    {
      id: "condition",
      placeholder: "Condition, procedure, speciality...",
      width: "w-[377px]",
      icon: <SearchIcon className="h-6 w-6 text-[#8b8d9c]" />,
    },
    {
      id: "location",
      placeholder: "City, state, or zipcode",
      width: "w-[252px]",
      icon: <MapPinIcon className="h-6 w-6 text-[#8b8d9c]" />,
    },
    {
      id: "insurance",
      placeholder: "Insurance carrier",
      width: "w-[230px]",
      icon: (
        <img
          className="w-6 h-6"
          alt="Health card"
          src="/figmaAssets/vaadin-health-card.svg"
        />
      ),
    },
  ];

  return (
    <Card className="w-full max-w-[1080px] mx-auto shadow-[0px_4px_31px_#0000001f] rounded-[14px] p-4">
      <div className="flex flex-row gap-[10px]">
        {searchFields.map((field) => (
          <div key={field.id} className={`${field.width} h-[60px]`}>
            <div className="h-[60px] bg-gray-50 rounded-[5px] border border-solid border-[#e6e6e6] flex items-center px-[15px]">
              <span className="mr-4">{field.icon}</span>
              <span className="[font-family:'Inter',Helvetica] font-normal text-[#8b8d9c] text-base">
                {field.placeholder}
              </span>
            </div>
          </div>
        ))}

        <Button className="w-[157px] h-[60px] bg-[#1a73e8] hover:bg-[#1a73e8]/90 rounded-lg shadow-[0px_4px_30px_#0000000d] flex items-center justify-center">
          <img
            className="w-5 h-5 mr-[10px]"
            alt="Search"
            src="/figmaAssets/vector-4.svg"
          />
          <span className="[font-family:'Inter',Helvetica] font-medium text-white text-base">
            Find now
          </span>
        </Button>
      </div>
    </Card>
  );
};
