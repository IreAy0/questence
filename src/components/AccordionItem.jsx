/* eslint-disable react/prop-types */
import React, { useState } from 'react'

const AccordionItem = ({ study }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
      setIsOpen(!isOpen);
  };

  const hasSubcategories = study.subCategory && study.subCategory.length > 0;

  return (
      <div className="">
          <div 
              className="flex gap-3 items-center px-2.5 py-1.5 cursor-pointer"
              // onClick={toggleAccordion}
              onClick={hasSubcategories ? toggleAccordion : undefined}
          >
          {hasSubcategories && <span>{isOpen ? '▼' : '▶'}</span>}
              <h3 className={`text-sm text-left ${!hasSubcategories ? 'font-normal' : 'font-bold '}`}>{study.study}</h3>
          </div>
          {isOpen && hasSubcategories && (
                <div className="pl-4">
                    {study.subCategory.map((subStudy, index) => (
                        <AccordionItem key={index} study={subStudy} />
                    ))}
              </div>
          )}
      </div>
  );
};


export default AccordionItem