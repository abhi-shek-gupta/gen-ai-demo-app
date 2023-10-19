import { ReviewType } from "@/types";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPEN_AI_API_KEY || "",
  dangerouslyAllowBrowser: true,
});

const fetchReviewsSummary = async (reviews:ReviewType[] ) => {
  console.log("Generating Reviews Summary");
const allReviews= reviews.map(({content})=>content);
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "Provide summarize review on basis of the array of reviews and make the summary in less than 125 words and show positives and negatives separately in bullet points",
        },
        {
          role: "user",
          content: JSON.stringify(allReviews),
        },
      ],
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    console.log('get reviews summary')
    console.log({ response });
    const keyword = response?.choices[0]?.message?.content || "";
    return keyword;
  } catch (error) {
    console.log(error);
    throw new Error("error");
  }
};

export default fetchReviewsSummary;
