// app/api/contact/route.ts
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  const { firstName, lastName, email, company, inquiryType, message } = await request.json()

  // Configure nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // Use your email service (e.g., Gmail, Outlook)
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASSWORD, // Your email password or app password
    },
  })

  // Email options
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender email address
    to: "a03008164732@gmail..com", // Domain's email address
    subject: `New Inquiry: ${inquiryType}`,
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Company: ${company}
      Inquiry Type: ${inquiryType}
      Message: ${message}
    `,
  }

  try {
    // Send the email
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ message: "Failed to send email." }, { status: 500 })
  }
}