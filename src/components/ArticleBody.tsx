import { BodyType, BodyTypeKey, ImageType } from "@/types";
import Image from "next/image";

const renderBody = (body: BodyType) => {
	const [key, value] = Object.entries(body)[0];

	switch (key) {
		case "h2":
			return (
				<h2 className="font-bold text-3xl my-4">{value as string}</h2>
			);
		case "p":
			return (
				<p className="text-lg leading-7 text-gray-800">
					{value as string}
				</p>
			);
		case "image":
			const { caption, src } = value as ImageType;
			return (
				<div className="my-4 text-center">
					<Image
						src={src}
						alt={caption}
						height={350}
						width={600}
						className="mx-auto"
					/>
					<label className="text-sm text-gray-500">{caption}</label>
				</div>
			);
		default:
			return <div>{value as string}</div>;
	}
};

const ArticleBody = ({ body }: { body: BodyType[] }) => {
	return (
		<article className="basis-3/4">
			{body.map((tag) => renderBody(tag))}
		</article>
	);
};

export default ArticleBody;
