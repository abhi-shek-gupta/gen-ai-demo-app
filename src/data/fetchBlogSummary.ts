import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPEN_AI_API_KEY || "",
  dangerouslyAllowBrowser: true,
});

const getSummary = async (content: string) => {
  console.log("welcome to openAI Blog Summary");
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "Summarize the give blog content and in less than 150 words, and provide bullet points",
        },
        {
          role: "user",
          content,
        },
      ],
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    console.log("blog summary")
    console.log({ response });
    const keyword = response?.choices[0]?.message?.content || "";
    return keyword;
  } catch (error) {
    console.log(error);
    throw new Error("error");
  }
};

export default getSummary;
