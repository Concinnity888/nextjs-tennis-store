import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export function GET() {
  revalidateTag('getTop10');

  return NextResponse.json({ status: 200 });
}
