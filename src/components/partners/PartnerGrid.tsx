
import React from "react";
import PartnerCard from "./PartnerCard";
import { Partner } from "@/data/partners.data";

interface PartnerGridProps {
  partners: Partner[];
  limit?: number;
}

const PartnerGrid: React.FC<PartnerGridProps> = ({ partners, limit }) => {
  const displayPartners = limit 
    ? partners.slice(0, limit)
    : partners;
    
  return (
    <div className="flex flex-wrap justify-center gap-6 sm:gap-8 py-6">
      {displayPartners.map((partner) => (
        <PartnerCard key={partner.name} partner={partner} />
      ))}
    </div>
  );
};

export default PartnerGrid;
