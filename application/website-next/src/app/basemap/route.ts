import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const key = process.env.STADIA_KEY;
  if (!key) {
    return NextResponse.json({ error: 'STADIA_KEY is not configured' }, { status: 500 });
  }

  try {
    const res = await fetch(
      `https://tiles.stadiamaps.com/styles/alidade_smooth_dark/rendered.json?api_key=${key}`,
      { cache: 'no-store' },
    );
    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to load basemap' }, { status: res.status });
    }
    return NextResponse.json(await res.json());
  } catch {
    return NextResponse.json({ error: 'Failed to load basemap' }, { status: 502 });
  }
}
