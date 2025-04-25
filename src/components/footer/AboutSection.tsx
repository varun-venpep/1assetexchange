
import React from "react";
import { X, Linkedin } from "lucide-react";

const AboutSection = () => (
  <div>
    <h3 className="text-2xl font-bold mb-6 text-royalgold">1 Asset Exchange</h3>
    <p className="text-white/70 mb-6 text-sm leading-relaxed">
      Build with programmable infrastructure. Digitize, automate, and tokenize your business with agentic AI tools and token-native systems.
    </p>
    <div className="flex space-x-4">
      <a 
        href="https://x.com/1AssetExchange" 
        className="text-white/70 hover:text-royalgold transition-colors" 
        aria-label="X (formerly Twitter)" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <X size={20} />
      </a>
      <a 
        href="https://www.linkedin.com/company/1assetexchange" 
        className="text-white/70 hover:text-royalgold transition-colors" 
        aria-label="LinkedIn" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <Linkedin size={20} />
      </a>
    </div>
  </div>
);

export default AboutSection;
