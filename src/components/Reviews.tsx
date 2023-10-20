"use client";

import { review3, reviews2 } from "@/data/reviews";
import ReviewBox from "./ReviewBox";
import { useMemo, useState } from "react";
import { ActiveTagProps } from "@/types";
import AIButton from "./AIButton";

const FilterTags = ({
  tags,
  activeFilter,
  setActiveFilter,
}: ActiveTagProps) => {
  const handleClick = (tag: string) => {
    if (tag === activeFilter) return setActiveFilter("");
    setActiveFilter(tag);
  };

  return (
    <div className="flex gap-4 my-4">
      {tags.map((tag) => {
        const isActive = tag === activeFilter;
        return (
          <button
            className={`px-3 py-1 rounded-full  shadow-md hover:shadow-sm  ${
              isActive
                ? "bg-green-200 hover:bg-green-300"
                : "bg-orange-200 hover:bg-orange-300"
            }`}
            key={tag}
            onClick={() => handleClick(tag)}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
};

const Reviews = () => {
  const reviews = reviews2;

  const [activeFilter, setActiveFilter] = useState("");

  const sampleTags = ["knowledge", "generative ai", "engagement"];

  const filteredResults = useMemo(() => {
    if (!activeFilter) return reviews;
    const regex = new RegExp(activeFilter, "i");
    return reviews.filter((review) => regex.test(review.content));
  }, [activeFilter]);

  return (
    <div className="bg-sky-50 p-5 rounded-md">
      <h2 className="text-2xl italic font-semibold text-sky-800">
        Reviews on the article :
      </h2>
      <AIButton />
      <FilterTags
        tags={sampleTags}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      {activeFilter && (
        <p className="font-semibold italic text-sm text-orange-800">
          Showing {filteredResults.length} of {reviews.length} results :
        </p>
      )}
      <ul className="flex gap-4 overflow-x-scroll">
        {filteredResults.map((review) => (
          <ReviewBox review={review} key={review.title} />
        ))}
      </ul>
    </div>
  );
};
export default Reviews;
