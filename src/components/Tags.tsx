const Tags = ({ tags }: { tags: string[] }) => {
	return (
		<div className="flex gap-3">
			{tags.map((tag) => (
				<div
					key="tag"
					className="bg-sky-200 text-sky-800 font-semibold px-3 py-1 rounded-md uppercase my-4 tracking-wider text-sm"
				>
					{tag}
				</div>
			))}
		</div>
	);
};

export default Tags;
