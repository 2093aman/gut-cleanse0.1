// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { to, subject, text } = req.body;

    
    console.log("Request Body:", req.body);

    // Create a transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp-mail.outlook.com', 
      port: 587, 
      secure: false, 
      auth: {
        user: 'webmaster@hopechc.org',
        pass: 'C$073121745911ah',
      },
      tls: {
        rejectUnauthorized: false, 
      }
    });
    console.log("Transporter Created:", transporter);

    try {
      // Send the email
      let info = await transporter.sendMail({
        from: 'webmaster@hopechc.org', 
        to: 'webmaster@hopechc.org', 
        subject: subject, 
        text: text, 
      });

      console.log("Message Sent: %s", info.messageId); 
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error("Error Sending Email:", error); 
      res.status(500).json({ message: 'Error sending email', error: error.message });
    }
  } else {
    // Only allow POST requests
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
