// This file is under src/ai/flows/generate-ai-project-insights.ts
'use server';
/**
 * @fileOverview Generates AI-driven insights for projects in Roxana Rolón's portfolio.
 *
 * - generateAiProjectInsights - A function to generate insights for a given project description.
 * - AiProjectInsightsInput - The input type for the generateAiProjectInsights function.
 * - AiProjectInsightsOutput - The return type for the generateAiProjectInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiProjectInsightsInputSchema = z.object({
  projectDescription: z.string().describe('The description of the AI project.'),
});
export type AiProjectInsightsInput = z.infer<typeof AiProjectInsightsInputSchema>;

const AiProjectInsightsOutputSchema = z.object({
  insight: z.string().describe('AI-generated insight or demonstration of the project.'),
});
export type AiProjectInsightsOutput = z.infer<typeof AiProjectInsightsOutputSchema>;

export async function generateAiProjectInsights(input: AiProjectInsightsInput): Promise<AiProjectInsightsOutput> {
  return generateAiProjectInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiProjectInsightsPrompt',
  input: {schema: AiProjectInsightsInputSchema},
  output: {schema: AiProjectInsightsOutputSchema},
  prompt: `You are an AI expert that can generate short and compelling insights or demonstrations for AI projects. 

  Given the following project description, create an insight that highlights the project's value and Roxana's expertise:

  Project Description: {{{projectDescription}}}
  \n  Insight: `,
});

const generateAiProjectInsightsFlow = ai.defineFlow(
  {
    name: 'generateAiProjectInsightsFlow',
    inputSchema: AiProjectInsightsInputSchema,
    outputSchema: AiProjectInsightsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
