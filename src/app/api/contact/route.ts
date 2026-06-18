import { NextResponse } from "next/server";

const RATE_LIMIT_WINDOW = 60 * 1000;
const MAX_REQUESTS = 3;

const ipRequests = new Map<string, { count: number; resetAt: number }>();

function getRateLimitKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "unknown";
}

function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const entry = ipRequests.get(key);

  if (!entry || now > entry.resetAt) {
    ipRequests.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (entry.count >= MAX_REQUESTS) {
    return false;
  }

  entry.count++;
  return true;
}

export async function POST(request: Request) {
  const rateLimitKey = getRateLimitKey(request);

  if (!checkRateLimit(rateLimitKey)) {
    return NextResponse.json(
      { error: "Too many requests. Try again later." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (typeof name !== "string" || name.length > 100) {
      return NextResponse.json(
        { error: "Invalid name." },
        { status: 400 }
      );
    }

    if (
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    if (typeof message !== "string" || message.length > 5000) {
      return NextResponse.json(
        { error: "Message must be under 5000 characters." },
        { status: 400 }
      );
    }

    console.log(
      `[Contact] From: ${name} <${email}>\nMessage: ${message}`
    );

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }
}
