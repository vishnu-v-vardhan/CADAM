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
   - Fill required API keys for the features you use:
     - `ANTHROPIC_API_KEY`
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

## 🚀 Run Locally (Reliable Order)

1. Clone and install

```bash
git clone https://github.com/Adam-CAD/CADAM.git
cd CADAM
npm install
```

2. Start local Supabase (Docker must be running)

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

4. (Recommended first run) Reset DB to apply migrations and seed data

```bash
npx supabase db reset
```

This seed includes a local test account:

- Email: `test@adamcad.com`
- Password: `password`

5. Start ngrok (required for local image URL callbacks)

```bash
ngrok http 54321
```

Update `NGROK_URL` in `supabase/functions/.env` with the HTTPS URL from ngrok.

6. Serve Supabase functions

```bash
npx supabase functions serve --env-file supabase/functions/.env --no-verify-jwt
```

7. Start the frontend

```bash
npm run dev
```

Open the app at:

- `http://localhost:5173/cadam`

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
  - Check `NGROK_URL` in `supabase/functions/.env` and confirm the ngrok tunnel is active.
- Login issues after schema changes:
  - Run `npx supabase db reset` to rebuild local database state.

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
