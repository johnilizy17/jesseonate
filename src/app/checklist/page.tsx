import { CheckCircle } from "lucide-react";

export default function ChecklistPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Build the Confidence to Homeownership</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Follow this comprehensive checklist to prepare for your home buying journey
        </p>

        <div className="space-y-8">
          <ChecklistSection
            title="Financial Preparation"
            items={[
              "Check your credit score and address any issues",
              "Save for down payment (typically 3-20% of home price)",
              "Get pre-approved for a mortgage",
              "Budget for closing costs (2-5% of purchase price)",
              "Set aside emergency fund for home repairs"
            ]}
          />

          <ChecklistSection
            title="Home Search"
            items={[
              "Define your must-haves and nice-to-haves",
              "Research neighborhoods and school districts",
              "Attend open houses and schedule viewings",
              "Consider commute times and local amenities",
              "Review property history and disclosures"
            ]}
          />

          <ChecklistSection
            title="Making an Offer"
            items={[
              "Work with your agent on competitive offer strategy",
              "Include appropriate contingencies (inspection, financing, appraisal)",
              "Submit earnest money deposit",
              "Negotiate terms and price",
              "Review and sign purchase agreement"
            ]}
          />

          <ChecklistSection
            title="Under Contract"
            items={[
              "Schedule home inspection within contingency period",
              "Finalize mortgage application and provide required documents",
              "Order appraisal through your lender",
              "Review title report and purchase homeowners insurance",
              "Complete final walkthrough before closing"
            ]}
          />

          <ChecklistSection
            title="Closing Day"
            items={[
              "Review closing disclosure 3 days before closing",
              "Bring valid ID and certified funds for closing costs",
              "Sign all closing documents",
              "Receive keys to your new home",
              "Celebrate your achievement!"
            ]}
          />
        </div>

        <div className="mt-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Client Testimonial</h2>
          <p className="text-gray-700 italic mb-4">
            "Jesse helped us buying our first home in LA! He was patient and attentive with our needs and wants. 
            He always made himself available to clarify any doubts or concerns throughout the process. 
            He made the entire process super easy and convenient. Definitely recommend Jesse and his team!"
          </p>
          <p className="text-gray-600 font-semibold">- Happy Homeowner</p>
        </div>
      </div>
    </div>
  );
}

function ChecklistSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">{title}</h2>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
