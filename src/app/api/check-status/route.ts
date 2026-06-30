import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const statusUrl = searchParams.get('url');

  if (!statusUrl) {
    return NextResponse.json({ error: 'Missing url parameter' }, { status: 400 });
  }

  try {
    const res = await fetch(statusUrl, {
      headers: {
        Authorization: `Key ${process.env.FAL_API_KEY}`,
      },
    });
    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch status' }, { status: 500 });
  }
}
