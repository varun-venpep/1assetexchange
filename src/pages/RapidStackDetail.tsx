import { Link } from "react-router-dom";

const RapidStackDetail: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white font-poppins">
      {/* Hero Section */}
      <section className="py-8 px-4 text-center mt-16">
        <h2 className="text-2xl md:text-3xl font-bold font-poppins text-black mb-4">
          RapidStack
        </h2>
        <p className="text-midnight/70 mb-6 max-w-2xl mx-auto">
          Launch user-facing products in weeks with AI-enabled MVPs and no-code tools, designed for rapid validation and pre-tokenization pilots.
        </p>
      </section>

      {/* Overview Section */}
      <section className="py-5 px-4 max-w-5xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold font-poppins text-black mb-4">
          What is RapidStack?
        </h3>
        <p className="text-midnight/70 mb-6">
          RapidStack is your go-to platform for building and validating Minimum Viable Products (MVPs) at unprecedented speed. Using AI and no-code tools, RapidStack enables you to deploy user-facing products in weeks, test pre-tokenization models, and validate ideas before full-scale investment.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 text-midnight rounded-lg shadow-lg p-6">
            <h4 className="text-xl md:text-2xl font-semibold font-poppins text-black mb-2">
              AI-Enabled MVPs
            </h4>
            <p className="text-midnight/70">
              Generate UI prototypes and automate backend logic with AI, reducing development time significantly.
            </p>
          </div>
          <div className="bg-gray-100 text-midnight rounded-lg shadow-lg p-6">
            <h4 className="text-xl md:text-2xl font-semibold font-poppins text-black mb-2">
              No-Code Modality
            </h4>
            <p className="text-midnight/70">
              Use drag-and-drop interfaces and pre-built templates to create MVPs without coding expertise.
            </p>
          </div>
          <div className="bg-gray-100 text-midnight rounded-lg shadow-lg p-6">
            <h4 className="text-xl md:text-2xl font-semibold font-poppins text-black mb-2">
              Pre-Tokenization Pilots
            </h4>
            <p className="text-midnight/70">
              Test token-based models in controlled environments to validate feasibility before launch.
            </p>
          </div>
          <div className="bg-gray-100 text-midnight rounded-lg shadow-lg p-6">
            <h4 className="text-xl md:text-2xl font-semibold font-poppins text-black mb-2">
              Rapid Deployment
            </h4>
            <p className="text-midnight/70">
              Deploy user-facing products in weeks, accelerating your time-to-market and feedback loops.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-4 max-w-5xl mx-auto bg-white text-midnight">
        <h3 className="text-2xl md:text-3xl font-bold font-poppins text-black mb-4">
          Benefits of RapidStack
        </h3>
        <ul className="list-disc list-inside text-midnight/70 space-y-2">
          <li>Speed up product launches with rapid MVP development.</li>
          <li>Reduce costs by leveraging no-code and AI tools.</li>
          <li>Validate ideas early with pre-tokenization pilots.</li>
          <li>Iterate quickly based on user feedback.</li>
        </ul>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold font-poppins text-black mb-4">
          Use Cases
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 text-midnight rounded-lg shadow-lg p-6">
            <h4 className="text-xl md:text-2xl font-semibold font-poppins text-black mb-2">
              Entrepreneurs
            </h4>
            <p className="text-midnight/70">
              Test product ideas quickly with AI-generated MVPs and no-code tools.
            </p>
          </div>
          <div className="bg-gray-100 text-midnight rounded-lg shadow-lg p-6">
            <h4 className="text-xl md:text-2xl font-semibold font-poppins text-black mb-2">
              Blockchain Startups
            </h4>
            <p className="text-midnight/70">
              Run pre-tokenization pilots to validate token models before full deployment.
            </p>
          </div>
          <div className="bg-gray-100 text-midnight rounded-lg shadow-lg p-6">
            <h4 className="text-xl md:text-2xl font-semibold font-poppins text-black mb-2">
              Businesses
            </h4>
            <p className="text-midnight/70">
              Deploy prototypes to gather user feedback and refine product offerings.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 text-center">
        <Link to="/contact">
          <button className="px-6 py-3 bg-royalgold text-midnight rounded-full font-semibold text-lg hover:bg-yellow-500 transition-all duration-300">
            Launch Your MVP with RapidStack →
          </button>
        </Link>
      </section>
    </div>
  );
};

export default RapidStackDetail;