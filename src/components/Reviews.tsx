import { review3, reviews2 } from '@/data/reviews';
import ReviewBox from './ReviewBox';

const Reviews = () => {
	const reviews = reviews2;
	return (
		<div className='bg-sky-50 p-5 rounded-md'>
			<h2 className='text-2xl italic font-semibold text-sky-800'>Reviews on the article :</h2>
			<ul className='flex gap-4 overflow-x-scroll'>
				{reviews.map(review => (
					<ReviewBox review={review} />
				))}
			</ul>
		</div>
	);
};
export default Reviews;
