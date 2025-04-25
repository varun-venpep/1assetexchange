
import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Partner } from "@/data/partners.data";

interface PartnerCardProps {
  partner: Partner;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ partner }) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center w-32 md:w-40 group"
        >
          <div className="bg-white rounded-xl shadow-md border border-royalgold/10 p-3 w-full h-24 flex items-center justify-center mb-3
            hover:shadow-glow-gold hover:border-royalgold/40 transition-all duration-300">
            <img 
              src={partner.logo} 
              alt={`${partner.name} logo`} 
              className="max-h-16 max-w-[80%] object-contain mx-auto group-hover:scale-105 transition-transform duration-300" 
              loading="lazy"
            />
          </div>
        </a>
      </TooltipTrigger>
      <TooltipContent>
        <div>
          <p className="font-semibold">{partner.name}</p>
          <p className="text-xs text-muted-foreground">{partner.description}</p>
        </div>
      </TooltipContent>
    </Tooltip>
  );
};

export default PartnerCard;
