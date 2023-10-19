import Image from "next/image";
import Link from "next/link";
import { AiOutlineSearch, AiOutlineDown } from "react-icons/ai";

const CategoryLink = ({
	name,
	hideArrow,
}: {
	name: string;
	hideArrow?: boolean;
}) => {
	return (
		<Link
			href="/"
			className="flex gap-1 items-center text-sky-700 font-semibold"
		>
			{name} {!hideArrow && <AiOutlineDown size="0.8rem" />}
		</Link>
	);
};

const Header = () => {
	return (
		<div>
			<div className="py-3 flex justify-between ">
				<div className="flex gap-3 items-center">
					<Image
						src="/logo.svg"
						alt="App Logo"
						width={180}
						height={37}
						priority
					/>
					<div className="text-sky-700 font-semibold text-xs">
						Helping businessess choose <br />
						better software since 1999
					</div>
				</div>
				<div className="flex gap-5 items-center">
					<div className="flex items-center gap-2 border pl-4 border-gray-400 px-1 rounded-full h-full">
						<AiOutlineSearch size="1.5rem" color="#0659B8" />
						<input
							placeholder="What can we help you find?"
							className="placeholder:italic"
						/>
					</div>
					<Link href="/" className="text-sky-700 font-semibold">
						LOG IN
					</Link>
					<button className="py-3 px-5 bg-sky-700 text-white rounded-full">
						SIGN UP
					</button>
				</div>
			</div>
			<div className="flex justify-between text-sm py-5 bg-sky-50">
				<div className="flex gap-4">
					{[
						"Software Categories",
						"Service Categories",
						"Guides & Research",
						"Who We Are",
					].map((name) => (
						<CategoryLink name={name} key={name} />
					))}
				</div>
				<div className="flex gap-4 ">
					<CategoryLink name="For Vendors" hideArrow />
					<CategoryLink name="Write a Review" hideArrow />
				</div>
			</div>
		</div>
	);
};

export default Header;
