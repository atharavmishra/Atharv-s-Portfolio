import { useEffect } from "react";

// Reveal an element once its top edge is this far into the viewport.
const REVEAL_AT = 0.92;

/**
 * Every motion effect on the page, driven by a single rAF-throttled loop.
 *
 * Reveals are deliberately NOT driven by IntersectionObserver. The observer is
 * the obvious tool, but when it fails to fire — as it does under some embedded
 * / emulated viewports — every revealed element stays at opacity 0 and the page
 * reads as blank. Measuring against documentElement.clientHeight in the scroll
 * loop we already run is one mechanism instead of two, and it cannot silently
 * no-op: if it stops running, the `js-anim` safety net in _document removes the
 * hiding styles outright.
 */
export default function useScrollFx() {
  useEffect(() => {
    const root = document.documentElement;

    // The bundle is alive — the "show everything" safety net isn't needed.
    clearTimeout(window.__revealSafety);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.classList.remove("js-anim");
      return undefined;
    }

    root.classList.add("js-anim");

    let pending = Array.from(
      document.querySelectorAll(".reveal, .reveal-scale, .reveal-blur, .mask-line")
    );
    const parallaxEls = Array.from(document.querySelectorAll("[data-parallax]"));
    const progressEl = document.querySelector("[data-progress]");
    let ticking = false;

    const onFrame = () => {
      ticking = false;
      const vh = root.clientHeight;

      if (pending.length) {
        const trigger = vh * REVEAL_AT;
        const stillPending = [];
        for (let i = 0; i < pending.length; i += 1) {
          const el = pending[i];
          const rect = el.getBoundingClientRect();
          if (rect.top < trigger && rect.bottom > 0) {
            el.classList.add("is-in");
          } else {
            stillPending.push(el);
          }
        }
        pending = stillPending;
      }

      if (progressEl) {
        const max = document.body.scrollHeight - vh;
        const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
        progressEl.style.setProperty("--p", p.toFixed(4));
      }

      for (let i = 0; i < parallaxEls.length; i += 1) {
        const el = parallaxEls[i];
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > vh + 200) continue;
        // -1 above the fold, 0 centred, 1 below it
        const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
        const depth = parseFloat(el.dataset.parallax) || 0.1;
        // translateY, not translate3d: a 3D transform would promote every
        // drifting screenshot to its own compositor layer.
        el.style.transform = `translateY(${(progress * depth * -100).toFixed(2)}px)`;
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(onFrame);
    };

    onFrame();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    // Scroll events are the trigger, but they are not a guarantee — some
    // embedded viewers never dispatch them, and anything still at opacity 0
    // would stay invisible for good. This low-frequency sweep runs only while
    // something is still waiting to be revealed and stops itself afterwards,
    // so the page always finishes revealing even with no scroll events at all.
    const sweep = setInterval(() => {
      if (!pending.length) {
        clearInterval(sweep);
        return;
      }
      onFrame();
    }, 400);

    /* Cursor spotlight on cards */
    const onPointer = (event) => {
      const card = event.target.closest && event.target.closest(".card");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      card.style.setProperty("--my", `${event.clientY - rect.top}px`);
    };
    window.addEventListener("pointermove", onPointer, { passive: true });

    return () => {
      clearInterval(sweep);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);
}
