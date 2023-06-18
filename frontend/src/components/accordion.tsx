import { useState } from "react";
import { IAccordionProps } from "@customTypes/components";
import { FiMinus } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";

const Accordion: React.FC<IAccordionProps> = ({ active, question, answer }) => {
  const toggleAccordion = () => {};

  return (
    <div className={`relative`}>
      <button
        className={`flex items-center justify-between w-full px-4 py-6 text-white  ${
          active ? "rounded-t-lg" : "rounded-lg"
        } bg-gradient-to-b from-[#151515] ${
          active ? "to-black" : "to-[#151515]"
        }  focus:outline-none`}
        onClick={toggleAccordion}
      >
        <span
          className={`lg:pl-20 text-lg font-medium font-montserrat ${
            active ? "text-[#FFCB05]" : ""
          }`}
        >
          {question}
        </span>
        <span className="ml-2">{active ? <FiMinus /> : <AiOutlineDown />}</span>
      </button>
      {active && (
        <div
          className={`lg:pl-24 px-4 py-6 text-white font-montserrat ${
            active ? "rounded-b-lg transition" : ""
          } bg-gradient-to-b from-black to-gray-800`}
        >
          <p className="text-sm">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
