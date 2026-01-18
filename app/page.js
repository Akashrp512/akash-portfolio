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
            Backend Engineer | APIs • AWS • Node.js
          </h2>
          <p className="mt-4 max-w-xs text-justify leading-normal text-slate-400">
            I build reliable, scalable backend systems and cloud-native APIs that solve real-world problems. My work focuses on Node.js, PostgreSQL, and AWS, powering SaaS products with high performance and maintainability. I enjoy tackling backend challenges from API design to asynchronous workflows and real-time features.          </p>
          <nav className=" hidden lg:block ">
            <ul className="mt-16 w-max">
              <li>
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
              {/* <li>
                <Link
                  href="#skills"
                  className="flex items-center py-3 text-slate-400 hover:text-slate-50 hover:text-xl"
                >
                  Skills
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
        <ul className="ml-1 mt-8 flex items-center">
          <li className="mr-5 text-xs shrink-0 hover:cursor-pointer">
            <Link
              href="https://github.com/Akashrp512"
              className="block hover:text-slate-200"
              aria-label="GitHub (opens in a new tab)"
              target="_blank"
            >
              <span className="sr-only">Github</span>
              <Image
                src="/assets/github.svg"
                width={24}
                height={24}
                alt="Github Icon"
              />
            </Link>
          </li>
          <li className="mr-5 text-xs shrink-0 hover:cursor-pointer">
            <Link
              href="https://www.linkedin.com/in/akashrp/"
              className="block hover:text-slate-200"
              aria-label="LinkedIn (opens in a new tab)"
              target="_blank"
            >
              <span className="sr-only">LinkedIn</span>
              <Image
                src="/assets/linkedin.svg"
                width={24}
                height={24}
                alt="LinkedIn Icon"
              />
            </Link>
          </li>
          <li className="mr-5 text-xs shrink-0 hover:cursor-pointer">
            <Link
              href="https://www.instagram.com/aakash.rp/"
              className="block hover:text-slate-200"
              aria-label="Instagram (opens in a new tab)"
              target="_blank"
            >
              <span className="sr-only">Instagram</span>
              <Image
                src="/assets/instagram.svg"
                width={24}
                height={24}
                alt="Instagram Icon"
              />
            </Link>
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
              {/* My journey into web development began in 2023 when I shifted from
              working on college projects to tackling real-world software
              development challenges. Since then, I've worked on diverse
              projects such as the Waste Management App, Wedding Planner
              E-commerce, and Donation Campaign Websites */}
              I am a backend-focused engineer based in Bengaluru with 3 years of experience building production-grade systems. I’ve contributed to multiple SaaS and enterprise platforms where reliability, data integrity, and performance matter.              {/* <Link
                href="https://www.youthoppia.com/"
                className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                aria-label="Waste management App"
                target="_blank"
              >
                Waste Management App
              </Link>
              , a{" "}
              <Link
                href="https://www.meticulousbeaver.com/"
                className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                aria-label="Wedding planner website"
                target="_blank"
              >
                Wedding Planner E-commerce
              </Link>
              , and a{" "}
              <Link
                className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                href="https://www.rkctrust.com/"
                aria-label="Donation campaign Website"
                target="_blank"
              >
                Donation Campaign
              </Link> */}
            </p>
            <p className="mb-4">
              My strengths include designing clean RESTful APIs, optimizing database workflows, and implementing cloud services using AWS (Lambda, S3, RDS, EC2). I write backend modules that are observable, maintainable, and built for scale. I use Redis for caching and queues, and integrate real-time features using Firebase or WebSockets when business needs require event-driven communication. </p>
            <p className="mb-4">
              Across domains like waste management, healthcare, and ed-tech, I enjoy improving systems that make life easier for users while keeping engineering quality high.            </p>
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
                    June 2023 — Present
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200"></h3>
                    <div>
                      <Link
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                        href="https://www.thinkjs.co/"
                        aria-label="Thinkjs Pvt Ltd Website"
                        target="_blank"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          Associate Software Engineer
                          <span className="inline-block mt-3 text-zinc-400">
                            {" "}
                            ThinkJS Pvt Ltd, Bangalore
                          </span>
                          <p className="mt-2 text-sm leading-normal">
                            At ThinkJS, I work on backend development for SaaS and enterprise platforms. My responsibilities include building and maintaining REST APIs, implementing background job workflows, and integrating cloud services using AWS. I have contributed to systems involving geospatial logic, payment integrations, real-time updates, and scalable backend infrastructure, ensuring performance and reliability in production environments.                          </p>
                          <ul
                            className="mt-2 flex flex-wrap"
                            area-label="Related links"
                          >
                            <li className="mr-4">
                              <Link
                                className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                                href="https://www.youthoppia.com"
                              >
                                <Image
                                  src="/assets/icons/link.svg"
                                  alt="Link Icon"
                                  width={12}
                                  height={12}
                                  className="mr-1"
                                />
                                <span>Waste Management</span>
                              </Link>
                            </li>
                            <li className="mr-4">
                              <Link
                                className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                                href="https://www.lifedemy.in/"
                              >
                                <Image
                                  src="/assets/icons/link.svg"
                                  alt="Link Icon"
                                  width={12}
                                  height={12}
                                  className="mr-1"
                                />
                                <span>Lifedemy</span>
                              </Link>
                            </li>
                            <li className="mr-4">
                              <Link
                                className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                                href="https://www.rkctrust.com"
                              >
                                <Image
                                  src="/assets/icons/link.svg"
                                  alt="Link Icon"
                                  width={12}
                                  height={12}
                                  className="mr-1"
                                />
                                <span>D Campaign</span>
                              </Link>
                            </li>
                            <li className="mr-4">
                              <Link
                                className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                                href="https://www.rkctrust.com"
                              >
                                <Image
                                  src="/assets/icons/link.svg"
                                  alt="Link Icon"
                                  width={12}
                                  height={12}
                                  className="mr-1"
                                />
                                <span>Wedding Planner</span>
                              </Link>
                            </li>
                          </ul>
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
                    Feb 2023 — Jun 2023
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200"></h3>
                    <div>
                      <Link
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                        href="https://www.way2agribusiness.com/"
                        aria-label="Way2agribusness Pvt Ltd Website"
                        target="_blank"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          Full-Stack Developer Intern{" "}
                          <span className="inline-block mt-3 text-zinc-400">
                            {" "}
                            Way2agribusiness India Pvt Ltd, Bangalore
                          </span>
                          <p className="mt-2 text-sm leading-normal">
                            During my internship, I worked on modernizing parts of a legacy system by migrating features to a Node.js and Next.js-based stack. I built backend APIs, supported frontend development, and handled deployments and optimizations on cloud servers, gaining end-to-end product exposure.
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
                  View Full Resume
                  {/* <span className="inline-block">{`Resume`}</span> */}
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
                        href="https://www.iqvia.com/"
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                        aria-label="Waste management Platform (Youcan)"
                        target="_blank"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>{`IQVIA NextGen Speaker Bureau (Healthcare Platform)`}</span>
                        {/* <span className="inline-block">{` App (Icon)`}</span> */}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      A large-scale healthcare engagement platform used to manage speaker programs and related workflows. I worked on backend systems supporting complex engagement lifecycles, including scheduling, task automation, and compliance-related tracking. My contributions involved building and maintaining REST APIs, implementing event-driven workflows, and integrating real-time updates across web and mobile applications. The platform required high reliability, data consistency, and traceability to support enterprise and healthcare compliance standards.
                    </p>
                    {/* <a
                      className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                      href="/"
                    >
                      <span>70k Users</span>
                    </a> */}
                  </div>
                  <Image
                    src="/assets/iqvia.svg"
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
                        href="https://www.youthoppia.com/"
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                        aria-label="Waste management Platform (Youcan)"
                        target="_blank"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>{`Waste Management Platform - Youcan`}</span>
                        {/* <span className="inline-block">{` App (Icon)`}</span> */}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      A SaaS platform designed to manage waste collection and recycling workflows. I worked on backend systems that supported user, driver, and admin applications, focusing on API development, cloud integrations, background processing, and geospatial features.
                    </p>
                    {/* <a
                      className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                      href="/"
                    >
                      <span>70k Users</span>
                    </a> */}
                  </div>
                  <Image
                    src="/assets/youcan.png"
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
                        href="https://talentberry.in/"
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                        aria-label="AI based Interview platform"
                        target="_blank"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>AI based Interview Platform - TalentBerry</span>{" "}
                        {/* <span className="inline-block">App (Icon)</span> */}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      A platform built to conduct and manage technical interviews using AI-powered tools. I contributed to backend workflows, API integrations, and system components designed to handle interview data efficiently and securely.
                    </p>
                  </div>
                  <Image
                    src="/assets/talentberry.png"
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
                        aria-label="Wedding planner website"
                        target="_blank"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>Wedding Planner E-commerce Website</span>{" "}
                        {/* <span className="inline-block">App (Icon)</span> */}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      An e-commerce application for managing wedding-related services and bookings. I worked on backend APIs for product management, orders, and checkout flows, ensuring scalability and smooth user experiences.
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
                        href="https://www.lifedemy.in/"
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                        aria-label="life coaching ed-tech platform"
                        target="_blank"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>Ed-Tech Platform - Lifedemy</span>{" "}
                        {/* <span className="inline-block">App (Icon)</span> */}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      An online learning platform focused on courses and user engagement. I developed backend APIs for analytics and reporting features, helping track user activity and improve platform insights.                    </p>
                  </div>
                  <Image
                    src="/assets/lifedemy.png"
                    alt="image"
                    className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                    width={200}
                    height={150}
                  />
                </div>
              </li>
            </ul>
            {/* <div className="mt-12">
              <Link
                className="inline-flex items-baseline leading-tight  hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
                href="/projects"
                target="_blank"
              >
                <span>
                  View Full
                  <span className="inline-block">Project Archive</span>
                </span>
              </Link>
            </div> */}
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
        <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
          <h4>Open to backend engineering roles and cloud-focused opportunities.</h4>
          <Link href="mailto:akashrp512@gmail.com">
            <button>Say Hello</button>
          </Link>
        </footer>
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
