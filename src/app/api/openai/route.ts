import { NextRequest, NextResponse } from 'next/server';

const openaiApiKey: string | undefined = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {
  console.log('OpenAI ApiKey is required');
  throw new Error('OpenAI ApiKey is required');
}

const handler = async (req: NextRequest) => {
  if (req.method === 'POST') {
    try {
      const body = await req.json();

      if (!body && !body.prompt) {
        return NextResponse.json({ error: 'Request body is missing', status: 400 });
      }

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openaiApiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4', // or 'gpt-3.5-turbo'
          messages: [
            {
              role: 'system',
              content: "Na ovom linku se nalazi moj portfolio https://goransubic.vercel.app/\nKreiraj na engleskom jeziku kompaktan Cover Letter do 1000 karaktera za navedeni opis posla.\nIn signiture put my name."
            },
            {
              role: 'user',
              content: body.prompt
            }],
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        if (data.error?.code === 'invalid_api_key') {
            return NextResponse.json({ error: 'Invalid API Key. Have to check API key.', status: 401 });
        } else {
          return NextResponse.json({ error: data.error?.message || 'An error occurred', status: 401 });
        }
      }

      const dataContent = data.choices[0].message.content;

      return NextResponse.json({
        content: dataContent,
        status: 200
      });
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      return NextResponse.json({ error: 'Internal Server Error', status: 500 });
    }
  } else {
    return NextResponse.json({ error: 'Method Not Allowed', status: 405 });
  }
}

export { handler as POST };