
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { partners } from "@/data/partners.data";
import PartnerGrid from "./partners/PartnerGrid";

const PartnerEcosystem = () => {
  // Sort partners by display_priority
  const sortedPartners = [...partners].sort((a, b) => a.display_priority - b.display_priority);
  
  return (
    <section className="w-full py-16 bg-gradient-to-br from-white via-yellow-50 to-royalgold/20 animate-fade-section" id="ecosystem">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-poppins text-midnight mb-3">Trusted by a Growing Ecosystem</h2>
          <p className="text-midnight/70 max-w-2xl mx-auto">
            Our work is strengthened by visionary partners across Web3, media, fintech, and digital infrastructure.
          </p>
        </div>
        
        {/* Display the first 9 partners */}
        <PartnerGrid partners={sortedPartners} limit={9} />

        <div className="flex justify-center mt-8">
          <Link 
            to="/ecosystem-partners" 
            className="group inline-flex items-center gap-2 font-montserrat uppercase tracking-wide text-black px-6 py-2.5 rounded-full border border-royalgold hover:bg-royalgold hover:text-midnight transition-all duration-200 shadow-gold text-sm"
          >
            View Full Ecosystem
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnerEcosystem;
