import { FaXTwitter, FaFacebookF, FaLinkedinIn, FaLink } from "react-icons/fa6";
import { AiFillMail } from "react-icons/ai";
import { IconType } from "react-icons/lib";
import ArticleSummary from "./ArticleSummary";

const renderIcon = (Icon: IconType) => (
	<button className="bg-sky-700 p-3 rounded-full">
		<Icon color="white" />
	</button>
);

const Share = () => {
	return (
		<div className="basis-1/4 sticky top-0 h-full">
			<p className="mb-2 font-semibold tracking-widest">SHARE</p>
			<div className="flex gap-2">
				{[
					FaFacebookF,
					FaLinkedinIn,
					FaXTwitter,
					FaLink,
					AiFillMail,
				].map((icon) => renderIcon(icon))}
			</div>
			<ArticleSummary />
		</div>
	);
};

export default Share;
