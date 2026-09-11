# 🟢 OBS Live Green Screen

📷 Sony ZV-1 → 🔌 Elgato Cam Link 4K → 💻 Mac Mini → 🟢 OBS Chroma Key.

Physical green screen, native OBS keying, 🚫 no AI background-removal plugins, ⚡ no second render.

## ❌ Bad example player

Chrome / browser green-screen gone wrong (this is the **bad** look):

- ▶️ On the live page: https://rifaterdemsahin.github.io/obs-live-green-screen/#bad
- 📦 Clip: `assets/bad-green-screen-chrome-example.mp4` (first 24 MB of the WhatsApp file; the source is 10.0 MiB so this is the full clip)

## ✅ Checkboxes

The live page has checkboxes on every setup step. Checks stay in your browser (`localStorage`) so you can tick them off as you go.

## 🎬 Walkthrough video

Embed is on the live page. Direct link:

**https://youtu.be/UWhA0rqQOeg** — FiniteSingularity, *Your OBS green screen is all wrong, and the fix is so simple!*

## 🌐 Live guide

**https://rifaterdemsahin.github.io/obs-live-green-screen/**

The page walks through:

1. 📷 Lock the ZV-1 (manual exposure, white balance, Picture Profile off)
2. 🟢 OBS Chroma Key on the Cam Link source
3. ✨ Spill reduction + Color Correction on Mac
4. 🎬 Scene stack and a 15-second QuickTime check

## 📚 Setup Guides & Fixes

Check out the detailed guides we've added to master your setup:
- [🏠 Main Process (index.html)](index.html) — The full process for fast production setup.
- [⚙️ OBS Settings Check (obs-settings.html)](obs-settings.html) — Sanity check your OBS layer order.
- [🔦 Fix Hotspots (problematic-greenscreen.html)](problematic-greenscreen.html) — Resolving overblown white reflections on the green screen.
- [💡 Fix Bottom Light (bottom-light-issue.html)](bottom-light-issue.html) — Fixing underlit green screens from the floor.
- [💬 Implementing Captions (captions.html)](captions.html) — Adding live or post-production captions.

## 🐙 Repo

- `index.html` — the full process
- GitHub Pages: `main` / root
