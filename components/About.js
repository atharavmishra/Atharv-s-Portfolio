import Image from "next/image";
import instagramIcon from "../public/instagram.png";

export default function About({ onCompany, onInstagram }) {
  const now = [
    { icon: "🏠", label: "Living in", value: "Noida, India" },
    {
      icon: "💼",
      label: "Building at",
      value: "QueueBuster",
      onClick: onCompany,
    },
    {
      icon: "⏱",
      label: "Working on",
      value: "Restaurant automation platform",
    },
  ];

  return (
    <section id="about" className="py-28" style={{ background: "var(--bg-sunken)" }}>
      <div className="mx-auto grid max-w-[1040px] items-start gap-16 px-6 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow reveal">About</p>
          <h2
            className="headline reveal mt-3 text-4xl md:text-5xl"
            style={{ "--reveal-delay": "80ms" }}
          >
            Small screens.
            <br />
            Big obsession.
          </h2>
          <p
            className="body-copy reveal mt-6 text-[17px] md:text-lg"
            style={{ "--reveal-delay": "150ms" }}
          >
            I&apos;m a mobile app developer with three years spent turning ideas
            into apps people actually keep on their home screen. I care about the
            architecture underneath as much as the animation on top.
          </p>
          <p
            className="body-copy reveal mt-4 text-[17px] md:text-lg"
            style={{ "--reveal-delay": "210ms" }}
          >
            Away from the editor I&apos;m lifting, singing, or writing programming
            memes for the Instagram page I run.
          </p>
        </div>

        <div className="card reveal p-8" style={{ "--reveal-delay": "120ms" }}>
          <p className="eyebrow">Currently</p>

          <ul className="mt-6 space-y-5">
            {now.map((item) => (
              <li key={item.label} className="flex items-start gap-4">
                <span className="text-2xl leading-none">{item.icon}</span>
                <span>
                  <span className="body-copy block text-[13px]">{item.label}</span>
                  {item.onClick ? (
                    <button
                      type="button"
                      onClick={item.onClick}
                      className="text-[17px] font-medium"
                      style={{ color: "var(--accent)" }}
                    >
                      {item.value}
                    </button>
                  ) : (
                    <span className="text-[17px] font-medium">{item.value}</span>
                  )}
                </span>
              </li>
            ))}

            <li className="flex items-start gap-4">
              <span className="relative block h-6 w-6 shrink-0">
                <Image src={instagramIcon} alt="" layout="fill" objectFit="contain" />
              </span>
              <span>
                <span className="body-copy block text-[13px]">Posting memes at</span>
                <button
                  type="button"
                  onClick={onInstagram}
                  className="text-[17px] font-medium"
                  style={{ color: "var(--accent)" }}
                >
                  @andro._world
                </button>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
