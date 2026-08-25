import Head from "next/head";

import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import ProjectShowcase from "../components/ProjectShowcase";
import TechSection from "../components/TechSection";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import useScrollFx from "../components/useScrollFx";

import oraFinanceMockup from "../public/ora_finance_mockup.png";
import oraFinanceMockup2 from "../public/ora_finance_mockup_2.png";
import oraFinanceMockup3 from "../public/ora_finance_mockup3.png";
import nitr1 from "../public/nitr1.png";
import nitr2 from "../public/nitr2.png";
import nitr3 from "../public/nitr3.png";
import wallpaper1 from "../public/wallpaper_app1.png";
import wallpaper2 from "../public/wallpaper2.png";
import wallpaper3 from "../public/wallpaper3.png";
import nnpic1 from "../public/nnpic5.webp";
import nnpic2 from "../public/nnpic1.webp";
import nnpic3 from "../public/nnpic4.webp";
import selfCheckout1 from "../public/self_checkout.png";
import selfCheckout2 from "../public/self_checkout_2.png";
import selfCheckout3 from "../public/self_checkout_3.png";
import starmap1 from "../public/starmap1.png";
import starmap2 from "../public/starmap2.png";
import slot1 from "../public/slot1.png";
import slot2 from "../public/slot2.png";
import slot3 from "../public/slot3.png";
import slot4 from "../public/slot4.png";

const openExternal = (url) => () => window.open(url, "_blank", "noopener,noreferrer");

const PLAY = "https://play.google.com/store/apps/details?id=";

export default function Home() {
  useScrollFx();

  const onGithub = openExternal("https://github.com/atharavmishra");
  const onLinkedIn = openExternal("https://www.linkedin.com/in/atharv-mishra-1149821a9");
  const onInstagram = openExternal("https://www.instagram.com/andro._world/");
  const onCompany = openExternal("https://queuebuster.co/");

  const onResume = () => {
    const link = document.createElement("a");
    link.href = "/atharv_mishra.pdf";
    link.download = "AtharvResume.pdf";
    link.click();
  };

  const projects = [
    {
      eyebrow: "Fintech · Android",
      title: "Ora Finance",
      description:
        "An end-to-end lending app built to best practice, with almost no code warnings in the whole codebase. It streamlines KYC, e-Sign, repayments, loan status and the customer ledger behind an interface that stays calm under all of it.",
      tags: ["Kotlin", "MVVM", "KYC & e-Sign", "Payments"],
      shots: [oraFinanceMockup2, oraFinanceMockup, oraFinanceMockup3],
      preFramed: true,
      onOpen: openExternal(`${PLAY}com.app.orafinancecustomer&pcampaignid=web_share`),
      linkLabel: "View on Google Play",
    },
    {
      eyebrow: "Campus · Flutter",
      title: "Hello NITR",
      description:
        "A Flutter app for NIT Rourkela that closes the communication gap between faculty and students — announcements, academics and campus life in one place.",
      tags: ["Flutter", "Dart", "Firebase"],
      shots: [nitr3, nitr1, nitr2],
      preFramed: true,
      onOpen: openExternal(`${PLAY}com.nitrkl.hellonitr&pcampaignid=web_share`),
      linkLabel: "View on Google Play",
    },
    {
      eyebrow: "Consumer · Android",
      title: "Wallpapers",
      description:
        "Browse millions of high-resolution images and set any of them as your wallpaper. Built around fast image pipelines, aggressive caching and a browsing experience that never stutters.",
      tags: ["Kotlin", "Image caching", "REST"],
      shots: [wallpaper1, wallpaper2, wallpaper3],
      preFramed: true,
      onOpen: openExternal(`${PLAY}com.dktlabs.wallpapers&pcampaignid=web_share`),
      linkLabel: "View on Google Play",
    },
    {
      eyebrow: "Social · Android",
      title: "No Names",
      description:
        "I led development on a social platform built for anonymous conversation — realtime feeds, moderation tooling and identity that stays deliberately out of the way.",
      tags: ["Kotlin", "Firebase", "Realtime"],
      shots: [nnpic1, nnpic2, nnpic3],
      preFramed: true,
      onOpen: openExternal(`${PLAY}com.nonamessocialmedia&pcampaignid=web_share`),
      linkLabel: "View on Google Play",
    },
    {
      eyebrow: "Kiosk · Wonderla",
      title: "Self-Checkout Kiosk",
      description:
        "A self-checkout kiosk that lets guests order food and merchandise on their own with digital payments — cutting queue times and freeing staff for the work that matters.",
      tags: ["Android", "Digital payments", "Unattended UX"],
      shots: [selfCheckout1, selfCheckout2, selfCheckout3],
      preFramed: true,
    },
    {
      eyebrow: "Augmented reality",
      title: "AR Star Map",
      description:
        "An immersive stargazing app that turns a phone into a window on the cosmos. Point it anywhere to identify Jupiter, Mars, Venus and deep-sky objects like the Orion Nebula in real time.",
      tags: ["AR", "Sensor fusion", "Realtime rendering"],
      shots: [starmap1, starmap2],
    },
    {
      eyebrow: "Kiosk · Flutter",
      title: "Slot Booking Kiosk",
      description:
        "A kiosk app for amusement parks where guests browse attractions, pick a time slot and set party size. Live backend integration keeps availability honest, and QR thermal tickets print instantly for frictionless ride admission.",
      tags: ["Flutter", "Live availability", "Thermal printing"],
      shots: [slot1, slot2, slot3, slot4],
    },
  ];

  return (
    <>
      <Head>
        <title>Atharv Mishra — Mobile App Developer</title>
        <meta
          name="description"
          content="Atharv Mishra is a mobile app developer building Android and Flutter products — fintech, social, AR and self-checkout kiosks."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#fbfbfd" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta property="og:title" content="Atharv Mishra — Mobile App Developer" />
        <meta
          property="og:description"
          content="Android and Flutter products, shipped end to end."
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav onGithub={onGithub} />

      <main>
        <Hero onResume={onResume} onGithub={onGithub} onLinkedIn={onLinkedIn} />
        <Stats />
        <ProjectShowcase projects={projects} />
        <TechSection />
        <About onCompany={onCompany} onInstagram={onInstagram} />
        <Contact onGithub={onGithub} onLinkedIn={onLinkedIn} onResume={onResume} />
      </main>

      <Footer onGithub={onGithub} onLinkedIn={onLinkedIn} onInstagram={onInstagram} />
    </>
  );
}
