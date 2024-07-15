import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillFilePdf,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
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
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const handleRedirect = () => {
    window.open('https://github.com/atharavmishra', '_blank');
  };

  const handleRedirect1 = () => {
    window.open('https://github.com/atharavmishra', '_blank');
  };

  const handleRedirect2 = () => {
    window.open('https://github.com/atharavmishra', '_blank');
  };

  const handleRedirect3 = () => {
    window.open('https://github.com/atharavmishra', '_blank');
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/atharva_mishra.pdf';
    link.download = 'AtharvResume.pdf';
    link.click();
  };

  const handleRedirectLinkedIn = () => {
    window.open('https://www.linkedin.com/in/atharv-mishra-1149821a9', '_blank');
  };


  return (
    <div className={`${darkMode ? "dark" : ""} w-full h-full`}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">developed by Atharv</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                  onClick={handleRedirect}
                >
                  Github
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Atharv Mishra
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Android App developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Hey there! I'm an Android developer with 2.5 years of experience of crafting awesome mobile applications. With a passion for turning ideas into stunning apps, I specialize in creating magic on small screens. From sleek designs to seamless functionality, I bring apps to life with my skills. Let's build something amazing together! 🚀  </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <div className="flex justify-center">
                <AiFillFilePdf
                  className="text-5xl text-gray-600 dark:text-gray-400 cursor-pointer"
                  onClick={handleDownload}
                />
              </div>
              <div className="flex justify-center">
                <AiFillLinkedin
                  className="text-5xl text-gray-600 dark:text-gray-400 cursor-pointer"
                  onClick={handleRedirectLinkedIn}
                />
              </div>

              <div className="flex justify-center">
                <AiFillGithub
                  className="text-5xl text-gray-600 dark:text-gray-400 cursor-pointer"
                  onClick={handleRedirect}
                />
              </div>
            </div>
            <div className="flex justify-center mt-20">
              <div className="bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden md:h-96 md:w-96">
                <Image src={deved} layout="responsive" objectFit="cover"/>
              </div>
            </div>

          </div>

        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">My Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I've been developing Android apps for over 4 years now, and I really enjoy creating mobile applications that users love to interact with. I'm skilled in languages like Java and Kotlin, and I use tools like Android Studio to bring ideas to life. From designing how apps look and feel to connecting them with online services, I focus on making sure everything works smoothly. I'm always learning new ways to improve user experiences and make apps more reliable and efficient.
            </p>

          </div>
          <div className="lg:flex gap-10">
            <div className="text-start p-10 rounded-xl my-10 flex-1 flex flex-wrap" style={{ height: 'auto' }}>
              <div className="w-full lg:w-1/3 p-2">
                <div className="shadow-2xl rounded-lg overflow-hidden bg-white dark:bg-gray-800" style={{ width: '100%', position: 'relative' }}>
                  <Image src={oraFinanceMockup2} layout="responsive" objectFit="cover" />
                </div>
              </div>
              <div className="w-full lg:w-1/3 p-2">
                <div className="shadow-2xl rounded-lg overflow-hidden bg-white dark:bg-gray-800" style={{ width: '100%', position: 'relative' }}>
                  <Image src={oraFinanceMockup} layout="responsive" objectFit="cover" />
                </div>
              </div>
              <div className="w-full lg:w-1/3 p-2">
                <div className="shadow-2xl rounded-lg overflow-hidden bg-white dark:bg-gray-800" style={{ width: '100%', position: 'relative' }}>
                  <Image src={oraFinanceMockup3} layout="responsive" objectFit="cover" />
                </div>
              </div>


              <div className="w-full lg:w-full p-4 shadow-lg rounded-lg bg-white dark:bg-gray-800">
                <h3 className="text-4xl py-2 text-gray-300 font-medium dark:text-gray-400 md:text-3xl">
                  Ora Finance App
                </h3>
                <p className="py-2 text-gray-800 dark:text-gray-200">
                  Developed end-to-end loan application to streamline the process of KYC, e-Sign, loan repayments, loan status, customer ledger and much more with really elegant and user friendly UI design.
                </p>
                <div className="flex justify-center mt-6">
                  <a
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md"
                    href="#"
                    onClick={handleRedirect1}
                  >
                    Live App
                  </a>
                </div>
              </div>

            </div>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-start p-10 rounded-xl my-10 flex-1 flex flex-wrap" style={{ height: 'auto' }}>
              <div className="w-full lg:w-1/3 p-2">
                <div className="shadow-2xl rounded-lg overflow-hidden bg-white dark:bg-gray-800" style={{ width: '100%', position: 'relative' }}>
                  <Image src={nitr3} layout="responsive" objectFit="cover" />
                </div>
              </div>
              <div className="w-full lg:w-1/3 p-2">
                <div className="shadow-2xl rounded-lg overflow-hidden bg-white dark:bg-gray-800" style={{ width: '100%', position: 'relative' }}>
                  <Image src={nitr1} layout="responsive" objectFit="cover" />
                </div>
              </div>
              <div className="w-full lg:w-1/3 p-2">
                <div className="shadow-2xl rounded-lg overflow-hidden bg-white dark:bg-gray-800" style={{ width: '100%', position: 'relative' }}>
                  <Image src={nitr2} layout="responsive" objectFit="cover" />
                </div>
              </div>
              <div className="w-full lg:w-full p-4 shadow-lg rounded-lg bg-white dark:bg-gray-800">
                <h3 className="text-3xl text-gray-300 font-medium dark:text-gra-400 md:text-3xl">
                  Hello NITR(NIT Rourkela) App
                </h3>
                <p className="py-2 text-gray-800 dark:text-gray-200">
                  Was finalist in NITR Hacksagon 2023 and Developed an App for students of NIT Rourkela that contains the contact informations of all the faculty members and lets you connect with
                  them.
                </p>
                <div className="flex justify-center mt-6">
                  <a
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md"
                    href="#"
                    onClick={handleRedirect2}
                  >
                    Live App
                  </a>
                </div>
              </div>

            </div>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-start p-10 rounded-xl my-10 flex-1 flex flex-wrap" style={{ height: 'auto' }}>
              <div className="w-full lg:w-1/3 p-2">
                <div className="shadow-2xl rounded-lg overflow-hidden bg-white dark:bg-gray-800" style={{ width: '100%', position: 'relative' }}>
                  <Image src={wallpaper_app1} layout="responsive" objectFit="cover" />
                </div>
              </div>

              <div className="w-full lg:w-1/3 p-2">
                <div className="shadow-2xl rounded-lg overflow-hidden bg-white dark:bg-gray-800" style={{ width: '100%', position: 'relative' }}>
                  <Image src={wallpaper_app2} layout="responsive" objectFit="cover" />
                </div>
              </div>
              <div className="w-full lg:w-1/3 p-2">
                <div className="shadow-2xl rounded-lg overflow-hidden bg-white dark:bg-gray-800" style={{ width: '100%', position: 'relative' }}>
                  <Image src={wallpaper_app3} layout="responsive" objectFit="cover" />
                </div>
              </div>
              <div className="w-full lg:w-full p-4 shadow-lg rounded-lg bg-white dark:bg-gray-800">
                <h3 className="text-4xl py-2 text-gray-300 font-medium dark:text-gray-400 md:text-4xl">
                  Wallpaper App
                </h3>
                <p className="py-2 text-gray-800 dark:text-gray-200">
                  Developed a wallpaper app where you can browse through millions of High Quality pictures and use them as wallpaper.
                </p>
                <div className="flex justify-center mt-6">
                  <a
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md"
                    href="#"
                    onClick={handleRedirect3}
                  >
                    Live App
                  </a>
                </div>
              </div>


            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
