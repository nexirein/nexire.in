import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    const gsUrl = process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL;
    
    if (!gsUrl) {
      throw new Error("Google Apps Script URL is not configured");
    }

    const response = await fetch(gsUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch (err: Error | unknown) {
    const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
    return NextResponse.json({ result: "error", message: errorMessage });
  }
}
