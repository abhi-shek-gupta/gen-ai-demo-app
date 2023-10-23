"use client";
import fetchKeywords from "@/data/fetchKeywords";
import fetchReviewsSummary from "@/data/fetchReviewsSummary";
import { totalReview as reviews } from "../data/reviews";
import finalData from "@/data/finalData";

const AIButton = ({setData}) => {
  const handleClick = async () => {
    // const keywords = await fetchKeywords(reviews);
    // const reviewSummary = await fetchReviewsSummary(reviews);
    // console.log({keywords });
    setTimeout(()=>{
      console.log("API is calling")
      setData( {
        reviewSummary: finalData.reviewSummary,
        keywords: finalData.keywords,
      })
    } ,2000);
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
