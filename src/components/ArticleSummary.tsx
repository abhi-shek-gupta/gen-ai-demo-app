"use client";

import AIButton from "./AIButton";
import Skeleton from "./Skeleton";

const ArticleSummary = () => {
	return (
		<div className="border-2 border-blue-300 shadow rounded-md p-4 w-full mx-auto mt-5">
			<p className="my-4">
				Want AI to summarise the content for you?
				<span className="[&>button]:align-middle">
					<AIButton setData={() => {}} setIsLoading={() => {}} />
				</span>
			</p>
			<div className="mb-5">
				<Skeleton onlyText />
			</div>
		</div>
	);
};

export default ArticleSummary;
