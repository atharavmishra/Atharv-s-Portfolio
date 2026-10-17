import Image from "next/image";
import { HiChevronRight } from "react-icons/hi";

// Screens fan out at slightly different depths so the group drifts apart as
// you scroll past it.
const DEPTHS = [0.07, 0.16, 0.1, 0.13];

/**
 * A single screenshot.
 *
 * Some projects' assets are raw edge-to-edge screen captures — those get the
 * CSS phone frame. Others were exported as store mockups with the bezel (and a
 * margin of transparent or black padding) already rendered into the image;
 * wrapping those in a second frame is what leaves a hollow gap around them, so
 * they render bare. Rounding is harmless on the transparent ones and tidies the
 * opaque artwork into a deliberate-looking card.
 */
function Shot({ src, alt, preFramed, className = "", style }) {
  if (preFramed) {
    return (
      <div className={`shot ${className}`} style={style}>
        <Image src={src} alt={alt} layout="responsive" />
      </div>
    );
  }

  return (
    <div className={`device ${className}`} style={style}>
      <div className="device-screen">
        <Image src={src} alt={alt} layout="responsive" />
      </div>
    </div>
  );
}

/**
 * A kiosk screenshot in a slim, square-shouldered bezel — a kiosk panel, not a
 * phone.
 */
function KioskShot({ src, alt, className = "", style }) {
  return (
    <div className={`kiosk-frame ${className}`} style={style}>
      <div className="kiosk-screen">
        <Image src={src} alt={alt} layout="responsive" />
      </div>
    </div>
  );
}

/**
 * Kiosk projects get two large, overlapping screens instead of the phone grid.
 * A kiosk UI is drawn for a 1080 × 1920 panel; split three ways into phone
 * frames it shrinks to an unreadable thumbnail, so the lead screen takes most
 * of the column and a second one overlaps its corner; any further screens run
 * as a smaller strip underneath. Small screens keep the swipeable rail, with
 * every shot.
 */
function KioskStage({ shots, title }) {
  const [lead, second, ...rest] = shots;

  return (
    <>
      <div className="rail -mx-6 px-6 sm:hidden">
        {shots.map((shot, i) => (
          <KioskShot
            key={i}
            src={shot}
            alt={`${title} screen ${i + 1}`}
            className="w-[78vw]"
          />
        ))}
      </div>

      <div className="relative hidden pb-[16%] sm:block">
        <div data-parallax={DEPTHS[0]} className="w-[70%]">
          <KioskShot src={lead} alt={`${title} screen 1`} className="reveal-scale" />
        </div>
        {second && (
          <div data-parallax={DEPTHS[1]} className="absolute bottom-0 right-0 w-[52%]">
            <KioskShot
              src={second}
              alt={`${title} screen 2`}
              className="reveal-scale"
              style={{ "--reveal-delay": "140ms" }}
            />
          </div>
        )}
      </div>

      {/* The remaining screens sit under the pair as a supporting strip. */}
      {rest.length > 0 && (
        <div className="mt-6 hidden grid-cols-3 items-start gap-4 sm:grid">
          {rest.map((shot, i) => (
            <div key={i} data-parallax={DEPTHS[(i + 2) % DEPTHS.length]}>
              <KioskShot
                src={shot}
                alt={`${title} screen ${i + 3}`}
                className="reveal-scale"
                style={{ "--reveal-delay": `${220 + i * 90}ms` }}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

/**
 * Landscape POS tablet screens. Unlike a portrait kiosk, three landscape shots
 * fit as one overlapping cluster: a large lead screen, a second tucked under
 * its right edge and a third under its bottom-left, so none is left stranded
 * in a strip. The fixed aspect box lets the absolute screens be placed as a
 * share of the column width.
 */
function TabletStage({ shots, title }) {
  const [lead, second, third] = shots;
  const placed = [
    { src: second, className: "absolute right-0 top-[37%] z-[2] w-[58%]", delay: 140 },
    { src: third, className: "absolute left-[3%] top-[62%] z-[1] w-[46%]", delay: 220 },
  ].filter((s) => s.src);

  return (
    <>
      <div className="rail -mx-6 px-6 sm:hidden">
        {shots.map((shot, i) => (
          <KioskShot key={i} src={shot} alt={`${title} screen ${i + 1}`} className="w-[86vw]" />
        ))}
      </div>

      <div className="relative hidden aspect-[100/86] sm:block lg:-mr-10">
        <div data-parallax={DEPTHS[0]} className="w-[86%]">
          <KioskShot src={lead} alt={`${title} screen 1`} className="reveal-scale" />
        </div>
        {placed.map((s, i) => (
          <div key={i} data-parallax={DEPTHS[i + 1]} className={s.className}>
            <KioskShot
              src={s.src}
              alt={`${title} screen ${i + 2}`}
              className="reveal-scale"
              style={{ "--reveal-delay": `${s.delay}ms` }}
            />
          </div>
        ))}
      </div>
    </>
  );
}

function DeviceGrid({ shots, title, preFramed }) {
  const cols = shots.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2";
  // Pre-framed art carries ~8% of dead margin per side, so it needs a wider
  // box to read at the same size as a raw screenshot in the rail.
  const railWidth = preFramed ? "w-[72vw]" : "w-[62vw]";

  return (
    <>
      {/* Phones scroll horizontally on small screens, snapping like a Photos rail */}
      <div className="rail -mx-6 px-6 sm:hidden">
        {shots.map((shot, i) => (
          <Shot
            key={i}
            src={shot}
            alt={`${title} screen ${i + 1}`}
            preFramed={preFramed}
            className={railWidth}
          />
        ))}
      </div>

      <div className={`hidden gap-5 sm:grid ${cols}`}>
        {shots.map((shot, i) => (
          <div
            key={i}
            data-parallax={DEPTHS[i % DEPTHS.length]}
            className={i % 2 === 1 ? "sm:mt-10" : ""}
          >
            <Shot
              src={shot}
              alt={`${title} screen ${i + 1}`}
              preFramed={preFramed}
              className="reveal-scale"
              style={{ "--reveal-delay": `${i * 110}ms` }}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default function ProjectShowcase({ projects }) {
  return (
    <section id="work" className="relative">
      <div className="mx-auto max-w-[1040px] px-6 pt-28 pb-4">
        <p className="eyebrow reveal">Selected work</p>
        <h2 className="headline reveal mt-3 text-4xl md:text-6xl" style={{ "--reveal-delay": "80ms" }}>
          Ten products.
          <br />
          <span style={{ color: "var(--text-dim)" }}>One obsession with detail.</span>
        </h2>
        <p
          className="body-copy reveal mt-6 max-w-2xl text-lg"
          style={{ "--reveal-delay": "160ms" }}
        >
          Java, Kotlin and Flutter — from the architecture underneath to the last
          few pixels of the animation curve. Every app below shipped to real
          users.
        </p>
      </div>

      {projects.map((project, index) => {
        const flipped = index % 2 === 1;

        return (
          <article
            key={project.title}
            className="px-6 py-20 md:py-28"
            style={{ background: index % 2 === 0 ? "var(--bg)" : "var(--bg-sunken)" }}
          >
            <div className="mx-auto grid max-w-[1040px] items-center gap-14 lg:grid-cols-2 lg:gap-20">
              <div className={`sticky-col min-w-0 ${flipped ? "lg:order-2" : ""}`}>
                <p className="eyebrow reveal">{project.eyebrow}</p>

                <h3
                  className="headline reveal mt-3 text-4xl md:text-5xl"
                  style={{ "--reveal-delay": "70ms" }}
                >
                  {project.title}
                </h3>

                <p
                  className="body-copy reveal mt-5 text-[17px] md:text-lg"
                  style={{ "--reveal-delay": "140ms" }}
                >
                  {project.description}
                </p>

                <ul
                  className="reveal mt-6 flex flex-wrap gap-2"
                  style={{ "--reveal-delay": "200ms" }}
                >
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full px-3 py-1 text-xs font-medium"
                      style={{
                        border: "1px solid var(--hairline)",
                        color: "var(--text-dim)",
                      }}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                {project.onOpen && (
                  <button
                    type="button"
                    onClick={project.onOpen}
                    className="chev-link reveal mt-7"
                    style={{ "--reveal-delay": "260ms" }}
                  >
                    {project.linkLabel || "View live app"}
                    <HiChevronRight className="chev text-xl" />
                  </button>
                )}

                {project.apk && (
                  <a
                    href={project.apk.url}
                    download
                    className="chev-link reveal mt-7"
                    style={{ "--reveal-delay": "260ms" }}
                  >
                    Download APK
                    <span style={{ color: "var(--text-dim)", fontSize: "0.875rem" }}>
                      &nbsp;· {[project.apk.version, project.apk.size].filter(Boolean).join(" · ")}
                    </span>
                    <HiChevronRight className="chev text-xl" />
                  </a>
                )}
              </div>

              {/* min-w-0: a grid item defaults to min-width:auto, so the
                  scrolling rail's content width would inflate the column and
                  push the whole page into horizontal scroll on phones. */}
              <div className={`min-w-0 ${flipped ? "lg:order-1" : ""}`}>
                {project.layout === "tablet" ? (
                  <TabletStage shots={project.shots} title={project.title} />
                ) : project.layout === "kiosk" ? (
                  <KioskStage shots={project.shots} title={project.title} />
                ) : (
                  <DeviceGrid
                    shots={project.shots}
                    title={project.title}
                    preFramed={project.preFramed}
                  />
                )}
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
