import { ReviewBoxProps } from "@/types";
import { FaUserCircle, FaStar } from "react-icons/fa";

const highlightMatch = (content: string, filter?: string) => {
	if (!filter) return content;

	const query = filter.trim().split(" ").join("|");
	const regex = new RegExp(`(${query})`, "gi");

	const parts = content.split(regex);
	parts.length > 1 && console.debug(parts);
	return (
		<span>
			{parts.map((part, i) => (
				<span
					key={i}
					className={
						regex.test(part) ? "bg-yellow-400 font-semibold" : ""
					}
				>
					{part}
				</span>
			))}
		</span>
	);
};

const RenderStars = ({ amount }: { amount: number }) => {
	return (
		<div className="flex gap-1">
			{new Array(amount).fill(1).map((_, idx) => (
				<FaStar className="text-yellow-500" key={idx} />
			))}
		</div>
	);
};

const ReviewBox = ({ review, activeFilter }: ReviewBoxProps) => {
	const { title, rating, content } = review;
	return (
		<div className="border-2 border-sky-800 rounded-md p-3 flex flex-col gap-3 min-w-[400px] max-w-[400px] my-4 drop-shadow-lg bg-blue-100">
			<div className="flex gap-3 items-center">
				<FaUserCircle size="2.5rem" color="green" />
				<span>User Name</span>
			</div>
			<RenderStars amount={rating} />
			<h4 className="font-semibold">{title}</h4>
			<p>{highlightMatch(content, activeFilter)}</p>
		</div>
	);
};

export default ReviewBox;
