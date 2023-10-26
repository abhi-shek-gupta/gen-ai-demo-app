const ReviewSummary = ({ summary }: { summary: string }) => {
  if (!summary) return null;
  return (
    <div className="m-5">
      <h2 className="m-1 text-lg font-mono font-extrabold">
        Summarized Review
      </h2>
      {summary}
    </div>
  );
};
export default ReviewSummary;
