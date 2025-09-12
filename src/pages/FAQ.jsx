import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I subscribe to a meal plan?",
      answer:
        "You can choose weekly or monthly meal plans from the Explore page and proceed with online payment.",
    },
    {
      question: "Can I customize my thali?",
      answer:
        "Yes, we provide customizable options where you can select dishes according to your preferences.",
    },
    {
      question: "Do you offer delivery in my area?",
      answer:
        "We currently deliver to all major areas in the city. Enter your pin code at checkout to confirm availability.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept UPI, debit/credit cards, net banking, and popular wallet payments.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 text-left font-medium text-gray-800"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 text-gray-600 bg-white">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
