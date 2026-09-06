# BeatWise
*Your heart sets the pace.*

BeatWise is a heart-rate-gated interval trainer designed for adults 65+. Instead of arbitrary clock intervals, every phase is gated by the user's own heart: work hard until the heart reaches its target zone, hold briefly, then rest until the heart settles. The app measures how long each takes, tracks fitness over time (heart age, recovery speed, work capacity), and auto-adjusts each session's plan.

## Publish free on GitHub Pages
1. Create a new repository on github.com (for example, `beatwise`).
2. Upload `index.html` to the repository.
3. Go to Settings, then Pages, and under "Build and deployment" choose "Deploy from a branch", select `main`, and save.
4. In about a minute the app is live at `https://YOURUSERNAME.github.io/beatwise/`.
5. Optional: point a custom domain (yourbeatwise.com) at it under the same Pages settings.

## How data works
- Each visitor's workout history is saved in their own browser (localStorage), private to their device. Nothing is sent to any server.
- A backup download button lives on the Progress page.
- Clearing browser data clears history, so encourage users to take a backup occasionally.

## Heart rate sources
- **Bluetooth chest strap** (Polar H7/H9/H10, Garmin HRM-Dual, Wahoo TICKR, CooSpo, and any strap broadcasting the standard Bluetooth Heart Rate Service). Requires Chrome or Edge on desktop or Android. iOS Safari does not support Web Bluetooth.
- **Manual mode**: glance at any watch and use the +/- buttons.
- **Practice demo**: a built-in simulator for trying the full flow.

## The science inside
- Max heart rate estimated by Tanaka (men, 208 - 0.7 x age) or Gulati (women, 206 - 0.88 x age), self-calibrating upward if a session records a higher real peak.
- Zones anchored to heart rate reserve (Karvonen method) using resting heart rate.
- Progression: rounds first, then hold time, then zone. Steps up on a strong finish, repeats on high perceived effort or recovery drift, steps down on an early stop.
- Heart age estimated from heart rate recovery speed versus published age norms. Presented as a friendly estimate, not a medical measurement.

## Disclaimer
BeatWise is a fitness tool, not a medical device. Users on heart medications (such as beta blockers) or with cardiac conditions should consult a doctor before high-intensity interval training.

## Anonymous data collection
The app can send one anonymous row per workout and per breath score to a Google Sheet you own. See `beatwise-collector.gs` for the 4-step setup, then paste the deployed web app URL into `TELEMETRY_URL` near the top of `index.html`. Users consent once at onboarding and can switch sharing off under My details. No names are ever sent, only a random device ID plus age, sex, activity level, and the session numbers.

## iPhone users
Safari (and every browser on iOS) blocks Web Bluetooth. The app detects an iPhone and shows a card with two buttons: get the free Bluefy browser from the App Store, and copy the BeatWise link to paste into it. Inside Bluefy the chest strap connects normally. Manual mode works on any iPhone without extra apps.
