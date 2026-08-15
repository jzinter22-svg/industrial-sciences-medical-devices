// Shared controller for the redesigned Chapter 1 "simulator" diagrams
// (dark neumorphic shell, Play/Pause/Restart/Speed, hover/click hotspot
// focus mode with an info card). First built inline in
// XraySystemBlockDiagram.astro and AnimatedTubeCrossSection.astro;
// extracted here once several more diagrams needed the identical
// mechanism, to avoid re-duplicating ~150 lines of timer/focus-mode
// logic in every component. Each diagram's own <script> only needs to
// call wireDiagramSimulator(rootSelector, { cycleMs, componentInfo }).
export function wireDiagramSimulator(rootSelector, { cycleMs, componentInfo }) {
  document.querySelectorAll(rootSelector).forEach((wrapper) => {
    const shell = wrapper.querySelector(".simulator-shell");
    const playButton = wrapper.querySelector(".play-button");
    const pauseButton = wrapper.querySelector(".pause-button");
    const resetButton = wrapper.querySelector(".reset-button");
    const speedUpButton = wrapper.querySelector(".speed-up-button");
    const speedDownButton = wrapper.querySelector(".speed-down-button");
    if (!shell || !playButton || !pauseButton || !resetButton) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let endTimer = null;
    let playbackRate = 1;
    let isPlaying = false;
    let isPaused = false;
    let remainingNominalMs = cycleMs;
    let timerArmedAt = 0;

    const clearEndTimer = () => {
      if (endTimer !== null) {
        window.clearTimeout(endTimer);
        endTimer = null;
      }
    };

    const armEndTimer = () => {
      clearEndTimer();
      timerArmedAt = performance.now();
      endTimer = window.setTimeout(stop, remainingNominalMs / playbackRate);
    };

    const captureElapsed = () => {
      if (endTimer === null) return;
      const elapsedRealMs = performance.now() - timerArmedAt;
      remainingNominalMs = Math.max(0, remainingNominalMs - elapsedRealMs * playbackRate);
    };

    const setAllAnimations = (fn) => {
      wrapper.querySelectorAll("*").forEach((el) => el.getAnimations().forEach(fn));
    };

    const setPlaybackRate = (rate) => {
      if (!isPlaying) {
        playbackRate = rate;
        return;
      }
      captureElapsed();
      playbackRate = rate;
      setAllAnimations((a) => { a.playbackRate = playbackRate; });
      if (!isPaused) armEndTimer();
    };

    function stop() {
      isPlaying = false;
      isPaused = false;
      shell.classList.remove("playing");
      clearEndTimer();
      remainingNominalMs = cycleMs;
      playButton.removeAttribute("disabled");
      pauseButton.setAttribute("disabled", "true");
      pauseButton.dataset.paused = "false";
      pauseButton.textContent = "⏸ إيقاف مؤقت";
    }

    const start = () => {
      if (reducedMotion.matches) return;
      isPlaying = true;
      isPaused = false;
      remainingNominalMs = cycleMs;
      shell.classList.add("playing");
      playButton.setAttribute("disabled", "true");
      pauseButton.removeAttribute("disabled");
      pauseButton.dataset.paused = "false";
      pauseButton.textContent = "⏸ إيقاف مؤقت";
      armEndTimer();
    };

    const restart = () => {
      shell.classList.remove("playing");
      void wrapper.offsetWidth;
      start();
    };

    playButton.addEventListener("click", start);
    resetButton.addEventListener("click", restart);

    pauseButton.addEventListener("click", () => {
      if (!isPlaying) return;
      if (isPaused) {
        isPaused = false;
        setAllAnimations((a) => a.play());
        armEndTimer();
        pauseButton.dataset.paused = "false";
        pauseButton.textContent = "⏸ إيقاف مؤقت";
      } else {
        isPaused = true;
        captureElapsed();
        clearEndTimer();
        setAllAnimations((a) => a.pause());
        pauseButton.dataset.paused = "true";
        pauseButton.textContent = "▶ استئناف";
      }
    });

    speedUpButton?.addEventListener("click", () => setPlaybackRate(Math.min(playbackRate + 0.5, 3)));
    speedDownButton?.addEventListener("click", () => setPlaybackRate(Math.max(playbackRate - 0.5, 0.25)));

    // ---- component focus mode (hover preview + click-to-lock) ----
    const hotspots = Array.from(wrapper.querySelectorAll(".hotspot"));
    const links = Array.from(wrapper.querySelectorAll(".link"));
    const infoHint = wrapper.querySelector("[data-info-hint]");
    const infoContent = wrapper.querySelector("[data-info-content]");
    const infoTitle = wrapper.querySelector("[data-info-title]");
    const infoText = wrapper.querySelector("[data-info-text]");
    let selected = null;

    const applyFocus = (id) => {
      shell.classList.toggle("has-selection", !!id);
      hotspots.forEach((h) => h.classList.toggle("is-selected", h.dataset.component === id));
      links.forEach((l) => {
        const related = id !== null && (l.dataset.link === id || l.dataset.linkTo === id);
        l.classList.toggle("is-related", related);
      });

      if (!id || !infoHint || !infoContent || !infoTitle || !infoText) {
        if (infoHint) infoHint.hidden = false;
        if (infoContent) infoContent.hidden = true;
        return;
      }
      const info = componentInfo[id];
      if (!info) return;
      infoHint.hidden = true;
      infoContent.hidden = false;
      infoTitle.textContent = info.title;
      infoText.textContent = info.text;
    };

    hotspots.forEach((hotspot) => {
      const id = hotspot.dataset.component ?? null;
      hotspot.addEventListener("mouseenter", () => {
        if (!selected) applyFocus(id);
      });
      hotspot.addEventListener("mouseleave", () => {
        if (!selected) applyFocus(null);
      });
      hotspot.addEventListener("focus", () => applyFocus(id));
      hotspot.addEventListener("blur", () => {
        if (!selected) applyFocus(null);
      });
      hotspot.addEventListener("click", () => {
        selected = selected === id ? null : id;
        applyFocus(selected);
      });
      hotspot.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          selected = selected === id ? null : id;
          applyFocus(selected);
        }
      });
    });
  });
}
