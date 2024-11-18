import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your email provider
      auth: {
        user: 'wsquaredigital@gmail.com',
        pass: 'bdid agzt nxce bmom',
      },
    });

    const mailOptions = {
      from: email,
      to: 'awogbuyitimothy@gmail.com', // the recipient's email address
      // to: 'team@wsquare.co.uk', // the recipient's email address
      subject: `New message from ${name}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error sending email', details: error.message }), { status: 500 });
  }
}
