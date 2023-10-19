"use client";
import keyWordAnalyzer from "../data/fetchDatafromOpenAi";
import { reviews } from "../data/reviews";

const Button = () => {
  const handleClick = async () => {
    // const keywords = await ExtractKeywords();
    const keywords = await keyWordAnalyzer(reviews);
    console.log("final", { keywords });
  };
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
      onClick={handleClick}
      type="button"
    >
      GEN AI
    </button>
  );
};
export default Button;
