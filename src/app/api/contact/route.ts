import { NextResponse } from "next/server";
import { db } from "@/db";
import { enquiries } from "@/db/schema";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const phone = body?.phone ? String(body.phone).trim() : null;
    const company = body?.company ? String(body.company).trim() : null;
    const message = body?.message ? String(body.message).trim() : null;

    if (!name || !email) {
      return NextResponse.json(
        { ok: false, error: "Name and email are required." },
        { status: 400 }
      );
    }

    await db.insert(enquiries).values({
      name,
      email,
      phone,
      company,
      message,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("contact api error", err);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}
