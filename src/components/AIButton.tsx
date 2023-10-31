"use client";

import { BsStars } from "react-icons/bs";
import { AIButtonProps } from "@/types";

const AIButton = ({ handleClick }: AIButtonProps) => {
  return (
    <button
      onClick={handleClick}
      type="button"
      title="Let's do AI Magic!"
      className="rounded-full bg-black hover:bg-gray-700 hover:shadow-md active:bg-gray-800 active:shadow-lg opacity-90 scale-75"
    >
      <div className="p-2 focus-visible:invisible relative">
        <BsStars className="text-yellow-500" size="1.5rem" />
        <div className="absolute animate-ping bg-blue-800 w-5 h-5 top-2.5 left-2.5 rounded-full -z-10"></div>
      </div>
    </button>
  );
};
export default AIButton;
