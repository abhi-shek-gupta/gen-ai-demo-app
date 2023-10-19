// This code is for v4 of the openai package: npmjs.com/package/openai
import { Reviews } from "@/types";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPEN_AI_API_KEY || "",
  dangerouslyAllowBrowser: true,
});

const keyWordAnalyzer = async (content:string) => {
  console.log("welcome to openAI");
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You will be provided with a block of text, and your task is to extract a list of keywords from it.",
        },
        {
          role: "assistant",
          content:
            "Make first letter of each keyword to be uppercase and separate them with comma",
        },
        {
          role: "user",
          content,
        },
      ],
      temperature: 0.5,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    console.log({ response });
    const keyword = response?.choices[0]?.message?.content || "";
    return keyword;
  } catch (error) {
    console.log(error);
    throw new Error("error");
  }
};

const getAllKeywords = async (reviews:Reviews) => {
  const keywordsMap = new Map();
  for (const review of reviews) {
    const keywords = await keyWordAnalyzer(review.content);
    console.log({ keywords });
    const keyArr = keywords ? keywords.split(",") : [];
    for (const keyword of keyArr) {
      const cleanedKeyword = keyword.trim();
      if (keywordsMap.has(keyword)) {
        keywordsMap.set(keyword, keywordsMap.get(keyword) + 1);
      } else {
        keywordsMap.set(keyword,1);
      }
    }
  }
  // Sort keywords by frequency
  const sortedKeywords = Array.from(keywordsMap).sort((a, b) => b[1] - a[1]);
  // Get the top 10 keywords
  const top10Keywords = sortedKeywords
    .slice(0, 10)
    .map((keyword) => keyword[0]);
  return top10Keywords;
};

export default getAllKeywords;
