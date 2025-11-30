import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        // Create transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: 'kuldeepmaurya4296@gmail.com',
                pass: 'txex tacr cjmj emho', // App password from .env
            },
        });

        // Send email
        await transporter.sendMail({
            from: 'kuldeepmaurya4296@gmail.com',  // always your email
            to: 'kuldeepmaurya4296@gmail.com',    // receive email
            replyTo: email,              // user can be replied to directly
            subject: `📬 New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
          <h2 style="color: #4F46E5;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br/>${message}</p>
          <hr />
          <p style="font-size: 12px; color: #888;">This email was sent from your website contact form.</p>
        </div>
      `,
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error("Email Error:", error.message);
        return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
    }
}
