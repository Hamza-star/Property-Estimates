import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const company = formData.get("company") as string;
    const email = formData.get("email") as string;
    const cell = formData.get("cell") as string;
    const url = formData.get("url") as string;
    const type = formData.get("type") as string;

    const files = formData.getAll("files") as File[];

    // Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Convert uploaded files into attachments
    const attachments = await Promise.all(
      files.map(async (file) => {
        const buffer = Buffer.from(await file.arrayBuffer());
        return {
          filename: file.name,
          content: buffer,
        };
      })
    );

    // Send mail
    await transporter.sendMail({
      from: `"Construct Estimates" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // apni Gmail
      subject: "📩 New Quote Request",
      text: `
        New Estimate Request Received:

        Name: ${name}
        Company: ${company}
        Email: ${email}
        Cell: ${cell}
        Plans URL: ${url}
        Type: ${type}
      `,
      attachments,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { success: false, message: "Email send failed!" },
      { status: 500 }
    );
  }
}
