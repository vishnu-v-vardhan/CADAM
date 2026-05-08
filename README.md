<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./public/Github-Banner-Dark.png">
    <source media="(prefers-color-scheme: light)" srcset="./public/Github-Banner-Light.png">
    <img src="./public/Github-Banner-Light.png" alt="CADAM Banner" width="100%"/>
  </picture>
</div>

<h1 align="center"> ⛮ The Open Source Text to CAD Web App ⛮ </h1>

<div align="center">

[![Stars](https://img.shields.io/github/stars/Adam-CAD/cadam?style=social&logo=github)](https://github.com/Adam-CAD/cadam/stargazers)
[![Forks](https://img.shields.io/github/forks/Adam-CAD/CADAM?style=flat)](https://github.com/Adam-CAD/CADAM/network)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg?style=flat)](https://www.gnu.org/licenses/gpl-3.0)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19.1-61DAFB.svg?style=flat&logo=react&logoColor=black)](https://reactjs.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E.svg?style=flat&logo=supabase&logoColor=white)](https://supabase.com/)
[![OpenSCAD](https://img.shields.io/badge/OpenSCAD-WASM-F9D64F.svg?style=flat)](https://openscad.org/)
[![Website](https://img.shields.io/badge/website-adam.new-blue?style=flat)](https://adam.new)
[![Discord](https://img.shields.io/badge/Discord-Join-5865F2?style=flat&logo=discord&logoColor=white)](https://discord.com/invite/HKdXDqAHCs)
[![Follow Zach Dive](https://img.shields.io/badge/Follow-Zach%20Dive-1DA1F2?style=flat&logo=x&logoColor=white)](https://x.com/zachdive)
[![Follow Aaron Li](https://img.shields.io/badge/Follow-Aaron%20Li-1DA1F2?style=flat&logo=x&logoColor=white)](https://x.com/aaronhetengli)
[![Follow Dylan Anderson](https://img.shields.io/badge/Follow-tsadpbb-1DA1F2?style=flat&logo=x&logoColor=white)](https://x.com/tsadpbb)

</div>

---

## ✨ Features

- 🤖 **AI-Powered Generation** - Transform natural language and images into 3D models
- 🎛️ **Parametric Controls** - Interactive sliders for instant dimension adjustments
- 📦 **Multiple Export Formats** - Export as .STL, .SCAD, or .DXF files
- 🌐 **Browser-Based** - Runs entirely in your browser using WebAssembly
- 📚 **Library Support** - Includes BOSL, BOSL2, and MCAD libraries

## 🎯 Key Capabilities

| Feature                    | Description                                          |
| -------------------------- | ---------------------------------------------------- |
| **Natural Language Input** | Describe your 3D model in plain English              |
| **Image References**       | Upload images to guide model generation              |
| **Real-time Preview**      | See your model update instantly with Three.js        |
| **Parameter Extraction**   | Automatically identifies adjustable dimensions       |
| **Smart Updates**          | Efficient parameter changes without AI re-generation |
| **Custom Fonts**           | Built-in Geist font support for text in models       |

## 📸 Demo

<!-- Add demo GIFs or screenshots here -->
<!-- Example format:
![CADAM Demo](./demo/demo.gif)

### Example: Creating a parametric gear
![Gear Example](./demo/gear-example.png)
-->

> 🎬 **Try it live:** https://adam.new/cadam

## 📺 Screenshots

<img src="./public/screenshot-2.jpeg" alt="CADAM Screenshot 2" />

<details>
  <summary>More screenshots</summary>

  <br/>
  <img src="./public/screenshot-1.jpeg" alt="CADAM Screenshot 1" />
  <br/>
  <img src="./public/screenshot-3.jpeg" alt="CADAM Screenshot 3" />

</details>

## 📋 Prerequisites

Install these tools before running CADAM locally:

- Node.js `18+` (LTS recommended) and npm
- Docker Desktop (required by `supabase start`)
- Supabase CLI (`npm i -g supabase` or package manager install)
- ngrok (required for image flows when `ENVIRONMENT=local`)

Optional but useful:

- Deno (only needed for `npm run lint:supabase`)

## 👶 First Time Setup (Beginner Friendly)

If this is your first time running a full-stack app locally, follow this exact order.

### 1) Install required apps

1. Install Node.js LTS from [nodejs.org](https://nodejs.org/)
2. Install Docker Desktop from [docker.com](https://www.docker.com/products/docker-desktop/)
3. Install ngrok from [ngrok.com/download](https://ngrok.com/download)
4. Install Supabase CLI:

```bash
npm install -g supabase
```

### 2) Create a free ngrok account and connect your machine

1. Sign up at [ngrok.com](https://ngrok.com/)
2. In ngrok dashboard, copy your auth token
3. Run this once in terminal:

```bash
ngrok config add-authtoken <your-ngrok-auth-token>
```

Without this step, ngrok may refuse to start tunnels.

## 🔧 Environment Setup

CADAM needs 2 environment files:

1. Frontend env file
   - Copy `.env.local.template` to `.env.local`
   - Set values:
     - `VITE_SUPABASE_URL` (local default: `http://127.0.0.1:54321`)
     - `VITE_SUPABASE_ANON_KEY` (from `npx supabase status`)
     - `VITE_POSTHOG_PROJECT_KEY` (optional for local, but recommended)
     - `VITE_SENTRY_DSN` and `VITE_SENTRY_ENVIRONMENT` (optional)

2. Supabase Edge Functions env file
   - Copy `supabase/functions/.env.template` to `supabase/functions/.env`
   - Fill API keys using this beginner rule:
     - **Mandatory (minimum to run core chat):**
       - `ANTHROPIC_API_KEY`
     - **Optional (advanced/fallback image providers):**
       - `OPENAI_API_KEY`
       - `OPENROUTER_API_KEY`
       - `GOOGLE_API_KEY`
       - `FAL_KEY`
   - Set local runtime values:
     - `ENVIRONMENT="local"`
     - `NGROK_URL="<your-ngrok-url>"`
     - `ADAM_URL="http://localhost:5173/cadam"` (or your deployed URL)
   - Billing variables are only needed for billing flows:
     - `BILLING_SERVICE_URL`
     - `BILLING_SERVICE_KEY`

## 🚀 Run Locally (Step-by-Step)

Open **3 terminal windows** in the project root (`CADAM`).

- Terminal A: Supabase local stack
- Terminal B: Supabase edge functions
- Terminal C: Frontend (Vite)

1. Clone and install

```bash
git clone https://github.com/Adam-CAD/CADAM.git
cd CADAM
npm install
```

2. In **Terminal A**, start local Supabase (Docker must be running)

```bash
npx supabase start
```

3. Sync local frontend env with Supabase output

```bash
npx supabase status
```

Copy `API URL` and `anon key` into `.env.local` as:

```bash
VITE_SUPABASE_URL="http://127.0.0.1:54321"
VITE_SUPABASE_ANON_KEY="<anon-key-from-status>"
```

4. (Recommended on first run) reset DB to apply migrations and seed data

```bash
npx supabase db reset
```

This seed includes a local test account:

- Email: `test@adamcad.com`
- Password: `password`

5. In **Terminal A** (new tab) or a **Terminal D**, start ngrok

This exposes your local Supabase endpoint publicly so AI/image flows can reach callback URLs.

```bash
ngrok http 54321
```

Copy the **HTTPS forwarding URL** from ngrok output, then update `supabase/functions/.env`:

```bash
NGROK_URL="https://xxxx-xx-xx-xxx-xx.ngrok-free.app"
```

6. In **Terminal B**, serve Supabase functions

```bash
npx supabase functions serve --env-file supabase/functions/.env --no-verify-jwt
```

7. In **Terminal C**, start the frontend

```bash
npm run dev
```

Open the app at:

- `http://localhost:5173/cadam`

## 🔑 API Keys (Beginner Guide)

You do **not** need to get every key on day one.

### Minimum keys to start CADAM locally

Put this in `supabase/functions/.env`:

```bash
ANTHROPIC_API_KEY="<your-anthropic-key>"
ENVIRONMENT="local"
NGROK_URL="<your-ngrok-https-url>"
ADAM_URL="http://localhost:5173/cadam"
```

This is enough to boot services and run core AI providers, but there is one more important requirement for normal in-app usage:

- `BILLING_SERVICE_URL`
- `BILLING_SERVICE_KEY`

CADAM checks token/subscription status through the billing service.  
If billing variables are missing, the app may show token/subscription prompts even in local development.

### Optional keys (add later if needed)

- `OPENAI_API_KEY` - enables OpenAI image generation paths in mesh/image workflows
- `GOOGLE_API_KEY` - enables Google Gemini image generation fallback
- `FAL_KEY` - enables fal.ai image generation/fallback routes
- `OPENROUTER_API_KEY` - enables OpenRouter-backed routes in some function flows

If these are missing, those provider-specific features may fail or skip fallback, but the app can still run with the minimum setup above.

### Billing keys (required for normal local app flow)

- `BILLING_SERVICE_URL`
- `BILLING_SERVICE_KEY`

How to get them:

1. Ask a project maintainer/team member for local dev billing credentials.
2. Add them to `supabase/functions/.env`.
3. Restart function serve:

```bash
npx supabase functions serve --env-file supabase/functions/.env --no-verify-jwt
```

Without these keys, you can still open the UI, but token-aware chat actions may be blocked or redirect to subscription prompts.

### How to get each key

1. `ANTHROPIC_API_KEY` (**recommended first, effectively required**)
   - Create account: [Anthropic Console](https://console.anthropic.com/)
   - Go to API Keys, create new key, copy it
   - Paste into `supabase/functions/.env`

2. `OPENAI_API_KEY` (optional)
   - Create account: [OpenAI Platform](https://platform.openai.com/)
   - Open API keys page, create a secret key
   - Paste into `supabase/functions/.env`

3. `OPENROUTER_API_KEY` (optional)
   - Create account: [OpenRouter](https://openrouter.ai/)
   - Generate an API key from dashboard
   - Paste into `supabase/functions/.env`

4. `GOOGLE_API_KEY` (optional)
   - Open: [Google AI Studio](https://aistudio.google.com/)
   - Create API key
   - Paste into `supabase/functions/.env`

5. `FAL_KEY` (optional)
   - Create account: [fal.ai](https://fal.ai/)
   - Generate API key from dashboard
   - Paste into `supabase/functions/.env`

### Suggested learning path (easiest)

1. Start with only `ANTHROPIC_API_KEY`
2. Confirm app boots and basic generation works
3. Add `OPENAI_API_KEY` next
4. Add `GOOGLE_API_KEY` / `FAL_KEY` only if you use image-heavy workflows
5. Add `OPENROUTER_API_KEY` only if a route explicitly needs it

### ✅ What "working correctly" looks like

- `npx supabase start` shows local services running
- `ngrok http 54321` shows an active forwarding URL
- `supabase functions serve ...` shows functions being served
- `npm run dev` shows Vite running and opens the app URL

## 🧪 Useful Commands

```bash
# Frontend lint
npm run lint

# Frontend typecheck
npm run typecheck

# Supabase function lint
npm run lint:supabase

# Production build
npm run build
```

## 🛠️ Troubleshooting

- `Missing API Keys` screen:
  - `.env.local` is missing or `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` is empty.
- Supabase commands fail:
  - Ensure Docker Desktop is running, then retry `npx supabase start`.
- Function calls fail from frontend:
  - Ensure `supabase functions serve` is running in a separate terminal.
- Image generation fails in local:
  - Check `NGROK_URL` in `supabase/functions/.env` and confirm ngrok is still running.
  - If ngrok URL changed after restart, copy the new URL into `supabase/functions/.env` and restart function serve.
- You keep getting subscription/token prompts in local:
  - Most common cause: missing `BILLING_SERVICE_URL` / `BILLING_SERVICE_KEY` in `supabase/functions/.env`.
  - Add billing keys from your team, restart function serve, then refresh app.
  - If needed, sign in with seeded test user after `npx supabase db reset`:
    - Email: `test@adamcad.com`
    - Password: `password`
- Login issues after schema changes:
  - Run `npx supabase db reset` to rebuild local database state.
- `ngrok` command not found:
  - Restart your terminal after install, or reinstall ngrok and ensure it is on `PATH`.

## 🧭 After Startup: How to Use the App Locally

Once all services are running, follow this exact path:

1. Open `http://localhost:5173/cadam`
2. Click **Sign In**
3. Use local seeded account (if you ran `npx supabase db reset`):
   - Email: `test@adamcad.com`
   - Password: `password`
4. On the home prompt page, type a simple request:
   - Example: `Create a small desk organizer with 3 compartments`
5. Submit and wait for response/mesh generation
6. Open the created item in editor (or from history) and continue iterating

If you are redirected to subscription or shown token warnings immediately, check billing keys first (section above). Claude API key alone does not bypass token checks in this codebase.

## 🛠️ Built With

- **Frontend:** React 19 + TypeScript + Vite
- **UI:** Tailwind CSS + shadcn/ui + Radix UI
- **Data Layer:** Supabase JS + TanStack React Query
- **Backend:** Supabase Postgres + Supabase Edge Functions (Deno)
- **3D Rendering:** Three.js + React Three Fiber (+ drei)
- **CAD Engine:** OpenSCAD WebAssembly
- **AI Providers:** Anthropic, OpenAI, Google GenAI, OpenRouter, fal.ai
- **CAD Libraries:** BOSL, BOSL2, MCAD

## 🤝 Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also [open an issue](https://github.com/Adam-CAD/CADAM/issues).

See the [CONTRIBUTING.md](CONTRIBUTING.md) for instructions and [code of conduct](CODE_OF_CONDUCT.md).

## 🙏 Credits

This app wouldn't be possible without the work of:

- [OpenSCAD](https://github.com/openscad/openscad)
- [openscad-wasm](https://github.com/openscad/openscad-wasm)
- [openscad-playground](https://github.com/openscad/openscad-playground)
- [openscad-web-gui](https://github.com/seasick/openscad-web-gui)
- [dingcad](https://github.com/yacineMTB/dingcad)

## 📄 License

This distribution is licensed under the GNU General Public License v3.0 (GPLv3). See `LICENSE`.

Components and attributions:

- Portions of this project are derived from `openscad-web-gui` (GPLv3).
- This distribution includes unmodified binaries from OpenSCAD WASM under
  GPL v2 or later; distributed here under GPLv3 as part of the combined work.
  See `src/vendor/openscad-wasm/SOURCE-OFFER.txt`.

---

## 🌟 Star History

<div align="center">

<a href="https://www.repostars.dev/?repos=Adam-CAD%2FCADAM&theme=forest">
  <img src="https://www.repostars.dev/api/embed?repo=Adam-CAD/CADAM&theme=forest" alt="CADAM Star History" width="700"/>
</a>

<sub>Live chart by <a href="https://www.repostars.dev/?repos=Adam-CAD%2FCADAM&theme=forest">RepoStars</a> — click for the interactive version.</sub>

</div>

---

<div align="center">
  
**⭐ If you find CADAM useful, please consider giving it a star!**

[![Stars](https://img.shields.io/github/stars/Adam-CAD/cadam?style=social&logo=github)](https://github.com/Adam-CAD/cadam/stargazers)

Made with 💙 for the 3D printing and CAD community

</div>
