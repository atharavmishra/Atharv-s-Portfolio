import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 3, suffix: "+", label: "Years shipping mobile" },
  { value: 7, suffix: "", label: "Products built end to end" },
  { value: 4, suffix: "", label: "Live on Google Play" },
  { value: 6, suffix: "", label: "Core technologies" },
];

function Counter({ value, suffix }) {
  const [shown, setShown] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const run = () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        setShown(value);
        return;
      }
      const duration = 1400;
      const start = performance.now();
      let frame;
      const step = (now) => {
        const t = Math.min(1, (now - start) / duration);
        // easeOutExpo — fast off the line, long settle, very Apple
        const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        setShown(Math.round(eased * value));
        if (t < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
      return () => cancelAnimationFrame(frame);
    };

    if (!("IntersectionObserver" in window)) {
      setShown(value);
      return undefined;
    }

    let stop;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        stop = run();
        io.disconnect();
      },
      { threshold: 0.5 }
    );
    io.observe(node);

    return () => {
      io.disconnect();
      if (stop) stop();
    };
  }, [value]);

  return (
    <span ref={ref}>
      {shown}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="px-6 py-20" style={{ background: "var(--bg-sunken)" }}>
      <div className="mx-auto grid max-w-[1040px] grid-cols-2 gap-y-12 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className="reveal text-center"
            style={{ "--reveal-delay": `${i * 90}ms` }}
          >
            <p className="headline text-5xl md:text-6xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="body-copy mt-2 text-sm md:text-base">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
