import Head from "next/head";
import { AiFillLinkedin, AiFillGithub, AiFillFilePdf } from "react-icons/ai";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// Images
import deved from "../public/dev-ed-wave.png";
import oraFinanceMockup from "../public/ora_finance_mockup.png";
import oraFinanceMockup2 from "../public/ora_finance_mockup_2.png";
import oraFinanceMockup3 from "../public/ora_finance_mockup3.png";
import nitr1 from "../public/nitr1.png";
import nitr2 from "../public/nitr2.png";
import nitr3 from "../public/nitr3.png";
import wallpaper_app1 from "../public/wallpaper_app1.png";
import wallpaper_app2 from "../public/wallpaper2.png";
import wallpaper_app3 from "../public/wallpaper3.png";
import nnpic1 from "../public/nnpic5.webp";
import nnpic2 from "../public/nnpic1.webp";
import nnpic3 from "../public/nnpic4.webp";
import selfCheckout from "../public/self_checkout.png";
import selfCheckout2 from "../public/self_checkout_2.png";
import selfCheckout3 from "../public/self_checkout_3.png";

import starmap1 from "../public/starmap1.png";
import starmap2 from "../public/starmap2.png";

import slot1 from "../public/slot1.png";
import slot2 from "../public/slot2.png";
import slot3 from "../public/slot3.png";
import slot4 from "../public/slot4.png";

import androidStudioIcon from "../public/android_studio_icon.png";
import firebaseIcon from "../public/firebase.png";
import javaIcon from "../public/java.png";
import kotlinIcon from "../public/kotlin_logo.png";
import instagramIcon from "../public/instagram.png";
import flutterIcon from "../public/flutter.png";
import dartIcon from "../public/dart.png";

// Reusable components
const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const ProjectShowcase = ({ title, desc, images, link, linkText = "View Live" }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -5 }}
    className="flex flex-col lg:flex-row gap-8 my-24 items-center bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:bg-white/10 hover:shadow-[0_20px_50px_rgba(255,255,255,0.05)] transition-all duration-300"
  >
    <div className="flex-1 w-full flex flex-row gap-4 overflow-x-auto snap-x scrollbar-hide py-4" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
      {images.map((img, idx) => (
        <div key={idx} className="min-w-[70%] sm:min-w-[45%] lg:min-w-[45%] snap-center rounded-2xl overflow-hidden relative shadow-2xl border border-white/10">
          <Image src={img} layout="responsive" objectFit="cover" alt={`${title} screenshot ${idx + 1}`} />
        </div>
      ))}
    </div>
    <div className="flex-1 w-full lg:pl-8 space-y-6">
      <h3 className="text-3xl lg:text-5xl font-semibold tracking-tight text-white">{title}</h3>
      <p className="text-gray-400 text-lg leading-relaxed">{desc}</p>
      {link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noreferrer"
          className="inline-block bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform"
        >
          {linkText}
        </a>
      )}
    </div>
  </motion.div>
);

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Hide default scrollbar on project scroll views using standard CSS in useEffect or via globals, but easier inline above
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white/30 overflow-x-hidden">
      <Head>
        <title>Atharv Mishra | Mobile Developer</title>
        <meta name="description" content="Portfolio of Atharv Mishra, Mobile App Developer." />
      </Head>

      {/* Sticky Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 w-full z-50 flex justify-between items-center px-8 lg:px-20 py-6 bg-black/50 backdrop-blur-xl border-b border-white/10"
      >
        <h1 className="text-xl font-medium tracking-tight text-white">Atharv.</h1>
        <div className="flex gap-6 items-center">
          <a href="https://github.com/atharavmishra" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-colors">Github</a>
          <a href="https://www.linkedin.com/in/atharv-mishra-1149821a9" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-colors hidden sm:block">LinkedIn</a>
          <a href="/atharv_mishra.pdf" download="AtharvResume.pdf" className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors">Resume</a>
        </div>
      </motion.nav>

      <main className="pt-32 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <section className="min-h-[85vh] flex flex-col justify-center items-center text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -20, 0]
            }}
            transition={{ 
              opacity: { duration: 1, ease: [0.16, 1, 0.3, 1] },
              scale: { duration: 1, ease: [0.16, 1, 0.3, 1] },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            whileHover={{ scale: 1.05 }}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-12 border border-white/10 shadow-[0_0_80px_rgba(255,255,255,0.05)] relative bg-white/5 cursor-pointer"
          >
            <Image src={deved} layout="responsive" objectFit="cover" priority alt="Atharv" />
          </motion.div>
          
          <FadeIn>
            <motion.h2 
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              whileHover={{ scale: 1.02 }}
              style={{ backgroundSize: "200% auto" }}
              className="text-6xl md:text-8xl font-semibold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-400 to-white pb-4 cursor-default"
            >
              Atharv Mishra
            </motion.h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h3 className="text-2xl md:text-4xl text-gray-400 font-medium tracking-tight mb-6">
              Mobile App Developer
            </h3>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Crafting premium mobile experiences for Android and iOS. 4+ years turning complex problems into intuitive, stunning applications.
            </p>
          </FadeIn>
        </section>

        {/* Currently Section */}
        <FadeIn delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-20">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl flex flex-col justify-center space-y-4 hover:bg-white/10 transition-colors">
              <h4 className="text-2xl font-medium tracking-tight text-white">Current Status</h4>
              <ul className="text-gray-400 space-y-3 text-lg">
                <li className="flex items-center gap-3">📍 <span>Based in Noida</span></li>
                <li className="flex items-center gap-3">💼 <span>Working for <a href="https://queuebuster.co/" className="text-white underline hover:text-gray-300" target="_blank" rel="noreferrer">QueueBuster</a></span></li>
                <li className="flex items-center gap-3">🚀 <span>Building Restaurant Automation</span></li>
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl flex flex-col justify-center items-start hover:bg-white/10 transition-colors">
              <h4 className="text-2xl font-medium tracking-tight mb-4 text-white">Meme Creator</h4>
              <p className="text-gray-400 text-lg mb-6">When I'm not coding, I run a programming meme page.</p>
              <a href="https://www.instagram.com/andro._world/" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-white/10 px-5 py-3 rounded-full hover:bg-white/20 transition-colors border border-white/5">
                <div className="w-6 h-6 relative"><Image src={instagramIcon} layout="fill" alt="Instagram" /></div>
                <span className="text-white">@andro._world</span>
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Tech Stack */}
        <section className="py-24 border-t border-white/5">
          <FadeIn>
            <h3 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-16 text-center text-white">Tech Arsenal.</h3>
          </FadeIn>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { src: androidStudioIcon, name: "Android Studio" },
              { src: kotlinIcon, name: "Kotlin" },
              { src: javaIcon, name: "Java" },
              { src: firebaseIcon, name: "Firebase" },
              { src: flutterIcon, name: "Flutter" },
              { src: dartIcon, name: "Dart" },
            ].map((tech, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 w-36 h-40 flex flex-col items-center justify-center hover:scale-110 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  <div className="w-16 h-16 relative mb-4 drop-shadow-xl">
                    <Image src={tech.src} layout="fill" objectFit="contain" alt={tech.name} />
                  </div>
                  <span className="text-sm font-medium text-gray-300">{tech.name}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="py-24 border-t border-white/5">
          <FadeIn>
            <h3 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-4 text-white">Selected Works.</h3>
            <p className="text-gray-400 text-xl mb-16 max-w-3xl">A showcase of the mobile applications I've engineered, designed, and launched.</p>
          </FadeIn>

          <ProjectShowcase 
            title="Ora Finance App"
            desc="End-to-end loan application ensuring KYC, e-Sign, and loan management. Built with a focus on seamless user experience and strict best practices, resulting in zero warnings."
            images={[oraFinanceMockup2, oraFinanceMockup, oraFinanceMockup3]}
            link="https://play.google.com/store/apps/details?id=com.app.orafinancecustomer"
          />

          <ProjectShowcase 
            title="Hello NITR"
            desc="Flutter application bridging the communication gap between faculty and students at NIT Rourkela, providing instant updates and resources."
            images={[nitr3, nitr1, nitr2]}
            link="https://play.google.com/store/apps/details?id=com.nitrkl.hellonitr"
          />

          <ProjectShowcase 
            title="Wallpaper App"
            desc="A stunning, high-performance wallpaper application allowing users to browse and set millions of high-quality images directly to their devices."
            images={[wallpaper_app1, wallpaper_app2, wallpaper_app3]}
            link="https://play.google.com/store/apps/details?id=com.dktlabs.wallpapers"
          />

          <ProjectShowcase 
            title="No Names Social"
            desc="An anonymous social networking platform designed for privacy-first interactions and community building without identity constraints."
            images={[nnpic1, nnpic2, nnpic3]}
            link="https://play.google.com/store/apps/details?id=com.nonamessocialmedia"
          />

          <ProjectShowcase 
            title="Self-Checkout Kiosk"
            desc="Deployed at Wonderla to allow guests to seamlessly order food with digital payments, drastically reducing queues and optimizing operations."
            images={[selfCheckout, selfCheckout2, selfCheckout3]}
            linkText="Deployed Kiosk"
          />

          <ProjectShowcase 
            title="AR Star Map"
            desc="An immersive AR stargazing application that turns your device into a window to the cosmos. Identify planets like Jupiter, Mars, and Venus, and deep sky objects like the Orion Nebula in real-time."
            images={[starmap1, starmap2]}
          />

          <ProjectShowcase 
            title="QueueBuster Slot Booking Kiosk"
            desc="A sleek Flutter-based kiosk application for amusement parks. It allows guests to browse attractions, select time slots, and specify party size. Features a highly responsive UI, live backend integration for slot availability, and instant QR-code thermal ticket printing for frictionless ride admission."
            images={[slot1, slot2, slot3, slot4]}
          />
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20 bg-black py-12 px-8 lg:px-20 text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight mb-2 text-white">Atharv Mishra</h2>
            <p className="text-gray-500 mb-1">Android & Flutter Developer</p>
            <p className="text-gray-500 hover:text-white transition-colors cursor-pointer"><a href="mailto:atharvmishra77@gmail.com">atharvmishra77@gmail.com</a></p>
          </div>
          <div className="flex gap-6 text-3xl justify-center md:justify-start">
             <a href="https://github.com/atharavmishra" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noreferrer"><AiFillGithub /></a>
             <a href="https://www.linkedin.com/in/atharv-mishra-1149821a9" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p className="mb-4 md:mb-0 w-full text-center md:text-left">© 2024 Atharv Mishra. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
