import { AiFillGithub, AiFillLinkedin, AiFillFilePdf } from "react-icons/ai";

export default function Contact({ onGithub, onLinkedIn, onResume }) {
  const socials = [
    { Icon: AiFillGithub, label: "GitHub", onClick: onGithub },
    { Icon: AiFillLinkedin, label: "LinkedIn", onClick: onLinkedIn },
    { Icon: AiFillFilePdf, label: "Résumé", onClick: onResume },
  ];

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden px-6 py-32 text-center"
      style={{ background: "var(--bg)" }}
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="orb orb-b"
          style={{
            width: 620,
            height: 620,
            left: "50%",
            top: "10%",
            marginLeft: -310,
            background:
              "radial-gradient(circle, rgba(48,209,88,0.28) 0%, rgba(10,132,255,0.22) 38%, rgba(10,132,255,0.06) 62%, rgba(10,132,255,0) 78%)",
          }}
        />
      </div>

      <p className="eyebrow reveal">Contact</p>

      <h2
        className="headline reveal mx-auto mt-3 max-w-3xl text-4xl md:text-6xl"
        style={{ "--reveal-delay": "80ms" }}
      >
        Have an app that
        <br />
        <span className="text-gradient">deserves to feel great?</span>
      </h2>

      <div
        className="reveal mt-10 flex flex-wrap items-center justify-center gap-4"
        style={{ "--reveal-delay": "180ms" }}
      >
        <a href="mailto:atharvmishra77@gmail.com" className="pill">
          atharvmishra77@gmail.com
        </a>
        <a href="tel:+918755328239" className="pill pill-ghost">
          +91 87553 28239
        </a>
      </div>

      <div
        className="reveal mt-10 flex items-center justify-center gap-7"
        style={{ "--reveal-delay": "250ms" }}
      >
        {socials.map(({ Icon, label, onClick }) => (
          <button
            key={label}
            type="button"
            aria-label={label}
            onClick={onClick}
            className="opacity-55 transition-all duration-300 hover:scale-110 hover:opacity-100"
          >
            <Icon className="text-2xl" />
          </button>
        ))}
      </div>
    </section>
  );
}
