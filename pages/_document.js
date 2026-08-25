import { Html, Head, Main, NextScript } from "next/document";

// Runs before first paint. It only touches <html>, which React does not
// render, so there is nothing for hydration to mismatch.
//
//  1. Applies the saved / system theme so it never flashes.
//  2. Arms the scroll-animation styles (`js-anim`) ahead of paint so revealed
//     elements don't flicker into view before the observer attaches.
//  3. Disarms them automatically after 4s. useScrollFx clears this timer on
//     mount, so if the JS bundle ever fails to run the page still shows all of
//     its content instead of staying blank.
const bootstrap = `
(function () {
  var el = document.documentElement;
  try {
    var stored = localStorage.getItem("theme");
    var dark = stored
      ? stored === "dark"
      : !window.matchMedia("(prefers-color-scheme: light)").matches;
    el.classList.toggle("dark", dark);
  } catch (e) {
    el.classList.add("dark");
  }
  try {
    el.classList.add("js-anim");
    window.__revealSafety = setTimeout(function () {
      el.classList.remove("js-anim");
    }, 4000);
  } catch (e) {}
})();
`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: bootstrap }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
