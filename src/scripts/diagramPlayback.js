// Shared play/replay/auto-reset wiring for animated diagrams. Each
// animated diagram component calls wireDiagramPlayback(rootSelector) once
// from its own <script> tag instead of re-implementing this by hand (the
// same play -> disable -> auto-stop-on-cycle-end -> replay-forces-restart
// logic Figure 1-1 introduced).
export function wireDiagramPlayback(rootSelector) {
  document.querySelectorAll(rootSelector).forEach((wrapper) => {
    // A component used more than once on the same page (e.g. the four
    // pulse-generator figures) may have its <script> module evaluated
    // once per usage depending on the bundler; guard against wiring the
    // same wrapper's buttons twice, which would fire every click N times.
    if (wrapper.dataset.playbackWired === "true") return;
    wrapper.dataset.playbackWired = "true";

    const playButton = wrapper.querySelector(".play-button");
    const resetButton = wrapper.querySelector(".reset-button");
    const marker = wrapper.querySelector(".cycle-end-marker");
    if (!playButton || !marker) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const start = () => {
      if (reducedMotion.matches) return;
      wrapper.classList.add("playing");
      playButton.setAttribute("disabled", "true");
    };

    const stop = () => {
      wrapper.classList.remove("playing");
      playButton.removeAttribute("disabled");
    };

    const restart = () => {
      wrapper.classList.remove("playing");
      // Force reflow so the next class add re-triggers CSS animations
      // instead of being a no-op.
      void wrapper.offsetWidth;
      start();
    };

    playButton.addEventListener("click", start);
    if (resetButton) resetButton.addEventListener("click", restart);
    marker.addEventListener("animationend", stop);
  });
}
