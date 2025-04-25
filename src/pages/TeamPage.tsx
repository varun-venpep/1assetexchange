
import React from "react";
import Header from "@/components/Header";
import AboutCompanySection from "@/components/team/AboutCompanySection";
import FounderSection from "@/components/team/FounderSection";
import TeamExperts from "@/components/team/TeamExperts";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const TeamPage = () => {
  return (
    <div className="w-full min-h-screen bg-white font-poppins">
      <Helmet>
        <title>Team | 1 Asset Exchange</title>
        <meta 
          name="description" 
          content="Meet the team behind 1 Asset Exchange. Learn about our company, founder, and the experts building innovative blockchain solutions." 
        />
      </Helmet>
      <Header />
      <main className="pt-20">
        <AboutCompanySection />
        <FounderSection />
        <TeamExperts />
      </main>
    </div>
  );
};

export default TeamPage;
