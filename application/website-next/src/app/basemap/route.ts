import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch(
    `https://tiles.stadiamaps.com/styles/alidade_smooth_dark/rendered.json?api_key=${process.env.NEXT_PUBLIC_STADIA_KEY}`,
  );
  return NextResponse.json(await res.json());
}
