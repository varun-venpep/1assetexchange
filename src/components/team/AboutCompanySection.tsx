
import React from "react";

const AboutCompanySection = () => {
  return (
    <section className="w-full py-16 bg-white" id="about-company">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-midnight mb-8 text-center">
          About 1 Asset Exchange
        </h2>
        
        <div className="prose max-w-none text-midnight/80">
          <p className="text-lg mb-6">
            1 Asset Exchange is a next-generation digital asset venture builder headquartered in Singapore, 
            committed to transforming how the world digitizes, tokenizes, and trades value. 
            We build agentic AI tools, tokenized product infrastructure, and programmable business models 
            for the new internet economy.
          </p>
          
          <p className="text-lg mb-6">
            As the innovation studio behind fully owned ventures like 1 Asset Labs, 1 Asset IP Vault, and 
            1 Asset Movies, we turn concept into code, and code into community. Our extended portfolio 
            ventures span sectors like media, sustainability, ethical finance, and creator tools — each 
            accelerated through our proprietary launch stack and ecosystem-first approach.
          </p>
          
          <p className="text-lg mb-10">
            The Singapore entity serves as the core venture-building hub, focused on design, technology, 
            and ecosystem development. It does not provide financial advisory or fundraising services. 
            Token issuance and treasury governance are managed by 1 Asset Exchange LLC, a Cayman Islands-registered 
            entity purpose-built for utility token issuance and compliance-ready token distribution.
          </p>
        </div>
        
        <div className="mt-12 mb-14">
          <h3 className="text-2xl font-bold font-poppins text-midnight mb-6">
            🌍 Our Global Presence
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {[
              { location: "Singapore", role: "HQ and product innovation lab" },
              { location: "India", role: "Presence in Goa, Mumbai, Chennai, and Coimbatore" },
              { location: "United Kingdom", role: "Partner and investor outreach" },
              { location: "Sri Lanka", role: "Engineering and community strategy" },
              { location: "Dubai", role: "Ecosystem and capital market integration" }
            ].map((office, index) => (
              <div 
                key={index}
                className="bg-softplatinum/30 p-6 rounded-xl border border-royalgold/10 hover:border-royalgold/30 transition-all"
              >
                <h4 className="font-bold text-xl text-midnight mb-2">{office.location}</h4>
                <p className="text-midnight/70">{office.role}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="bg-midnight p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold font-poppins text-white mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-white/90">
              To unlock a future where ideas scale faster, ownership is shared, and value flows freely — 
              by building the tools, protocols, and platforms that turn digital intent into tokenized outcomes.
            </p>
          </div>
          
          <div className="bg-royalgold p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold font-poppins text-midnight mb-4">
              Our Vision
            </h3>
            <p className="text-lg text-midnight/80">
              To be the world's most trusted digital asset launch engine — enabling builders, creators, and 
              communities to co-own, co-create, and co-monetize the assets of tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompanySection;
