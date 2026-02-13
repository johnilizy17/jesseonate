import { Home, DollarSign, FileText, Key } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">For Sellers & Buyers</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          With access to exclusive listings, neighborhood insights, and tailored recommendations, 
          we help you secure the right property at the right price. From start to finish, our priority 
          is to ensure your real estate journey is seamless, transparent, and rewarding.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <ServiceCard
            icon={<Home className="w-16 h-16 text-blue-600" />}
            title="For Buyers"
            description="Navigate the home buying process with confidence. I'll help you find the perfect property, negotiate the best price, and guide you through every step from offer to closing."
            features={[
              "Property search and recommendations",
              "Market analysis and pricing guidance",
              "Negotiation and offer preparation",
              "Inspection coordination",
              "Closing support"
            ]}
          />

          <ServiceCard
            icon={<DollarSign className="w-16 h-16 text-blue-600" />}
            title="For Sellers"
            description="Maximize your home's value with strategic marketing and expert guidance. I'll help you prepare, price, and sell your property for the best possible outcome."
            features={[
              "Home staging consultation",
              "Professional photography and marketing",
              "Pricing strategy and market positioning",
              "Buyer screening and negotiations",
              "Transaction management"
            ]}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <ServiceCard
            icon={<FileText className="w-16 h-16 text-blue-600" />}
            title="Market Analysis"
            description="Get detailed insights into local market trends, property values, and investment opportunities to make informed decisions."
            features={[
              "Comparative market analysis",
              "Neighborhood reports",
              "Investment potential assessment",
              "Market trend forecasting"
            ]}
          />

          <ServiceCard
            icon={<Key className="w-16 h-16 text-blue-600" />}
            title="First-Time Buyers"
            description="Special support for first-time homebuyers navigating the process for the first time. I'll make it simple and stress-free."
            features={[
              "Step-by-step guidance",
              "Lender recommendations",
              "Down payment assistance programs",
              "Educational resources"
            ]}
          />
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ 
  icon, 
  title, 
  description, 
  features 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  features: string[];
}) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
      <div className="mb-4">{icon}</div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-600 mr-2">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
