
import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';
import type { FAQItem } from '../types';

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-700">
      <button
        onClick={onClick}
        className="w-full text-left flex justify-between items-center py-5 px-6 focus:outline-none"
      >
        <span className="text-lg font-medium text-amber-400">{item.question}</span>
        <span className="transform transition-transform duration-300">
          <svg className={`w-6 h-6 text-amber-400 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <p className="px-6 pb-5 text-gray-300">
          {item.answer}
        </p>
      </div>
    </div>
  );
};


const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-2 text-amber-400">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-400 mb-12">Answers to common questions about the tattoo process.</p>
        </div>
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg">
          {FAQ_DATA.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
