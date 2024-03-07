import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { fullName, email, message } = req.body;

    // Create a Nodemailer transporter with Gmail SMTP details
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'opaliedc@gmail.com',
        pass: 'nfdl nbww agyc lllw',
      },
    });

    // Define the email message
    const mailOptions = {
      from: 'opaliedc@gmail.com',
      to: ['sareenakk.snmimtcse@gmail.com', 'jesna.snmimtce@gmail.com', 'chaithanyaraj.snmimtece@gmail.com'],
      subject: 'New Submission from Opal Website - Women\'s Safety Alert',
      html: `
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
              }
              .container {
                background-color: #ffffff;
                border-radius: 10px;
                padding: 20px;
              }
              h2 {
                color: #ff3366;
                font-size: 24px;
                margin-bottom: 20px;
              }
              p {
                font-size: 16px;
              }
              .button {
                background-color: #ff3366;
                color: #ffffff;
                text-decoration: none;
                padding: 10px 20px;
                border-radius: 5px;
                font-size: 16px;
                display: inline-block;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h2>New Submission from Opal Website</h2>
              <p>A new submission has been made from the Opal dashboard regarding a safety concern.</p>
              <p>Please check immediately to ensure the safety and well-being of the individual.</p>
              <div style="text-align: center; margin-top: 30px;">
                <a href="#" class="button">Please Check Submission</a>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    try {
      // Send the email
      const info = await transporter.sendMail(mailOptions);
      
      console.log("Message sent: %s", info.messageId);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
