import { article1Data } from "./article1";


const blogContent = () => {
  const result: string[] = [];
  article1Data.body.map((e) => {
    if (e.p) result.push(e.p);
  });
  return result.join();
};

const finalData = {
  reviewSummary: `Overall, the reviews for the article on generative AI and rejection sampling are positive. The article is praised for its informative content and its potential to transform user engagement in the entertainment industry. Readers appreciate the depth of information and the clear explanations provided. However, there are some criticisms as well. Some reviewers find the article too technical and lacking practical examples for better understanding. Others feel that the article could have explored a wider range of use cases beyond entertainment. Overall, the article is seen as valuable and informative, but it is not considered groundbreaking by those already familiar with AI.

    Positive:
    - Provides valuable information on generative AI and rejection sampling
    - Offers insights on how these techniques can enhance user engagement
    - Well-written and informative
    - Presents practical examples and real-world applications
    
    Negative:
    - Might be too technical for the average reader
    - Lacks practical examples and real-world case studies
    - Does not explore a wide range of use cases beyond entertainment
    - Not considered groundbreaking for those already familiar with AI`,
  keywords:
    [
      "generative AI",
      "user engagement",
      "content personalization",
      "game development",
      "entertainment industry",
      "knowledge",
      "platforms",
      "future",
      "information",
      "explanations",
      "layman's terms",
      "technical",
      "average reader",
    ],
    blogContent : blogContent(),
    blogSummary: `- Generative AI (Gen AI) lacks user engagement due to a lack of user feedback and generic content generation.
    - Nextdoor is using AI-Generated Content (AIGC) to enhance user engagement through user feedback and the example of notification email subject lines.
    - They are using Rejection sampling to boost engagement metrics and improve user engagement with AIGC.
    - Currently, Nextdoor picks the first few words of a post as the subject line, but this may not provide valuable information to the user.
    - They aim to use Generative AI to generate informative and interesting subject lines that will lead to increased email opens, clicks, and sessions.
    - However, generating engaging subject lines with Generative AI is challenging, as the models are not trained to write content that is particularly engaging to users.
    - The subject lines also need to be authentic and not read like marketing phrases.
    - Nextdoor uses the OpenAI API without fine-tuning to extract the most interesting part of each post for the subject line, without making any changes.
    - They have conducted A/B tests to improve prompt engineering and found that extracting user-generated content in the prompt improves sessions by 3% relatively compared to rewriting the subject line from scratch.`
};

export default finalData;