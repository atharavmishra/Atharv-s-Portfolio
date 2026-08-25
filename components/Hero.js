import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { HiArrowDown } from "react-icons/hi";
import avatar from "../public/dev-ed-wave.png";

export default function Hero({ onResume, onGithub, onLinkedIn }) {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-24"
    >
      {/* Ambient colour fields */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="orb orb-a"
          style={{
            width: 520,
            height: 520,
            top: "-8%",
            left: "-10%",
            background:
              "radial-gradient(circle, rgba(191,90,242,0.5) 0%, rgba(191,90,242,0.26) 32%, rgba(191,90,242,0.08) 58%, rgba(191,90,242,0) 76%)",
          }}
        />
        <div
          className="orb orb-b"
          style={{
            width: 560,
            height: 560,
            bottom: "-14%",
            right: "-12%",
            background:
              "radial-gradient(circle, rgba(10,132,255,0.5) 0%, rgba(10,132,255,0.24) 32%, rgba(10,132,255,0.07) 58%, rgba(10,132,255,0) 76%)",
          }}
        />
        <div
          className="orb orb-a"
          style={{
            width: 380,
            height: 380,
            top: "34%",
            right: "24%",
            animationDelay: "-6s",
            background:
              "radial-gradient(circle, rgba(255,159,10,0.32) 0%, rgba(255,159,10,0.14) 34%, rgba(255,159,10,0) 72%)",
          }}
        />
      </div>

      <div data-parallax="0.16" className="reveal-scale mb-10">
        <div className="avatar-ring h-40 w-40 md:h-48 md:w-48">
          <div className="avatar-inner h-full w-full">
            <Image src={avatar} alt="Atharv Mishra" layout="fill" objectFit="cover" priority />
          </div>
        </div>
      </div>

      <p
        className="eyebrow reveal mb-4 text-center"
        style={{ "--reveal-delay": "80ms" }}
      >
        Mobile engineer · Android &amp; Flutter
      </p>

      {/* Sized so the longest line ("Apps people keep.") always fits inside
          .mask-line, which clips horizontally as well as vertically. */}
      <h1 className="headline mb-6 text-center text-[9.5vw] leading-[0.95] sm:text-6xl md:text-[4.5rem] lg:text-[5.5rem]">
        <span className="mask-line">
          <span>Atharv Mishra.</span>
        </span>
        <span className="mask-line" style={{ "--reveal-delay": "120ms" }}>
          <span className="text-gradient">Apps people keep.</span>
        </span>
      </h1>

      <p
        className="body-copy reveal mx-auto max-w-[36rem] text-center text-lg md:text-xl"
        style={{ "--reveal-delay": "220ms" }}
      >
        Three years of turning ideas into fast, elegant mobile products — from
        end-to-end lending platforms to AR stargazing and self-checkout kiosks.
      </p>

      <div
        className="reveal mt-9 flex flex-wrap items-center justify-center gap-4"
        style={{ "--reveal-delay": "320ms" }}
      >
        <a href="#work" className="pill">
          See the work
        </a>
        <button type="button" onClick={onResume} className="pill pill-ghost">
          Download résumé
        </button>
      </div>

      <div
        className="reveal mt-8 flex items-center gap-6"
        style={{ "--reveal-delay": "400ms" }}
      >
        <button
          type="button"
          aria-label="GitHub"
          onClick={onGithub}
          className="opacity-60 transition-all duration-300 hover:scale-110 hover:opacity-100"
        >
          <AiFillGithub className="text-2xl" />
        </button>
        <button
          type="button"
          aria-label="LinkedIn"
          onClick={onLinkedIn}
          className="opacity-60 transition-all duration-300 hover:scale-110 hover:opacity-100"
        >
          <AiFillLinkedin className="text-2xl" />
        </button>
      </div>

      <div className="absolute bottom-9 left-1/2 -translate-x-1/2" aria-hidden="true">
        <HiArrowDown className="cue-dot text-xl" style={{ color: "var(--text-dim)" }} />
      </div>
    </section>
  );
}
