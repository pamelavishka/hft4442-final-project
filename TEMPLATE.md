# Use this project as a template

1. Select **Use this template → Create a new repository** on GitHub.
2. Clone your new repository and install Node.js 22.13 or newer.
3. Run `npm ci` followed by `npm run dev`.
4. Edit `app/page.tsx` for branding and page content, `app/globals.css` for styling, and the Ollie SVG in `app/page.tsx` for the mascot.
5. Replace `lib/resort.json` and update the topic matching and responses in `lib/concierge.ts` for your own property. Keep source references and verify every response.
6. Replace the course documents in `docs/`, `lib/assignment.json`, and the extracted source text with your own authorized materials.
7. Before publishing a separate Sites project, replace `.openai/hosting.json` with that project's configuration. The included project ID belongs to the original Go Gator site; do not deploy a copied project to it.
8. Run the checks in QUICKSTART.md and test microphone permission, recording, transcription, cancellation, and voice playback on your target browser.

This template uses rule-based resort answers and free browser/device speech features. It does not supply an LLM, real reservations, payments, or a staff connection. No API key is required. Review README.md for limitations and third-party asset attribution.
