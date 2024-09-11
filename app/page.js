import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4 justify-center bg-gradient-to-r from-background-start to-background-end px-1 py-1 md:px-2 md:py-2">
      {/* left Intro section with fixed on left */}
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            Akash R P
          </h1>

          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            Full-Stack Developer: React, Node.js, and AWS
          </h2>
          <p className="mt-4 max-w-xs leading-normal text-slate-400">
            I'm a dedicated full-stack developer with a strong focus on building
            scalable and efficient web applications using React, Node.js, and
            AWS. I love crafting responsive interfaces and robust backend
            systems.
          </p>
          <nav className=" hidden lg:block ">
            <ul className="mt-16 w-max">
              <li className="flex gap-2 items-center justify-center">
                <Link
                  href="#about"
                  className="flex items-center py-3 text-slate-400 hover:text-slate-50 hover:text-xl"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="flex items-center py-3 text-slate-400 hover:text-slate-50 hover:text-xl"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="flex items-center py-3 text-slate-400 hover:text-slate-50 hover:text-xl"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="flex items-center py-3 text-slate-400 hover:text-slate-50 hover:text-xl"
                >
                  Skills
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <ul className="ml-1 mt-8 flex items-center">
          <li className="mr-5 text-xs shrink-0 cursor-pointer">
            <Link
              href="https://github.com/Akashrp512"
              className="block hover:text-slate-200"
              aria-label="GitHub (opens in a new tab)"
              target="_blank"
            ></Link>
            <span className="sr-only">Github</span>
            <Image
              src="/assets/github.svg"
              width={24}
              height={24}
              alt="Github Icon"
            />
          </li>
          <li className="mr-5 text-xs shrink-0">
            <Link
              href="https://www.linkedin.com/in/akashrp/"
              className="block hover:text-slate-200"
              aria-label="LinkedIn (opens in a new tab)"
              target="_blank"
            ></Link>
            <span className="sr-only">LinkedIn</span>
            <Image
              src="/assets/linkedin.svg"
              width={24}
              height={24}
              alt="LinkedIn Icon"
            />
          </li>
          <li className="mr-5 text-xs shrink-0">
            <Link
              href="https://www.instagram.com/aakash.rp/"
              className="block hover:text-slate-200"
              aria-label="Instagram (opens in a new tab)"
              target="_blank"
            ></Link>
            <span className="sr-only">Instagram</span>
            <Image
              src="/assets/instagram.svg"
              width={24}
              height={24}
              alt="Instagram Icon"
            />
          </li>
        </ul>
      </header>
      <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
        <section
          id="about"
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          area-label="About Akash"
        >
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              About
            </h2>
          </div>
          <div>
            <p className="mb-4">
              My journey into web development began in 2023 when I transitioned
              from working on college projects to taking on real-world software
              development challenges. Over time, I've worked on various
              projects, including building donation websites, managing complex
              e-commerce systems, and collaborating with startups and digital
              project studios.
              <Link
                href="https://www.youthoppia.com/"
                className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              >
                Waste Management App
              </Link>
              , a{" "}
              <Link
                href="https://www.meticulousbeaver.com/"
                className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              >
                Wedding Planner E-commerce
              </Link>
              , and a{" "}
              <Link
                className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                href="https://www.rkctrust.com/"
              >
                Donation Campaign
              </Link>
            </p>
            <p className="mb-4">
              Currently, I specialize in full-stack development, crafting
              engaging frontend experiences with React while architecting
              powerful backend solutions using Node.js. I am passionate about
              creating software that is not only functional but also delivers an
              intuitive and seamless user experience.
            </p>
            <p className="mb-4">
              When I’m not coding, I enjoy keeping up with the latest technology
              trends, experimenting with new tools and attending tech meetups.
              In my free time, you can find me reading, exploring new recipes,
              or watching drama or action movies.
            </p>
          </div>
        </section>
        <section
          id="experience"
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              Experience
            </h2>
          </div>
          <div>
            <ol className="group/list">
              <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                    2024 — Present
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200"></h3>
                    <div>
                      <Link
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                        href="/"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          Associate Software Engineer
                          <span className="inline-block mt-3 text-zinc-400">
                            {" "}
                            ThinkJS Pvt Ltd, Bangalore
                          </span>
                          <p className="mt-2 text-sm leading-normal">
                            Developed the backend of a waste management app
                            using Node.js and PostgreSQL, integrating PayPal for
                            payment handling. Built a Next.js-based donation
                            campaign website with Tailwind CSS for UI and Redux
                            for state management. Developed backend services for
                            an inventory management system using NextJS and Zoho
                            One for streamlined operations. Created an admin
                            portal for a ride-hailing app (MyCommute), handling
                            passenger management, driver onboarding, and data
                            analytics.
                          </p>
                          <ul className="mt-2 flex flex-wrap">
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                Javascript
                              </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                TypeScript
                              </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                Nodejs
                              </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                Express
                              </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                Postgres / MySQL
                              </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                React
                              </div>
                            </li>
                          </ul>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                    2023 — 2024
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200"></h3>
                    <div>
                      <Link
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                        href="/"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          Full-Stack Developer Intern{" "}
                          <span className="inline-block mt-3 text-zinc-400">
                            {" "}
                            Way2agribusiness India Pvt Ltd, Bangalore
                          </span>
                          <p className="mt-2 text-sm leading-normal">
                            Migrated a PHP-based website to a modern
                            Django-React (Next.js) stack, enhancing scalability
                            and user experience. Built a MERN stack e-commerce
                            app for agricultural products, significantly
                            improving digital sales channels. Deployed multiple
                            websites on DigitalOcean, optimizing for uptime and
                            performance. Developed SEO-friendly Next.js
                            applications, increasing web traffic and boosting
                            visibility.
                          </p>
                          <ul className="mt-2 flex flex-wrap">
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                Javascript
                              </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                NextJS
                              </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                Django
                              </div>
                            </li>
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                MongoDB
                              </div>
                            </li>
                          </ul>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            </ol>
            <div className="mt-12">
              <Link
                className="inline-flex items-baseline leading-tight  hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
                href="/resume.pdf"
                target="_blank"
              >
                <span>
                  View Full
                  <span className="inline-block">{`Resume`}</span>
                </span>
              </Link>
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              Projects
            </h2>
          </div>
          <div>
            <ul>
              <li className="mb-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                      <Link
                        href="https://www.youthoppia.com/"
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>{`Waste Management App`}</span>
                        {/* <span className="inline-block">{` App (Icon)`}</span> */}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      Developed the backend using Node.js and PostgreSQL.
                      Integrated PayPal for wallet and payment processing. Built
                      features for waste collection, user and collector
                      management, notifications, and multi-country support.
                    </p>
                  </div>
                  <Image
                    src="/assets/youcan-admin-dashboard.png"
                    alt="image"
                    className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                    width={200}
                    height={150}
                  />
                </div>
              </li>
              <li className="mb-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                      <Link
                        href="https://www.meticulousbeaver.com/"
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>Wedding Planner E-commerce Website</span>{" "}
                        {/* <span className="inline-block">App (Icon)</span> */}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      Built backend services using Next.js and Zoho One for
                      inventory management. Integrated Razorpay for secure
                      online payments and used DynamoDB for storing
                      Zoho-generated tokens.
                    </p>
                  </div>
                  <Image
                    src="/assets/meteculous-beaver.png"
                    alt="image"
                    className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                    width={200}
                    height={150}
                  />
                </div>
              </li>
              <li className="mb-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                      <Link
                        href="https://www.rkctrust.com/"
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>Donation Campaign Website (RKCTRUST)</span>{" "}
                        {/* <span className="inline-block">App (Icon)</span> */}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      Created a Next.js donation website for clinics and
                      hospitals. Developed the admin portal for managing
                      donation campaigns, ensuring efficient management and
                      accessibility.
                    </p>
                  </div>
                  <Image
                    src="/assets/rkct-hero.png"
                    alt="image"
                    className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                    width={200}
                    height={150}
                  />
                </div>
              </li>
            </ul>
          </div>
        </section>
        {/* <section
          id="blogs"
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        >
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              Blogs
            </h2>
          </div>
          <div>
            <ul>
              <li className="mb-12">
                <div className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <Image
                    className="z-10 col-span-2 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2"
                    width={200}
                    height={48}
                    src="/assets/course-card.webp"
                  />
                  <div className="z-10 col-span-6">
                    <p className="-mt-1 text-sm font-semibold leading-6">
                      2020
                    </p>
                    <h3 className="-mt-1">
                      <Link
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                        href="/"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          Integrating Algolia Search with WordPress
                          <span className="inline-block">Multisite(Icon)</span>
                        </span>
                      </Link>
                    </h3>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section> */}
        {/* <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
          <p>
            Loosely designed in {""}
            <Link
              href="/"
              className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
            >
              Figma
            </Link>
            Loosely designed in Figma and coded in Visual Studio Code by yours
            truly. Built with Next.js and Tailwind CSS, deployed with Vercel.
            All text is set in the Inter typeface.
          </p>
        </footer> */}
      </main>
    </div>
  );
};

export default Home;

{
  /* <style>
.libutton {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 7px;
  text-align: center;
  outline: none;
  text-decoration: none !important;
  color: #ffffff !important;
  width: 200px;
  height: 32px;
  border-radius: 16px;
  background-color: #0A66C2;
  font-family: "SF Pro Text", Helvetica, sans-serif;
}
</style>
<a class="libutton" href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=akashrp" target="_blank">Follow on LinkedIn</a>

 */
}
