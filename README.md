# Go Gator Resort and Spa

A fictional hospitality course website based on both supplied Word documents. Resort facts and tables are retained in `lib/resort.json`; assignment content is retained in `lib/assignment.json`. Extracted source text is also retained for auditing.

## Free version

The current site makes **no paid AI API calls**. Text answers are generated locally using deterministic topic matching, source retrieval, conversation context and escalation rules. Chat works without a server round trip. The existing chat API is also free; the former paid speech endpoint explicitly returns 410. No API key is required or used, even if one is later present in the environment.

Ollie opens automatically when the page loads. Dismissing the panel keeps it closed until manually reopened or the next page load. No audio or microphone starts automatically.

## Voice and microphone

- Spoken replies use free installed browser/device voices, preferring voices labeled natural, enhanced, neural or premium. Voice and pace can be selected and previewed. Normal pitch avoids cartoonish speech. Actual quality depends on installed voices.
- On-device speech is the default microphone mode: MediaRecorder captures up to 30 seconds after an explicit click and browser permission; audio is decoded and resampled to 16kHz, then Whisper Tiny English runs in a browser Web Worker through Transformers.js 3.8.1/WASM. First transcription downloads model/runtime assets from Hugging Face/jsDelivr; audio is not uploaded to those services. No API charge applies. The download may take a minute or longer and devices need enough memory.
- Browser speech is an alternative mode with no model download; its availability varies, and the browser vendor may process audio remotely.
- Spoken messages submit automatically after transcription by default. Users can disable automatic sending to review first.
- Cancellation invalidates stale transcription results, stops microphone tracks and allows cancelling the worker. Permission, missing microphone, busy-device, network, decode and model-load errors are shown with recovery guidance.
- HTTPS (or localhost) and microphone permission are required. Embedded browser limitations cannot be overridden by site code.
- Never claim universal browser support or validated microphone operation until an actual device/browser test succeeds.

Implementation references: https://huggingface.co/docs/transformers.js/v3.8.1/en/api/pipelines and https://github.com/huggingface/transformers.js .

## Source conflicts

Section 17 overrides airport advance booking to 24 hours. Sunday spa opening is 10 AM in an undated notice. Relative-date closures and cabana promotions require staff confirmation. Golf shuttle frequency conflicts; May 31 season is unspecified. The beachfront Gainesville property is fictional. Six named dining venues do not reconcile overview counts. The exact tax base is unspecified, so the planner shows room-rate ranges and excludes tax.

## Course scope and limitations

The site includes the gator avatar, guide, recommendations, multi-turn topic context, human-handoff drafts, itinerary drafts, five demonstration scenarios, management decision rights, organizational/employee influence discussion and session metrics. It is **not an LLM chatbot** and does not fulfill the assignment’s LLM/model-selection component. Whisper is used only for speech recognition.

Team assignments, project timeline, the 2–3 page plan, recorded video, real customer survey and final presentation remain separate student deliverables. No real bookings, dispatches, refunds, payments, staff connections or emails happen. Drafts and ratings are stored in the browser session. The supplied assignment was treated as requirements context, not permission to submit work or contact people.

## Development

Use the Sites helpers with the existing `.openai/hosting.json` identity. Run TypeScript, `node tests/concierge.mjs`, and a production build. Browser validation should cover automatic opening, chat, planning, voice selection, microphone permissions, recording, transcription and cancellation on desktop/mobile. Preserve the private audience unless explicitly asked otherwise.
