"use client";
import fetchKeywords from "@/data/fetchKeywords";
import fetchReviewsSummary from "@/data/fetchReviewsSummary";
import { totalReview as reviews } from "../data/reviews";
import finalData from "@/data/finalData";
import { BsStars } from "react-icons/bs";
import { AIButtonProps } from "@/types";

const AIButton = ({ setData, setIsLoading }: AIButtonProps) => {
	const handleClick = async () => {
		setIsLoading(true);
		// const keywords = await fetchKeywords(reviews);
		// const reviewSummary = await fetchReviewsSummary(reviews);
		// console.log({keywords });
		setTimeout(() => {
			console.log("API is calling");
			setData({
				reviewSummary: finalData.reviewSummary,
				keywords: finalData.keywords,
			});
			setIsLoading(false);
		}, 3000);
	};

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
