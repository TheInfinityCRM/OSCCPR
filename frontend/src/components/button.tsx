import { IButtonProps } from "@customTypes/components";
import React from "react";

const Button: React.FC<IButtonProps> = ({ title, type }) => {
  return type == "small" ? (
    <button
      className={`w-52 h-10 font-roboto border-2 rounded-full text-white hover:text-[#FFCB05] hover:border-[#FFCB05]`}
    >
      {title}
    </button>
  ) : type == "medium" ? (
    <button
      className={`w-full lg:w-96 h-12 font-roboto border-2 rounded-lg text-white hover:text-[#FFCB05] hover:border-[#FFCB05]`}
    >
      {title}
    </button>
  ) : (
    <></>
  );
};

export default Button;
