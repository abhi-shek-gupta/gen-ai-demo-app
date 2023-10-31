"use client";

import { useState } from "react";
import AIButton from "./AIButton";
import Skeleton from "./Skeleton";
import fetchBlogSummary from "@/data/fetchBlogSummary";
import { article1Data } from "@/data/article1";
import finalData from "@/data/finalData";

const ArticleSummary = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const handleClick = () => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchBlogSummary(finalData.blogContent);
        const formattedData: string[] = data
          .split("\n")
          .map((item) => item.replace("-", "").trim());
        setData(formattedData);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log("something went wrong", error);
      }
    };
    fetchData();

    const mockCall = () => {
      setIsLoading(true);
      setTimeout(() => {
        const formattedData: string[] = finalData.blogSummary
          .split("\n")
          .map((item) => item.replace("-", "").trim());
        setData(formattedData);
        setIsLoading(false);
      }, 2000);
    };
    // mockCall();
  };
  return (
    <div className="border-2 border-blue-300 shadow rounded-md p-4 w-full mx-auto mt-5">
      <p className="my-4">
        Want AI to summarise the content for you?
        <span className="[&>button]:align-middle">
          <AIButton handleClick={handleClick} />
        </span>
      </p>
      <div className="mb-5">
        {isLoading ? (
          <Skeleton onlyText />
        ) : Boolean(data.length) ? (
          <div>
            <h2 className="m-1 text-xl font-bold">Blogs Highlights</h2>
            <ul className="list-disc m-5">
              {data.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ArticleSummary;
