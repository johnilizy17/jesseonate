"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Get answers to common questions about buying and selling real estate
        </p>

        <div className="space-y-4">
          <FAQItem
            question="How long does it take to buy a home?"
            answer="The home buying process typically takes 30-45 days from offer acceptance to closing. However, this can vary based on financing, inspections, and negotiations. The search phase before making an offer can take anywhere from a few weeks to several months depending on market conditions and your specific needs."
          />

          <FAQItem
            question="What happens if a buyer doesn't perform on their contingencies?"
            answer="If a buyer fails to perform on their contingencies within the agreed timeframe, we serve them with a Notice to Perform. This is a legal document that requires the buyer to complete their contingencies within 2 business days, or they risk the seller canceling the deal and moving on to find another buyer."
          />

          <FAQItem
            question="How much should I offer on a home?"
            answer="Your offer should be based on comparable sales in the area, current market conditions, the home's condition, and your budget. I'll provide a comprehensive market analysis to help you make a competitive yet fair offer. In hot markets, you may need to offer above asking price, while in slower markets there may be room for negotiation."
          />

          <FAQItem
            question="What are closing costs?"
            answer="Closing costs typically range from 2-5% of the purchase price and include fees for loan origination, title insurance, escrow services, appraisal, inspections, and various administrative costs. As a buyer, you'll receive a detailed breakdown of these costs before closing."
          />

          <FAQItem
            question="Should I get a home inspection?"
            answer="Absolutely! A home inspection is one of the most important steps in the buying process. It can reveal potential issues with the property that aren't visible during a showing. The inspection report gives you leverage to negotiate repairs or price adjustments, and helps you make an informed decision about your investment."
          />

          <FAQItem
            question="How do I prepare my home for sale?"
            answer="Start by decluttering and deep cleaning. Make necessary repairs, fresh paint in neutral colors can make a big difference, and consider professional staging. Curb appeal is crucial - ensure your lawn is maintained and the entrance is welcoming. I'll provide a detailed preparation checklist and can recommend trusted professionals for any work needed."
          />

          <FAQItem
            question="What's the difference between pre-qualification and pre-approval?"
            answer="Pre-qualification is an informal estimate of how much you might be able to borrow based on self-reported financial information. Pre-approval is more rigorous - the lender verifies your financial documents and credit, giving you a conditional commitment for a specific loan amount. Pre-approval carries much more weight with sellers."
          />

          <FAQItem
            question="Can I buy a home with less than 20% down?"
            answer="Yes! While 20% down helps you avoid private mortgage insurance (PMI), many loan programs allow for much lower down payments. FHA loans require as little as 3.5% down, VA loans offer 0% down for eligible veterans, and conventional loans can go as low as 3% for qualified buyers."
          />
        </div>

        <div className="mt-12 bg-blue-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="mb-6">I'm here to help! Reach out and I'll be happy to answer any questions you have about your real estate journey.</p>
          <a href="mailto:contact@example.com" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-lg">{question}</span>
        {isOpen ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-blue-600" />}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
