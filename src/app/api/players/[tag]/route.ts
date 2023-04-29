import { NextResponse } from "next/server";

import { BRAWL_STARS_API_ENDPOINT } from "../../../../app-constants";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { tag: string };
  }
) {
  // const { searchParams } = new URL(request.url);
  // const tag = searchParams.get("tag");

  const apiUri = `${BRAWL_STARS_API_ENDPOINT}/players/%23${params.tag}`;

  const res = await fetch(apiUri, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_BRAWL_STARS_TOKEN}`,
    },
  });

  const data = await res.json();

  return NextResponse.json({ data });
}
