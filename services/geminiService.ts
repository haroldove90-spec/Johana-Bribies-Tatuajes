
import { GoogleGenAI, Type } from "@google/genai";
import type { TattooIdea } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const generateTattooIdeas = async (prompt: string): Promise<TattooIdea[]> => {
  if (!prompt.trim()) {
    throw new Error("Prompt cannot be empty.");
  }
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Act as a creative tattoo consultant. A client wants a tattoo based on the following idea: "${prompt}". Generate 3 distinct and creative tattoo concepts based on this. For each concept, provide a descriptive title, a detailed visual description, and suggest a suitable style (e.g., neo-traditional, blackwork, watercolor).`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: {
                type: Type.STRING,
                description: 'A short, creative title for the tattoo concept.',
              },
              description: {
                type: Type.STRING,
                description: 'A detailed visual description of the tattoo design.',
              },
              style: {
                type: Type.STRING,
                description: 'The recommended tattoo style for this concept (e.g., American Traditional, Fineline, Surrealism).',
              },
            },
            required: ["title", "description", "style"],
          },
        },
      },
    });

    const jsonText = response.text.trim();
    const ideas: TattooIdea[] = JSON.parse(jsonText);
    return ideas;

  } catch (error) {
    console.error("Error generating tattoo ideas:", error);
    throw new Error("Failed to generate ideas. The model may be unavailable or the request was invalid.");
  }
};
