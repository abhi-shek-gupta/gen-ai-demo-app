const ReviewSummary = ({ summary }: { summary: string }) => {
	if (!summary) return null;
	return (
		<div className="border-2 border-blue-300 shadow rounded-md p-4 w-full mx-auto">
			<h2 className="m-1 text-xl font-bold">Summarized Review</h2>
			{summary.split("\n").map((block) => (
				<div>{block}</div>
			))}
		</div>
	);
};
export default ReviewSummary;
