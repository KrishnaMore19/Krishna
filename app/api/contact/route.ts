import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    // Create transporter — using Gmail SMTP
    // Configure .env.local with your Gmail App Password
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email to Krishna (you receive it)
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO || 'krishna.more8200@gmail.com',
      replyTo: email,
      subject: `[Portfolio] ${subject} — from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', sans-serif; background: #03040F; color: #E8EAFF; margin: 0; padding: 0; }
            .wrapper { max-width: 560px; margin: 0 auto; padding: 40px 20px; }
            .header { background: linear-gradient(135deg, #00E5FF22, #9D4EDD22); border: 0.5px solid rgba(0,229,255,0.3); border-radius: 16px; padding: 28px; margin-bottom: 24px; }
            .logo { font-family: monospace; font-size: 20px; font-weight: 900; letter-spacing: 3px; background: linear-gradient(135deg, #00E5FF, #9D4EDD); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
            .card { background: rgba(255,255,255,0.04); border: 0.5px solid rgba(0,229,255,0.15); border-radius: 12px; padding: 20px; margin-bottom: 16px; }
            .label { font-size: 11px; letter-spacing: 2px; color: #00E5FF; text-transform: uppercase; margin-bottom: 6px; }
            .value { font-size: 15px; color: #E8EAFF; }
            .message-box { background: rgba(157,78,221,0.06); border: 0.5px solid rgba(157,78,221,0.2); border-radius: 10px; padding: 16px; color: #E8EAFF; font-size: 14px; line-height: 1.7; white-space: pre-wrap; }
            .footer { text-align: center; font-size: 12px; color: #7B82A8; margin-top: 24px; }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="header">
              <div class="logo">KM.DEV</div>
              <p style="margin: 10px 0 0; color: #7B82A8; font-size: 13px;">New portfolio contact received</p>
            </div>
            <div class="card">
              <div class="label">From</div>
              <div class="value">${name}</div>
            </div>
            <div class="card">
              <div class="label">Email</div>
              <div class="value"><a href="mailto:${email}" style="color: #00E5FF;">${email}</a></div>
            </div>
            <div class="card">
              <div class="label">Subject</div>
              <div class="value">${subject}</div>
            </div>
            <div class="card">
              <div class="label">Message</div>
              <div class="message-box">${message}</div>
            </div>
            <div class="footer">
              Sent from your cosmic portfolio · <a href="mailto:${email}" style="color: #00E5FF;">Reply directly</a>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    // Auto-reply to sender
    await transporter.sendMail({
      from: `"Krishna More" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Got your message, ${name.split(' ')[0]}! — Krishna More`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', sans-serif; background: #03040F; color: #E8EAFF; margin: 0; padding: 0; }
            .wrapper { max-width: 560px; margin: 0 auto; padding: 40px 20px; }
            .header { background: linear-gradient(135deg, #00E5FF22, #9D4EDD22); border: 0.5px solid rgba(0,229,255,0.3); border-radius: 16px; padding: 32px; text-align: center; margin-bottom: 24px; }
            .logo { font-family: monospace; font-size: 22px; font-weight: 900; letter-spacing: 3px; background: linear-gradient(135deg, #00E5FF, #9D4EDD); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
            .body { background: rgba(255,255,255,0.04); border: 0.5px solid rgba(0,229,255,0.15); border-radius: 12px; padding: 28px; margin-bottom: 16px; line-height: 1.7; font-size: 15px; color: #E8EAFF; }
            .highlight { color: #00E5FF; font-weight: 600; }
            .links { display: flex; gap: 12px; margin-top: 20px; flex-wrap: wrap; }
            .link-btn { background: rgba(0,229,255,0.08); border: 0.5px solid rgba(0,229,255,0.25); border-radius: 8px; padding: 8px 16px; color: #00E5FF; text-decoration: none; font-size: 13px; }
            .footer { text-align: center; font-size: 12px; color: #7B82A8; margin-top: 24px; }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="header">
              <div class="logo">KM.DEV</div>
              <p style="margin: 12px 0 0; color: #7B82A8; font-size: 13px;">Full Stack · DevOps · AI Developer</p>
            </div>
            <div class="body">
              <p>Hey <span class="highlight">${name.split(' ')[0]}</span>,</p>
              <p style="margin-top: 14px;">Thanks for reaching out! I've received your message about <em>"${subject}"</em> and will get back to you within 24 hours.</p>
              <p style="margin-top: 14px;">While you wait, feel free to check out my projects or connect with me:</p>
              <div class="links">
                <a href="https://github.com/KrishnaMore19" class="link-btn">GitHub</a>
                <a href="https://www.linkedin.com/in/krishnamore19/" class="link-btn">LinkedIn</a>
              </div>
            </div>
            <div class="footer">
              Krishna More · krishna.more8200@gmail.com · +91 8200640037
            </div>
          </div>
        </body>
        </html>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Email error:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
