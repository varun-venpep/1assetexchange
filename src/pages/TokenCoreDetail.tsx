import { Link } from "react-router-dom";

const TokenCoreDetail: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white font-poppins">
      {/* Hero Section */}
      <section className="py-8 px-4 text-center mt-16">
        <h2 className="text-2xl md:text-3xl font-bold font-poppins text-black mb-4">
          TokenCore
        </h2>
        <p className="text-midnight/70 mb-6 max-w-2xl mx-auto">
          Build and manage tokenized assets with robust infrastructure, ensuring compliance and alignment with DeFi ecosystems.
        </p>
      </section>

      {/* Overview Section */}
      <section className="py-5 px-4 max-w-5xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold font-poppins text-black mb-4">
          What is TokenCore?
        </h3>
        <p className="text-midnight/70 mb-6">
          TokenCore provides the infrastructure to design, launch, and govern tokenized assets. From smart contract templates to DAO tooling and tokenomics design, TokenCore ensures your tokens are ready for protocol and exchange integration, making token launches seamless and compliant.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 text-midnight rounded-lg shadow-lg p-6">
            <h4 className="text-xl md:text-2xl font-semibold font-poppins text-black mb-2">
              Smart Contract Templates
            </h4>
            <p className="text-midnight/70">
              Use pre-built templates (e.g., ERC-20, ERC-721) to create tokens quickly and securely.
            </p>
          </div>
          <div className="bg-gray-100 text-midnight rounded-lg shadow-lg p-6">
            <h4 className="text-xl md:text-2xl font-semibold font-poppins text-black mb-2">
              DAO Tooling
            </h4>
            <p className="text-midnight/70">
              Implement governance with voting mechanisms and decentralized decision-making tools.
            </p>
          </div>
          <div className="bg-gray-100 text-midnight rounded-lg shadow-lg p-6">
            <h4 className="text-xl md:text-2xl font-semibold font-poppins text-black mb-2">
              Tokenomics Infrastructure
            </h4>
            <p className="text-midnight/70">
              Design supply mechanisms, staking, and rewards to ensure sustainable token economies.
            </p>
          </div>
          <div className="bg-gray-100 text-midnight rounded-lg shadow-lg p-6">
            <h4 className="text-xl md:text-2xl font-semibold font-poppins text-black mb-2">
              Protocol Alignment
            </h4>
            <p className="text-midnight/70">
              Ensure tokens are compatible with DeFi platforms and exchanges for seamless integration.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-4 max-w-5xl mx-auto bg-white text-midnight">
        <h3 className="text-2xl md:text-3xl font-bold font-poppins text-black mb-4">
          Benefits of TokenCore
        </h3>
        <ul className="list-disc list-inside text-midnight/70 space-y-2">
          <li>Simplify token launches with pre-built infrastructure.</li>
          <li>Ensure governance compliance with DAO tools.</li>
          <li>Align tokens with DeFi ecosystems for broader adoption.</li>
          <li>Scale token projects with robust tokenomics design.</li>
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
              Blockchain Projects
            </h4>
            <p className="text-midnight/70">
              Launch utility or NFT tokens with secure smart contracts.
            </p>
          </div>
          <div className="bg-gray-100 text-midnight rounded-lg shadow-lg p-6">
            <h4 className="text-xl md:text-2xl font-semibold font-poppins text-black mb-2">
              DAOs
            </h4>
            <p className="text-midnight/70">
              Manage community governance with decentralized voting and decision-making.
            </p>
          </div>
          <div className="bg-gray-100 text-midnight rounded-lg shadow-lg p-6">
            <h4 className="text-xl md:text-2xl font-semibold font-poppins text-black mb-2">
              DeFi Platforms
            </h4>
            <p className="text-midnight/70">
              Integrate new tokens with exchanges and protocols seamlessly.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 text-center">
        <Link to="/contact">
          <button className="px-6 py-3 bg-royalgold text-midnight rounded-full font-semibold text-lg hover:bg-yellow-500 transition-all duration-300">
            Launch Your Token with TokenCore →
          </button>
        </Link>
      </section>
    </div>
  );
};

export default TokenCoreDetail;