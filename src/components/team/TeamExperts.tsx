
import React from "react";
import ExpertCard from "./ExpertCard";
import { experts } from "@/data/experts.data";
import TeamHeader from "./TeamHeader";

const TeamExperts = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white" id="team-experts">
      <div className="container max-w-7xl mx-auto px-4">
        <TeamHeader />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experts.map((expert) => (
            <ExpertCard key={expert.id} expert={expert} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <blockquote className="text-xl md:text-2xl italic font-medium text-midnight">
            "We don't just build startups — we build the future, one token at a time."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default TeamExperts;
