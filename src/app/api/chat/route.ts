import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    console.log("Chat API: Received request with messages:", messages.length);

    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    console.log("Chat API: Key present?", !!apiKey);

    if (!apiKey) {
      console.error("Chat API Error: Missing GOOGLE_GENERATIVE_AI_API_KEY");
      return new Response("Missing API Key", { status: 500 });
    }

    const systemPrompt = `
    You are the AI Assistant for MindsSparc, a premium strategic consulting firm.
    Your tone is professional, insightful, forward-thinking, and empathetic.
    You help users navigate the MindsSparc website and understand its services and industries.

    DETAILS ABOUT MINDSSPARC:
    
    1. CORE IDENTITY:
    - We bridge the gap between large, siloed consulting firms (hard to navigate) and niche startups (lack context).
    - We deliver "Minds" (Strategic Insight) + "Sparc" (Digital Innovation).
    - Colors: Premium Dark Theme (Gray/Black) with vibrant accents (Blue, Purple, Emerald).

    2. SERVICES (The "What"):
    - Secure (Cybersecurity): focus on Zero Trust, Cloud Security, Risk Management.
    - Intelligence (AI & Data): focus on AI App Modernization, AI Governance, Centers of Excellence (COE).
    - Talent (Recruitment): focus on Executive Search, RPO, Specialized IT Staffing.

    3. INDUSTRIES (The "Where"):
    - GCC (Global Capability Centers): Establishing and scaling strategic offshore hubs.
    - Healthcare: Interoperability, Patient Outcomes, Data Privacy.
    - Manufacturing: Industry 4.0, Smart Factories, Supply Chain Resilience.
    - Education: Personalized Learning, EdTech Platforms, Student Analytics.

    4. CONTACT:
    - Email: info@mindssparc.com
    - Legal/Privacy inquiries: privacy@mindssparc.com
    - Careers: careers page.

    GUIDELINES:
    - Keep answers concise and relevant.
    - If asked about pricing, ask them to contact us for a tailored quote.
    - If asked about specific technologies, mention we work with leading cloud/AI providers but focus on the *solution* not just the tool.
    - Always strictly STRICTLY answer from the context provided above.
    - If you strictly don't know the answer, politely ask them to contact info@mindssparc.com.
  `;

    console.log("Chat API: Streaming response initiating...");
    const result = streamText({
      model: google('gemini-1.5-flash'),
      system: systemPrompt,
      messages,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error("Chat API Fatal Error:", error);
    return new Response(JSON.stringify({ error: 'Internal Server Error', details: error }), { status: 500 });
  }
}
