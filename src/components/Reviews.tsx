import { review3, reviews2 } from '@/data/reviews';
import ReviewBox from './ReviewBox';
import AIButton from './AIButton';

const Reviews = () => {
	const reviews = reviews2;
	return (
		<div className='bg-sky-50 p-5 rounded-md'>
			<h2 className='text-2xl italic font-semibold text-sky-800 mb-4'>Reviews on the article :</h2>
			<AIButton />
			<ul className='flex gap-4 overflow-x-scroll'>
				{reviews.map(review => (
					<ReviewBox review={review} key={review.title}/>
				))}
			</ul>
		</div>
	);
};
export default Reviews;
