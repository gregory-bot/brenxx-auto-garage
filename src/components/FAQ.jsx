import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "What services do you offer?",
    answer: "We offer a comprehensive range of auto services including oil changes, brake repairs, engine diagnostics, tire services, transmission repairs, and general maintenance. Our certified technicians are equipped to handle both domestic and foreign vehicles."
  },
  {
    question: "What are your business hours?",
    answer: "We are open Monday through Friday from 8:00 AM to 6:00 PM, and Saturdays from 9:00 AM to 3:00 PM. We are closed on Sundays and major holidays."
  },
  {
    question: "Do you offer warranties on your services?",
    answer: "Yes, we provide warranties on all our services and parts. Our standard labor warranty is 12 months or 12,000 miles, whichever comes first. Specific parts may have different warranty terms which will be discussed during service."
  },
  {
    question: "How do I schedule an appointment?",
    answer: "You can schedule an appointment through our online booking system, by calling our service center, or by visiting us in person. We recommend booking in advance to ensure we can accommodate your preferred time slot."
  },
  {
    question: "What forms of payment do you accept?",
    answer: "We accept all major credit cards, debit cards, cash, and certified checks. We also offer financing options for larger repairs through our financing partners."
  },
  {
    question: "Do you offer emergency services?",
    answer: "Yes, we provide emergency services during business hours. For after-hours emergencies, we have partnerships with local towing services and can arrange for your vehicle to be brought to our facility."
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl text-center mb-12 text-blue-700">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                )}
              </button>
              <div
                className={`px-6 transition-all duration-200 ease-in-out ${
                  openItems.includes(index)
                    ? 'max-h-48 py-4 opacity-100'
                    : 'max-h-0 py-0 opacity-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;