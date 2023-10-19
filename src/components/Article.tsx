import { article1Data } from "@/data/article1";
import Image from "next/image";
import Tags from "./Tags";
import ArticleBody from "./ArticleBody";
import Author from "./Author";
import Share from "./Share";

const Article = () => {
	const { title, tags, author, body } = article1Data;
	return (
		<div className="my-7">
			<Tags tags={tags} />
			<div className="flex flex-row justify-between gap-4">
				<div className="basis-1/2">
					<h1 className="font-bold text-4xl tracking-wide my-3">
						{title}
					</h1>
					<Author author={author} />
				</div>
				<div>
					<Image
						src="/featuredImage.jpg"
						alt="abstract backdrop with multicolored decorative gen ai"
						objectFit="cover"
						height={350}
						width={600}
					/>
				</div>
			</div>

			<main className="flex gap-6 my-10">
				<Share />
				<ArticleBody body={body} />
			</main>
		</div>
	);
};

export default Article;
