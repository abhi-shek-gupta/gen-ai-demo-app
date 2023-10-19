import { FaXTwitter, FaFacebookF, FaLinkedinIn, FaLink } from "react-icons/fa6";
import { AiFillMail } from "react-icons/ai";
import { IconType } from "react-icons/lib";

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
			<div className="border border-sky-700 mt-5 p-3">
				<p className="my-4">Was this article helpful to you ?</p>
				<div className="flex gap-3 mb-5">
					<button className="py-2 px-5 text-sky-700 rounded-full border-sky-700 border-2">
						YES
					</button>
					<button className="py-2 px-5 text-sky-700 rounded-full border-sky-700 border-2">
						NO
					</button>
				</div>
			</div>
		</div>
	);
};

export default Share;
