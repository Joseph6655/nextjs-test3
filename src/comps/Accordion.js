import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-300 rounded">
          <div
            className="flex justify-between items-center px-2 py-2 cursor-pointer bg-gray-100"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-semibold">{item.title}</span>
            {openIndex === index ? (
              <button
                className="text-gray-600"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleAccordion(index);
                }}
              >
                -
              </button>
            ) : (
              <button
                className="text-gray-600"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleAccordion(index);
                }}
              >
                +
              </button>
            )}
          </div>
          {openIndex === index && (
            <div className="px-1 py-1 border-t border-gray-300">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;