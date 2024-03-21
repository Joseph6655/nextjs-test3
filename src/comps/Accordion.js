import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-300 rounded mb-2">
          <div
            className="flex justify-between items-center px-4 py-2 cursor-pointer bg-gray-100"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-semibold">{item.title}</span>
            <svg
              className={`w-4 h-4 transition-transform ${
                openIndex === index ? 'transform rotate-90' : ''
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {openIndex === index && (
            <div className="px-4 py-2 border-t border-gray-300">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;