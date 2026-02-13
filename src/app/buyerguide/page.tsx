import { BookOpen, TrendingUp, Home, FileCheck } from "lucide-react";

export default function BuyerGuidePage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Learn The Path to Homeownership</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          A comprehensive guide to help you navigate your home buying journey with confidence
        </p>

        <div className="prose max-w-none">
          <GuideSection
            icon={<BookOpen className="w-12 h-12 text-blue-600" />}
            title="Understanding Your Budget"
            content="Before you start house hunting, it's essential to understand what you can afford. This goes beyond just the purchase price - you'll need to consider monthly mortgage payments, property taxes, insurance, HOA fees, and maintenance costs. A good rule of thumb is that your housing costs shouldn't exceed 28% of your gross monthly income."
          />

          <GuideSection
            icon={<TrendingUp className="w-12 h-12 text-blue-600" />}
            title="Getting Pre-Approved"
            content="Getting pre-approved for a mortgage is one of the first and most important steps. This process involves a lender reviewing your financial situation - including income, assets, debts, and credit history - to determine how much they're willing to lend you. A pre-approval letter shows sellers you're a serious buyer and can give you an edge in competitive markets."
          />

          <GuideSection
            icon={<Home className="w-12 h-12 text-blue-600" />}
            title="Finding the Right Home"
            content="With your budget established and pre-approval in hand, it's time to start your search. Make a list of must-haves versus nice-to-haves. Consider factors like location, school districts, commute times, neighborhood amenities, and future resale value. Don't rush this process - finding the right home takes time, and it's important to view multiple properties before making a decision."
          />

          <GuideSection
            icon={<FileCheck className="w-12 h-12 text-blue-600" />}
            title="Making an Offer and Closing"
            content="Once you've found your dream home, I'll help you craft a competitive offer based on market analysis and comparable sales. Your offer will include contingencies for inspection, financing, and appraisal to protect your interests. After the offer is accepted, you'll enter escrow - a period where inspections are completed, financing is finalized, and all paperwork is processed. The process culminates in the closing, where you'll sign documents and receive the keys to your new home."
          />
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <TipCard
            title="First-Time Buyer Programs"
            description="Many states and localities offer programs specifically for first-time homebuyers, including down payment assistance, reduced interest rates, and tax credits. Ask me about programs available in your area."
          />

          <TipCard
            title="Home Inspection Tips"
            description="Always attend your home inspection. It's an invaluable learning experience about your potential new home. Don't be afraid to ask questions - inspectors are there to help you understand the property's condition."
          />

          <TipCard
            title="Negotiation Strategies"
            description="Everything is negotiable in real estate - not just price, but also closing dates, repairs, and included items. I'll help you navigate negotiations to get the best possible deal while maintaining a good relationship with the seller."
          />

          <TipCard
            title="Moving Day Preparation"
            description="Start planning your move early. Book movers in advance, transfer utilities, update your address, and create a moving checklist. The more organized you are, the smoother your transition will be."
          />
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="mb-6 text-lg">Let's work together to find your perfect home and make the buying process smooth and enjoyable.</p>
          <a href="/services" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
}

function GuideSection({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) {
  return (
    <div className="mb-10 bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">{icon}</div>
        <div>
          <h2 className="text-2xl font-bold mb-3 text-gray-900">{title}</h2>
          <p className="text-gray-700 leading-relaxed">{content}</p>
        </div>
      </div>
    </div>
  );
}

function TipCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
      <h3 className="font-bold text-lg mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
