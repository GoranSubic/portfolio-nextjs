import { NextResponse } from "next/server";
import dotenv from 'dotenv';
import { RestliClient } from 'linkedin-api-client';

dotenv.config();

export async function GET() {
    const accessToken: string | undefined = process.env.LINKEDIN_ACCESS_TOKEN;

    if (!accessToken) {
        return NextResponse.json({ error: 'Access token is required' }, { status: 500 });
    }

    try {
        const restliClient = new RestliClient();
        restliClient.setDebugParams({ enabled: true });

        const response = await restliClient.get({
            resourcePath: '/userinfo',
            accessToken
        });

        if (response.status !== 200) {
            throw new Error('Failed to fetch LinkedIn recommendations');
        }

        const data = response.data;
        return NextResponse.json(data);
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message });
        } else {
            return NextResponse.json({ error: 'An unknown error occurred' });
        }
    }
}

export async function POST() {
    // Implement POST method logic here
    NextResponse.json({ message: 'POST method not implemented' }, { status: 200 });
}

export async function PUT() {
    // Implement PUT method logic here
    NextResponse.json({ message: 'PUT method not implemented' }, { status: 200 });
}

export async function DELETE() {
    // Implement DELETE method logic here
    NextResponse.json({ message: 'DELETE method not implemented' }, { status: 200 });
}

// const LINKEDIN_API_URL = 'https://api.linkedin.com/v2/me';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     const accessToken = process.env.LINKEDIN_ACCESS_TOKEN;
//     console.log('accessToken is: ', accessToken);

//     if (!accessToken) {
//         return res.status(400).json({ error: 'Access token is required' });
//     }

//     // const response = await fetch(`${LINKEDIN_API_URL}`, {
//     //     headers: {
//     //         Authorization: `Bearer ${accessToken}`,
//     //     },
//     // });
// }