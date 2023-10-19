"use client";
import fetchKeywords from "@/data/fetchKeywords";
import fetchReviewsSummary from "@/data/fetchReviewsSummary";
import { reviews } from "../data/reviews";

const AIButton = () => {
  const handleClick = async () => {
    const keywords = await fetchKeywords(reviews);
    const reviewSummary = await fetchReviewsSummary(reviews);
    console.log({reviewSummary,keywords });
  };

  return (
    <>
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
      onClick={handleClick}
      type="button"
    >
      Generate Review Summary
    </button>

    </>
  );
};
export default AIButton;
