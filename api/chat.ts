import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
    req: VercelRequest,
    res: VercelResponse
) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Get API key from environment variable
    const API_KEY = process.env.GEMINI_API_KEY;

    if (!API_KEY) {
        console.error('GEMINI_API_KEY is not set');
        return res.status(500).json({ error: 'Server configuration error' });
    }

    try {
        const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${API_KEY}`;

        // Forward the request to Gemini API
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req.body),
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('Gemini API error:', response.status, data);
            return res.status(response.status).json({
                error: 'Gemini API error',
                details: data,
                message: data.error?.message || `API returned status ${response.status}`,
            });
        }

        // Log successful response for debugging
        console.log('Gemini API success:', {
            hasCandidates: !!data.candidates,
            candidateCount: data.candidates?.length || 0
        });

        // Return the response
        return res.status(200).json(data);
    } catch (error) {
        console.error('Error calling Gemini API:', error);
        return res.status(500).json({
            error: 'Failed to process request',
            message: error instanceof Error ? error.message : 'Unknown error',
        });
    }
}
