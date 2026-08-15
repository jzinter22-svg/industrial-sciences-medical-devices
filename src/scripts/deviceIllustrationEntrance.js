// Shared scroll-entrance wiring for the Chapter 1 device-card
// illustrations — the ambient-loop counterpart to diagramPlayback.js's
// button-triggered playback. Called once per DeviceCard instance (from
// DeviceCard.astro, the single component all five illustrations render
// through), guarded per-element so calling it more than once is safe —
// same defensive pattern diagramPlayback.js already uses for diagrams
// that appear more than once on a page.
export function wireDeviceIllustrationEntrance(rootSelector) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  // Reduced motion: the CSS baseline already renders the illustration
  // fully visible with no transition, so there is nothing for an
  // observer to do — skip creating one entirely.
  if (reducedMotion.matches) return;

  const targets = document.querySelectorAll(rootSelector);
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.25 },
  );

  targets.forEach((el) => {
    if (el.dataset.entranceWired === "true") return;
    el.dataset.entranceWired = "true";
    observer.observe(el);
  });
}
