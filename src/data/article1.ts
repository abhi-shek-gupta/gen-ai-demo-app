import { ArticleType, BodyType } from "@/types";

export const article1Data: ArticleType = {
	tags: ["generative-ai", "ai"],
	title: "Let AI Entertain You: Increasing User Engagement with Generative AI and Rejection Sampling",
	author: {
		name: "Jaewon Yang",
		published: "October 17,2023",
		timeToRead: "6 min",
		bio: "Jaewon Yang is a content writer at Capterra, helping small businesses identify the right software for their business needs by analyzing user reviews data for the highest rated products in relevant software categories. Prior to joining Capterra, he worked in insurtech, fintech, and real estate. Specializing in marketing, project, and IT management, Ashish’s works have been featured in MAST magazine and Medium. In his free time, he enjoys working out and playing video games.",
	},
	body: [
		{
			p: "Generative AI (Gen AI) has demonstrated proficiency in content generation but does not consistently guarantee user engagement, mainly for two reasons. First, Gen AI generates content without considering user engagement feedback. While the content may be informative and well-written, it does not always translate to increased user engagement such as clicks. Second, Gen AI-produced content often remains generic and may not always provide the specific information that users seek.",
		},
		{
			p: "Nextdoor is the neighborhood network where neighbors, businesses, and public agencies connect with each other. Nextdoor is building innovative solutions to enhance the user engagement with AI-Generated Content (AIGC). This post outlines our approach to improving user engagement through user feedback, specifically focusing on Notification email subject lines. Our solutions employ Rejection sampling [1], a technique used in reinforcement learning, to boost the engagement metrics. We believe our work presents a general framework to drive user engagement with AIGC, particularly when off-the-shelf Generative AI falls short in producing engaging content. To the best of our knowledge, this marks an early milestone in the industry’s successful use of AIGC to enhance user engagement.",
		},
		{
			h2: "Introduction",
		},
		{
			p: "At Nextdoor, one of the ways to drive user growth and engagement on platform is through emails. One of the emails we have is called New and Trending notifications, where we send a single post that we think the user might be interested in and want to engage with. As part of sending an email, we need to determine a subject line of the email for the email audiences. Historically, we simply pick the first few words of the post being sent to be the subject line. However, in certain posts, these initial words are often greetings or introductory remarks and may not provide valuable information to the user. In the provided image example below, we observe a simple greeting, “Hello!”",
		},
		{
			image: {
				src: "/figure1.png",
				caption:
					"Figure 1. New and Trending email where we show a single post. Prior to the Gen AI systems we build, we use the first words of the post as the subject line (Life and Mother Nature always find a way!)",
			},
		},
		{
			p: "In this work, we aim to use Generative AI technologies to improve the subject line. With Generative AI, we aim to generate informative and interesting subject lines that will lead to more email opens, clicks and eventually more sessions.",
		},
		{
			p: "Writing a good subject line with Generative AI is challenging because the subject line needs to satisfy the following criteria. First and foremost, the subject line needs to be engaging so that the users want to open the email. To see if ChatGPT API can write engaging subject lines, we tried generating subject lines with ChatGPT API with a small traffic A/B test, and found that the users are less likely to click on emails if we use subject lines made by ChatGPT API (e.g. Table 1). As we show later, we tried to improve the prompts (prompt engineering) but the results were still inferior to the user-generated subjects. This finding implies that Generative AI models are not trained to write the content that is particularly engaging to our users, and we need to guide Generative AI models to increase user engagement.",
		},
		{
			image: {
				src: "/figure2.webp",
				caption:
					"Table 1. Subject line made by ChatGPT API and its CTR. ChatGPT API’s subject line is more informative but looks like a marketing phrase, and produced only 56% clicks compared to the user-generated subject line.",
			},
		},
		{
			p: "Second challenge is that the subject line needs to be authentic. If it reads like a marketing phrase, the email will look like spam. The example in Table 1 “Support backyard chickens in Papillion, NE!” shows this issue.",
		},
		{
			h2: "Proposed Method",
		},
		{
			p: "For every post, we employ the following system to create a subject line. It’s important to mention that we generate a single subject line for each post, without personalization. This decision was made to minimize computational cost. Exploring cost-effective methods for implementing personalized subject lines will be an interesting future work.",
		},
		{
			h2: "Developing Subject Line Generator",
		},
		{
			p: "We use OpenAI API without fine-tuning. In the prompt, we require that OpenAI API extracts the most interesting part of the post without making any change. This way of extracting user content provides multiple benefits: First, it removes hallucinations. Second, it keeps the subject line authentic as OpenAI API does not rewrite the original content. To test the prompt engineering, we A/B tested generator outputs without reward models. We found that asking OpenAI API to extract in the prompt improves Sessions by 3% relatively compared to asking OpenAI API to rewrite the subject line from scratch (See the Results section for the details).",
		},
	],
};
