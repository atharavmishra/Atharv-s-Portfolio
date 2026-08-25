import { useEffect, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import { HiMenuAlt4, HiX } from "react-icons/hi";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#stack", label: "Stack" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav({ onGithub }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The rendered markup can't depend on the theme (it's resolved before React
  // boots), so both glyphs ship and CSS picks one. No hydration mismatch.
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch (e) {
      /* private mode — the toggle still works for this session */
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={`glass transition-all duration-500 ${
          scrolled ? "hairline-b" : ""
        }`}
        style={{ borderBottomColor: scrolled ? "var(--hairline)" : "transparent" }}
      >
        <div
          className={`mx-auto flex max-w-[1040px] items-center justify-between px-6 transition-all duration-500 ${
            scrolled ? "h-12" : "h-16"
          }`}
        >
          <a
            href="#top"
            className="text-[15px] font-semibold tracking-tight"
            style={{ color: "var(--text)" }}
          >
            Atharv Mishra
          </a>

          <ul className="hidden items-center gap-9 md:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-[13px] opacity-80 transition-opacity duration-300 hover:opacity-100"
                  style={{ color: "var(--text)" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Toggle colour theme"
              onClick={toggleTheme}
              className="grid h-8 w-8 place-items-center rounded-full transition-transform duration-300 hover:scale-110"
              style={{ color: "var(--text)" }}
            >
              <BsMoonStarsFill className="text-[15px] dark:hidden" />
              <BsSunFill className="hidden text-[16px] dark:block" />
            </button>

            <button
              type="button"
              aria-label="GitHub profile"
              onClick={onGithub}
              className="hidden h-8 w-8 place-items-center rounded-full transition-transform duration-300 hover:scale-110 sm:grid"
              style={{ color: "var(--text)" }}
            >
              <AiFillGithub className="text-[19px]" />
            </button>

            <button
              type="button"
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-8 w-8 place-items-center md:hidden"
              style={{ color: "var(--text)" }}
            >
              {open ? <HiX className="text-xl" /> : <HiMenuAlt4 className="text-xl" />}
            </button>
          </div>
        </div>

        {/* Mobile sheet — height-animated so it slides rather than pops */}
        <div
          className="overflow-hidden transition-all duration-500 md:hidden"
          style={{
            maxHeight: open ? 260 : 0,
            borderTop: open ? "1px solid var(--hairline)" : "1px solid transparent",
          }}
        >
          <ul className="px-6 py-2">
            {LINKS.map((link) => (
              <li key={link.href} style={{ borderBottom: "1px solid var(--hairline)" }}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 text-[17px] font-medium"
                  style={{ color: "var(--text)" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Reading progress */}
      <div className="h-[2px] w-full" style={{ background: "transparent" }}>
        <div
          data-progress
          className="progress h-full w-full"
          style={{
            background:
              "linear-gradient(90deg, #bf5af2, #ff375f, #ff9f0a, #30d158, #0a84ff)",
          }}
        />
      </div>
    </header>
  );
}
