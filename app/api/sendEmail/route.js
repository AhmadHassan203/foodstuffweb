import nodemailer from "nodemailer";

export async function POST(req) {
  // Parse the request body
  const { firstName, lastName, email, company, inquiryType, message } = await req.json();

  // Log the received data for debugging
  console.log("Received form data:", { firstName, lastName, email, company, inquiryType, message });

  // Log environment variables for debugging
  console.log("Environment Variables:", {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD ? "***" : "Not set", // Mask the password for security
  });

  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: "gmail", // Use 'gmail' for Gmail
    auth: {
      user: process.env.EMAIL_USER, // Your email address from .env.local
      pass: process.env.EMAIL_PASSWORD, // Your email password or app-specific password from .env.local
    },
  });

  // Email content
  const mailOptions = {
    from: "a03008164732@gmail.com", // Recipient email address
    to: process.env.EMAIL_USER, // Sender email address
    subject: `New Inquiry: ${inquiryType}`, // Email subject
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Company: ${company}
      Inquiry Type: ${inquiryType}
      Message: ${message}
    `, // Email body
  };

  try {
    // Send the email
    console.log("Attempting to send email...");
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
    return new Response(JSON.stringify({ message: "Email sent successfully!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // Log the error and return a 500 response
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Failed to send email." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}