# vert-app
# vert-app 🚀

A modern, full-stack prediction market and SaaS starter built for speed, scalability, and real-world impact.

---

## 🌟 Overview

**vert-app** is a comprehensive platform merging a robust **Cairo-based prediction market** backend (StarkNet) with a polished, production-ready **Next.js SaaS frontend**. Tailored for sports betting, commodity speculation, and options contracts, it’s designed for the Kenyan market with crypto-native payments (USDC/USDT) and best-in-class tech.

---

## ✨ Roadmap  

- **Prediction Market Smart Contracts**: Sports, commodities, options — all gasless, secure, and oracle-driven.
- **Authentication & User Management**: Better Auth, Google OAuth, session persistence, profile images, multi-provider support.
- **Subscription & Billing**: Polar.sh integration, two-tier pricing, real-time webhook events, customer self-service portal.
- **AI-powered Chatbot**: Built-in OpenAI chatbot, markdown rendering, multi-step conversations.
- **Modern UI/UX**: Tailwind CSS v4, shadcn/ui, Radix UI primitives, dark/light theme, responsive & mobile-first.
- **Database & Storage**: Neon PostgreSQL, Drizzle ORM, Cloudflare R2 with drag & drop uploads.
- **Analytics & Monitoring**: PostHog integration, custom event tracking, user insights.
- **Charts & Live Data**: Commodity price charts, live match tracking, betting slip UI.

---

## 🚀 Tech Stack

- **Frontend**: Next.js 15.3.1 (TypeScript, Tailwind CSS, shadcn/ui)
- **Backend Contracts**: Cairo (StarkNet), modular architecture (`balance`, `teams`, `matches`, `bets`, `users`, `payments`)
- **Database**: vps hosted Neon PostgreSQL with Drizzle ORM
- **Authentication**: Better Auth v1.2.8
- **Payments**: Polar.sh[pending smart contract integration]
- **AI**: OpenAI SDK
- **Storage**: Cloudflare R2
- **Analytics**: PostHog
- **Deployment**: Vercel (frontend), sc: sepolia

---

## 📁 Project Structure

```
├── frontend/
│   ├── app/
│   │   ├── (auth)/         # Authentication pages
│   │   ├── dashboard/      # Protected dashboard, chat, upload, payment, settings
│   │   ├── pricing/        # Pricing page
│   │   └── api/            # API routes
│   ├── components/
│   │   ├── ui/             # UI library
│   │   └── homepage/       # Landing page
│   ├── lib/                # Auth, subscription, upload utilities
│   └── db/                 # Drizzle schema & connection
├── contracts/
│   ├── src/                # Cairo contracts (`lib.cairo`)
│   └── instructions.txt    # Architecture, requirements, diagrams
└── README.md               # (This file)
```

---

## 🛠️ Quick Start

### Prerequisites
- Node.js 22.18.0+
- PostgreSQL, supabase self hosted
- Polar.sh account
- OpenAI API key
- Google OAuth credentials

### Installation

```bash
# 1. Clone
git clone <repository-url>
cd vert-app

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Fill out: DATABASE_URL, POLAR_ACCESS_TOKEN, OPENAI_API_KEY, etc.

# 4. Database setup
npx drizzle-kit generate
npx drizzle-kit push

# 5. Polar.sh: Configure products & webhook endpoints

# 6. Start development
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

---

## 🎯 Core Modules & Features

- **Prediction Market Contract** (Cairo): Modular (bets, teams, payments), gasless betting, DAO result dispute,ultimate settlement layer.
- **Bet Slip Interface**: 1-click betting, AA wallet integration, live match widgets.
- **Commodity Charts**: Custom Built Dashboard for price visualizations.
- **AI Chatbot Dashboard**: Based on local context, reliable.
- **File Upload System**: Drag & drop, progress feedback, image gallery, easy sharing.
- **Analytics**: Custom dashboard, PostHog, error tracking.

---

## 🔧 Customization

- **Add Features**: Extend in `components/`, `app/api/`, update `db/schema.ts`, run migrations.
- **Styling**: Edit `app/globals.css`, use Tailwind, customize in `tailwind.config.ts`.
- **Authentication**: Configure providers in `lib/auth/auth.ts`, add OAuth, update schema.

---

## 🚀 Deployment

### Vercel frontend, smart contract: starknet sepolia
1. Connect repo to Vercel
2. Set environment variables
3. Push to deploy

### Manual
```bash
npm run build
npm start
```

---

## 📚 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [Better Auth](https://better-auth.com)
- [Polar.sh](https://docs.polar.sh)
- [Drizzle ORM](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

## 📄 License

MIT License

---

## 🤝 Contributing

All contributions and PRs welcome!

---

Built with ❤️ using Next.js, StarkNet, and modern web tech.
