// Shared viewport-visibility wiring for the Chapter 1 device-card
// illustrations — the ambient-loop counterpart to diagramPlayback.js's
// button-triggered playback. Called once per DeviceCard instance (from
// DeviceCard.astro, the single component all five illustrations render
// through), guarded per-element so calling it more than once is safe —
// same defensive pattern diagramPlayback.js already uses for diagrams
// that appear more than once on a page.
//
// Two separate, permanent-vs-toggling classes on the wrapper:
// - `.in-view` is added once, the first time the card is seen, and never
//   removed — it only exists to play the one-time fade/rise entrance
//   transition, so scrolling past a card repeatedly doesn't replay it.
// - `.is-playing` toggles every time the card crosses the viewport
//   boundary in either direction — CSS uses it purely to flip
//   `animation-play-state` between running/paused, so an ambient loop
//   freezes mid-cycle when scrolled away and continues from that same
//   point when it comes back, rather than restarting or disappearing.
export function wireDeviceIllustrationEntrance(rootSelector) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  // Reduced motion: the CSS baseline already renders the illustration
  // fully visible with no transition and no looping animation, so there
  // is nothing for an observer to do — skip creating one entirely.
  if (reducedMotion.matches) return;

  const targets = document.querySelectorAll(rootSelector);
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        entry.target.classList.add("in-view");
        entry.target.classList.toggle("is-playing", entry.isIntersecting);
      }
    },
    { threshold: 0.2 },
  );

  targets.forEach((el) => {
    if (el.dataset.entranceWired === "true") return;
    el.dataset.entranceWired = "true";
    observer.observe(el);
  });
}
