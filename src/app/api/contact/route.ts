import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";
import { sendInquiryEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    
    const { name, email, phone, company, subject, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { ok: false, error: "Name and email are required." },
        { status: 400 }
      );
    }

    const enquiry = await Enquiry.create({
      name,
      email,
      phone,
      company,
      subject,
      message,
    });

    try {
      await sendInquiryEmail({ name, email, phone, company, subject, message });
    } catch (mailErr) {
      console.error("Email notification failed", mailErr);
      // We don't fail the request if email fails, as the inquiry is saved
    }

    return NextResponse.json({ ok: true, data: enquiry });
  } catch (err) {
    console.error("contact api error", err);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}
