import { Dispatch, SetStateAction } from "react";

export type ArticleType = {
	tags: string[];
	title: string;
	author: AuthorType;
	body: BodyType[];
};

export interface AuthorType {
	name: string;
	published: string;
	timeToRead: string;
	bio: string;
}

export interface ImageType {
	src: string;
	caption: string;
}

export type BodyType = Partial<{
	p: string;
	h2: string;
	image: ImageType;
}>;

export type BodyTypeKey = keyof BodyType;

export type ReviewType = {
	title: string;
	rating: number;
	content: string;
};

export interface ActiveTagProps {
	tags: string[];
	activeFilter: string;
	setActiveFilter: Dispatch<SetStateAction<string>>;
}

export interface ReviewBoxProps {
	review: ReviewType;
	activeFilter?: string;
}

export interface AIButtonProps {
	handleClick : ()=>{};
}
