import Image from "next/image";
import androidStudioIcon from "../public/android_studio_icon.png";
import kotlinIcon from "../public/kotlin_logo.png";
import javaIcon from "../public/java.png";
import firebaseIcon from "../public/firebase.png";
import flutterIcon from "../public/flutter.png";
import dartIcon from "../public/dart.png";

const TECH = [
  { name: "Android Studio", icon: androidStudioIcon },
  { name: "Kotlin", icon: kotlinIcon },
  { name: "Java", icon: javaIcon },
  { name: "Firebase", icon: firebaseIcon },
  { name: "Flutter", icon: flutterIcon },
  { name: "Dart", icon: dartIcon },
];

const CAPABILITIES = [
  {
    title: "Architecture that holds",
    body: "MVVM, clean module boundaries and a codebase that ships with virtually no warnings.",
  },
  {
    title: "Payments, KYC & e-Sign",
    body: "Secure gateways and full lending flows — onboarding through repayment ledgers.",
  },
  {
    title: "Realtime & offline",
    body: "Firebase-backed sync that stays honest when the network doesn't.",
  },
  {
    title: "Kiosk & hardware",
    body: "Self-checkout terminals, thermal QR ticket printing and unattended reliability.",
  },
  {
    title: "AR & sensors",
    body: "Camera, gyroscope and sky-mapping maths rendered live at 60fps.",
  },
  {
    title: "Interface craft",
    body: "Motion, spacing and typography tuned until the app feels effortless.",
  },
];

function Chip({ name, icon }) {
  return (
    <div
      className="mx-2.5 flex h-16 shrink-0 items-center gap-3 rounded-2xl px-5"
      style={{ border: "1px solid var(--hairline)", background: "var(--bg-elevated)" }}
    >
      <span className="relative block h-7 w-7">
        {/* Eager: lazy loading is unreliable inside a continuously animating
            strip, and a marquee scrolling past with missing logos looks broken. */}
        <Image src={icon} alt="" layout="fill" objectFit="contain" loading="eager" />
      </span>
      <span className="whitespace-nowrap text-[15px] font-medium">{name}</span>
    </div>
  );
}

export default function TechSection() {
  return (
    <section id="stack" className="py-28" style={{ background: "var(--bg)" }}>
      <div className="mx-auto max-w-[1040px] px-6">
        <p className="eyebrow reveal">The toolkit</p>
        <h2
          className="headline reveal mt-3 text-4xl md:text-6xl"
          style={{ "--reveal-delay": "80ms" }}
        >
          Built with the
          <br />
          <span className="text-gradient">sharpest tools.</span>
        </h2>
      </div>

      {/* Seamless loop: the track is rendered twice and slides exactly 50% */}
      <div className="marquee-track fade-x mt-14 overflow-hidden">
        <div className="marquee">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex" aria-hidden={copy === 1}>
              {TECH.map((tech) => (
                <Chip key={`${copy}-${tech.name}`} {...tech} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-20 grid max-w-[1040px] gap-5 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {CAPABILITIES.map((cap, i) => (
          <div
            key={cap.title}
            className="card reveal p-7"
            style={{ "--reveal-delay": `${(i % 3) * 90}ms` }}
          >
            <h3 className="text-[19px] font-semibold tracking-tight">{cap.title}</h3>
            <p className="body-copy mt-2 text-[15px]">{cap.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
