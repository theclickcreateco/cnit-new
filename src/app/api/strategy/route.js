import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const data = await request.json();
    const { url, firstName, lastName, email, budget, bottleneck } = data;

    // Create a Nodemailer transporter.
    // Provide your real SMTP credentials via environment variables.
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.example.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER || "user",
        pass: process.env.SMTP_PASS || "pass",
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM || '"Strategy Team" <noreply@cnitsolutions.com>',
      to: "growth@cnitsolutions.com",
      subject: `New Strategy Application from ${firstName} ${lastName}`,
      text: `
Name: ${firstName} ${lastName}
Corporate Email: ${email}
Target Website URL: ${url}
Monthly Marketing Budget: ${budget}

Primary Growth Bottleneck:
${bottleneck}
      `,
      html: `
        <h2 style="color: #0F172A;">New Strategy Application Received</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #E2E8F0;"><strong>Name:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #E2E8F0;">${firstName} ${lastName}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #E2E8F0;"><strong>Corporate Email:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #E2E8F0;">${email}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #E2E8F0;"><strong>Target Website URL:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #E2E8F0;">${url}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #E2E8F0;"><strong>Marketing Budget:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #E2E8F0;">${budget}</td></tr>
        </table>
        <h3 style="color: #0F172A; margin-top: 24px;">Primary Growth Bottleneck:</h3>
        <p style="background-color: #F8FAFC; padding: 16px; border-radius: 4px; border: 1px solid #E2E8F0;">${bottleneck}</p>
      `,
    };

    // If SMTP credentials are not provided, simulate sending for development/testing
    if (!process.env.SMTP_HOST) {
      console.log("=========================================");
      console.log("Mock Email Sent (No SMTP_HOST configured)");
      console.log("To: growth@cnitsolutions.com");
      console.log("Subject:", mailOptions.subject);
      console.log("Body:");
      console.log(mailOptions.text);
      console.log("=========================================");
      
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } else {
      await transporter.sendMail(mailOptions);
    }

    return new Response(JSON.stringify({ success: true, message: "Email sent successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ success: false, error: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
