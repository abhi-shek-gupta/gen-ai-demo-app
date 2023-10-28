const TagSkeleton = () => {
	return (
		<div className="px-3 py-4 rounded-full shadow-md hover:shadow-sm ">
			<div className="h-2 bg-slate-400 rounded w-36" />
		</div>
	);
};

const Skeleton = ({ onlyText }: { onlyText?: boolean }) => {
	return (
		<div className="animate-pulse ">
			<div className="border-2 border-blue-300 shadow rounded-md p-4 w-full mx-auto">
				<div className="flex space-x-4">
					<div className="flex-1 space-y-6 py-1">
						<div className="h-2 bg-slate-400 rounded" />
						<div className="h-2 bg-slate-400 rounded" />
						<div className="h-2 bg-slate-400 rounded" />
						<div className="h-2 bg-slate-400 rounded" />
						<div className="h-2 bg-slate-400 rounded" />
						<div className="grid grid-cols-3 gap-4">
							<div className="h-2 bg-slate-400 rounded col-span-2" />
						</div>
					</div>
				</div>
			</div>
			{!onlyText && (
				<div className="flex gap-4 w-full flex-wrap my-6">
					<TagSkeleton />
					<TagSkeleton />
					<TagSkeleton />
					<TagSkeleton />
					<TagSkeleton />
					<TagSkeleton />
					<TagSkeleton />
				</div>
			)}
		</div>
	);
};

export default Skeleton;
