# 🚀 Cosmic Dev Portfolio — Krishna More

A space-themed, animated developer portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- **Space-themed design** — star canvas, neon cyan/purple accents, dark glass cards
- **Framer Motion animations** — smooth staggered fade-ups, layout transitions, hover effects
- **Nodemailer contact form** — sends email via Gmail SMTP + auto-reply to sender
- **Dynamic projects** — filter by Full Stack / DevOps / AI, full detail pages with architecture diagrams
- **Fully responsive** — mobile-first, works on all screen sizes
- **SEO ready** — metadata on every page, OG tags

## 📁 Project Structure

```
cosmic-portfolio/
├── app/
│   ├── layout.tsx          # Root layout (Navbar, StarCanvas, fonts)
│   ├── page.tsx            # Landing page (Hero, Projects, Skills, CTA)
│   ├── projects/
│   │   ├── page.tsx        # All projects + filter tabs
│   │   └── [slug]/page.tsx # Project detail (arch diagram, features, challenges)
│   ├── about/page.tsx      # Journey timeline, skills, certifications
│   ├── contact/page.tsx    # Contact form + social links
│   ├── resume/page.tsx     # Inline resume + PDF download
│   └── api/contact/route.ts # Nodemailer API endpoint
├── components/
│   ├── StarCanvas.tsx      # Animated twinkling star background
│   ├── Navbar.tsx          # Fixed nav with scroll blur + mobile menu
│   ├── ProjectCard.tsx     # Reusable project card
│   ├── SectionHeader.tsx   # "01 / Title ——" section headers
│   └── ContactForm.tsx     # Form with validation + success/error states
├── data/
│   └── projects.ts         # All project data (add more here)
└── public/
    └── Krishna_More_Resume.pdf  ← ADD YOUR RESUME PDF HERE
```

## 🛠️ Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure email (Nodemailer)

Copy the env example and fill in your Gmail credentials:

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=krishna.more8200@gmail.com
SMTP_PASS=your_gmail_app_password
SMTP_TO=krishna.more8200@gmail.com
```

**How to get a Gmail App Password:**
1. Enable 2-Factor Authentication on your Google account
2. Go to: Google Account → Security → 2-Step Verification → App Passwords
3. Create a new App Password for "Mail"
4. Paste it as `SMTP_PASS`

### 3. Add your resume PDF

Place your resume PDF at:
```
public/Krishna_More_Resume.pdf
```

### 4. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🚀 Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Add environment variables in the Vercel dashboard (Settings → Environment Variables).

## 🎨 Customization

### Add a new project
Edit `data/projects.ts` — add a new object to the `projects` array with:
- `slug`, `title`, `tag`, `category` (`ai` | `fullstack` | `devops`)
- `description`, `longDescription`, `techStack`
- `github`, `live`, `features`, `challenges`, `architecture`

### Change colors
Edit `tailwind.config.ts` or `app/globals.css` — update `--cyan` and `--purple` CSS variables.

### Change fonts
Edit `app/layout.tsx` — swap `Orbitron` / `Sora` with any Google Font.

## 📦 Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Email | Nodemailer (Gmail SMTP) |
| Forms | React Hook Form |
| Icons | Lucide React |
| Fonts | Orbitron + Sora (Google Fonts) |
| Deploy | Vercel |

---

Built by Krishna More · [LinkedIn](https://www.linkedin.com/in/krishnamore19/) · [GitHub](https://github.com/KrishnaMore19)
