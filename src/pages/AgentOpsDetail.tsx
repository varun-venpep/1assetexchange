import { Link } from "react-router-dom";

const AgentOpsDetail: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white font-poppins">
      {/* Hero Section */}
      <section className="py-8 px-4 text-center mt-16">
        <h2 className="text-2xl md:text-3xl font-bold font-poppins text-black mb-4">
          AgentOps
        </h2>
        <p className="text-midnight/70 mb-6 max-w-2xl mx-auto">
          Streamline your operations with AI-powered automation, designed to scale ventures with precision and efficiency.
        </p>
      </section>

      {/* Overview Section */}
      <section className="py-5 px-4 max-w-5xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold font-poppins text-black mb-4">
          What is AgentOps?
        </h3>
        <p className="text-midnight/70 mb-6">
          AgentOps leverages autonomous AI agents to automate internal workflows, manage stakeholder relationships, and orchestrate ecosystem logic. Whether you’re a startup scaling operations or an enterprise managing complex ecosystems, AgentOps ensures precision and efficiency at every step.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 text-midnight rounded-lg shadow-lg p-6">
            <h4 className="text-xl md:text-2xl font-semibold font-poppins text-black mb-2">
              Workflow Automation
            </h4>
            <p className="text-midnight/70">
              Automate repetitive tasks like task assignment, scheduling, and data entry, freeing your team to focus on strategic goals.
            </p>
          </div>
          <div className="bg-gray-100 text-midnight rounded-lg shadow-lg p-6">
            <h4 className="text-xl md:text-2xl font-semibold font-poppins text-black mb-2">
              Stakeholder CRM
            </h4>
            <p className="text-midnight/70">
              Use AI-driven insights to predict client needs, manage relationships, and enhance collaboration across stakeholders.
            </p>
          </div>
          <div className="bg-gray-100 text-midnight rounded-lg shadow-lg p-6">
            <h4 className="text-xl md:text-2xl font-semibold font-poppins text-black mb-2">
              Ecosystem Logic
            </h4>
            <p className="text-midnight/70">
              Coordinate seamlessly between suppliers, partners, and internal teams with real-time monitoring and anomaly detection.
            </p>
          </div>
          <div className="bg-gray-100 text-midnight rounded-lg shadow-lg p-6">
            <h4 className="text-xl md:text-2xl font-semibold font-poppins text-black mb-2">
              Scalable Operations
            </h4>
            <p className="text-midnight/70">
              Deploy AI-powered operational stacks to scale your venture with precision, ensuring data-driven decisions at every level.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-4 max-w-5xl mx-auto bg-white text-midnight">
        <h3 className="text-2xl md:text-3xl font-bold font-poppins text-black mb-4">
          Benefits of AgentOps
        </h3>
        <ul className="list-disc list-inside text-midnight/70 space-y-2">
          <li>Reduce manual effort by automating repetitive tasks.</li>
          <li>Improve operational efficiency with real-time insights.</li>
          <li>Ensure precision in scaling operations with AI-driven tools.</li>
          <li>Enhance stakeholder collaboration with predictive analytics.</li>
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
              Startups
            </h4>
            <p className="text-midnight/70">
              Automate operations to focus on growth, from task management to client outreach.
            </p>
          </div>
          <div className="bg-gray-100 text-midnight rounded-lg shadow-lg p-6">
            <h4 className="text-xl md:text-2xl font-semibold font-poppins text-black mb-2">
              Enterprises
            </h4>
            <p className="text-midnight/70">
              Manage complex ecosystems with AI-driven coordination across teams and partners.
            </p>
          </div>
          <div className="bg-gray-100 text-midnight rounded-lg shadow-lg p-6">
            <h4 className="text-xl md:text-2xl font-semibold font-poppins text-black mb-2">
              Ventures
            </h4>
            <p className="text-midnight/70">
              Scale operations with precision using AI-powered stacks for real-time decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 text-center">
        <Link to="/contact">
          <button className="px-6 py-3 bg-royalgold text-midnight rounded-full font-semibold text-lg hover:bg-yellow-500 transition-all duration-300">
            Get Started with AgentOps →
          </button>
        </Link>
      </section>
    </div>
  );
};

export default AgentOpsDetail;