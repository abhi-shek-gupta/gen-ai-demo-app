import { AuthorType } from "@/types";
import { FaUserCircle, FaClock } from "react-icons/fa";

const Author = ({ author }: { author: AuthorType }) => {
	const { name, published, timeToRead } = author;
	return (
		<div className="flex gap-4 p-5 bg-sky-50 w-max rounded-md shadow-lg">
			<FaUserCircle size="3rem" className="text-sky-700" />
			<address className="not-italic">
				<p>
					By <span className="text-sky-700">{name}</span>
				</p>
				<p>Published {published}</p>
				<p className="flex items-center gap-2">
					<FaClock /> {timeToRead} read
				</p>
			</address>
		</div>
	);
};

export default Author;
