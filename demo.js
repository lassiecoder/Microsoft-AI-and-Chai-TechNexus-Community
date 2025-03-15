import { AzureOpenAI } from "openai";
import * as dotenv from "dotenv";

dotenv.config();

// Create client instance
const client = new AzureOpenAI({
  apiKey: process.env.AZURE_OPENAI_API_KEY,
  endpoint: process.env.AZURE_OPENAI_ENDPOINT,
  deployment: process.env.AZURE_OPENAI_MODEL,
  apiVersion: process.env.API_VERSION
});

const prompt = "explain azure openai to 5 year old in 20 words";

async function runDemo() {
  try {
    console.log("--- Azure OpenAI Demo ---");

    const completion = await client.chat.completions.create({
      model: process.env.AZURE_OPENAI_MODEL,
      messages: [
        {
          role: "user",
          content: prompt
        }
      ]
    });

    console.log("\n\nAzure OpenAI Prompt:", prompt);
    console.log(
      "\n Azure OpenAI Response:",
      completion.choices[0].message.content,
      "\n\n"
    );
    console.log("\n--- Demo Complete ---");
  } catch (error) {
    console.error("Demo failed:", error);
  }
}

// Run the demo
runDemo();
