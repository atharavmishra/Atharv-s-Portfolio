export default function Footer({ onGithub, onLinkedIn, onInstagram }) {
  const links = [
    { label: "Work", href: "#work" },
    { label: "Stack", href: "#stack" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const externals = [
    { label: "GitHub", onClick: onGithub },
    { label: "LinkedIn", onClick: onLinkedIn },
    { label: "Instagram", onClick: onInstagram },
  ];

  return (
    <footer className="px-6 pb-14 pt-12" style={{ background: "var(--bg-sunken)" }}>
      <div className="mx-auto max-w-[1040px]">
        <div
          className="flex flex-col gap-6 pb-8 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderBottom: "1px solid var(--hairline)" }}
        >
          <div>
            <p className="text-[15px] font-semibold tracking-tight">Atharv Mishra</p>
            <p className="body-copy text-[13px]">Mobile app developer · Android &amp; Flutter</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="body-copy text-[13px] transition-colors duration-300 hover:opacity-70"
              >
                {link.label}
              </a>
            ))}
            {externals.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={link.onClick}
                className="body-copy text-[13px] transition-colors duration-300 hover:opacity-70"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="body-copy flex flex-col gap-2 pt-6 text-[12px] sm:flex-row sm:justify-between">
          <p>Copyright © 2026 Atharv Mishra. All rights reserved.</p>
          <p>
            Designed and built with <span style={{ color: "#ff375f" }}>♥</span> in Noida.
          </p>
        </div>
      </div>
    </footer>
  );
}
