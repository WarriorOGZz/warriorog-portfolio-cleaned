import React from "react";
import Header from "./components/Header";
import FadeIn from "./components/FadeIn";
import Presence from "./components/Presence";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";

export default function App() {
  return (
    <div id="top" className="relative min-h-screen bg-paper text-ink transition-colors duration-200">
      {/* Paper Grid Texture Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 grid-paper opacity-40 [mask-image:radial-gradient(120%_90%_at_50%_0%,transparent_30%,#000_85%)]"
      />

      {/* Sticky Header with Navigation & Dark Mode Toggle */}
      <Header />

      <main className="mx-auto w-full max-w-6xl px-4 pb-8 sm:px-6 lg:px-8">
        {/* About Section */}
        <section id="about" className="scroll-mt-24 pb-6 pt-6 sm:pt-10">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,.86fr)_minmax(0,1.14fr)] lg:gap-12">
            
            {/* Left Column: Polaroid Picture & Handwritten Note */}
            <FadeIn className="order-2 lg:order-1">
              <div className="relative mx-auto max-w-sm lg:mx-0">
                <div className="relative -rotate-2 bg-white p-3 pb-16 shadow-polaroid transition-transform duration-300 hover:rotate-0 sm:p-4 sm:pb-20 border border-line/40">
                  <span className="tape -top-3 left-1/2 -translate-x-1/2" />
                  <div className="relative aspect-square w-full overflow-hidden bg-paper2 rounded-[2px]">
                    <img
                      src="/portrait.jpg"
                      alt="WarriorOG"
                      loading="eager"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="absolute bottom-4 left-4 font-hand text-xl text-ink/80 sm:text-2xl">
                    code with purpose, design with passion.
                  </p>
                </div>

                <div className="relative mt-6 pl-1">
                  <span className="inline-block -rotate-1 bg-lime px-3 py-1 font-hand text-3xl font-bold italic leading-none text-ink shadow-[2px_2px_0_rgba(22,22,22,.12)] sm:text-4xl">
                    Look Here!
                  </span>
                  <p className="mt-1 max-w-[32ch] -rotate-1 font-hand text-[1.35rem] leading-snug text-ink/85 sm:text-2xl">
                    Hi, I build full-stack web experiences, developer tools, and Discord-focused projects with clean architecture and considered UI.
                  </p>
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="absolute -right-1 top-2 h-5 w-5 animate-floaty text-lime"
                    aria-hidden="true"
                  >
                    <path d="M12 0c.9 6.6 4.5 10.2 12 12-7.5 1.8-11.1 5.4-12 12-.9-6.6-4.5-10.2-12-12C7.5 10.2 11.1 6.6 12 0Z" />
                  </svg>
                </div>
              </div>
            </FadeIn>

            {/* Right Column: Intro, Education, Skills & Experience */}
            <div className="order-1 lg:order-2">
              <FadeIn>
                <div className="inline-flex items-center gap-2 rounded-full border border-line/70 bg-paper2/80 px-3 py-1 mb-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                    Available for projects & roles
                  </span>
                </div>
                <h1 className="font-garesin text-[3rem] font-medium leading-[1.05] tracking-[0.01em] sm:text-6xl lg:text-[4.6rem] text-ink">
                  WarriorOG
                </h1>
                <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted sm:text-xs">
                  Full-Stack Developer · UI/UX Craftsman · Systems Architect
                </p>
              </FadeIn>

              {/* Education / Foundation */}
              <FadeIn delay={0.05}>
                <div className="mt-8 scroll-mt-24">
                  <h2 className="section-title">Foundation & Studies</h2>
                  <div className="rule mb-4 mt-1.5" />
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                      <div className="flex w-full flex-wrap items-baseline justify-between gap-x-4">
                        <p className="font-mono text-sm leading-relaxed text-ink">
                          Computer Science & Engineering
                          <span className="block text-muted">Core Algorithms, Data Structures & Systems Architecture</span>
                        </p>
                        <span className="font-mono text-xs text-muted">2021 – Present</span>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                      <div className="flex w-full flex-wrap items-baseline justify-between gap-x-4">
                        <p className="font-mono text-sm leading-relaxed text-ink">
                          Full-Stack Web & Interface Design
                          <span className="block text-muted">TypeScript, Next.js, Motion & Design Systems</span>
                        </p>
                        <span className="font-mono text-xs text-muted">2024</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              {/* Skills Section with Staggered Entrance */}
              <SkillsSection />

              {/* Experience */}
              <FadeIn delay={0.1}>
                <div id="experience" className="mt-8 scroll-mt-24">
                  <h2 className="section-title">Experience</h2>
                  <div className="rule mb-4 mt-1.5" />
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                      <p className="font-mono text-sm italic leading-relaxed text-ink">
                        Full-Stack & Frontend Engineer
                        <span className="block not-italic text-muted">Developing modern web apps with TypeScript, React, Next.js & responsive design systems</span>
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                      <p className="font-mono text-sm italic leading-relaxed text-ink">
                        Discord Bot & Systems Architect
                        <span className="block not-italic text-muted">Building automated Discord.js bots, role verification, and backend microservices</span>
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                      <p className="font-mono text-sm italic leading-relaxed text-ink">
                        Open-Source Developer & Freelancer
                        <span className="block not-italic text-muted">10+ public GitHub repositories, minimal interfaces & custom client tooling</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Live Discord & Spotify Presence */}
        <Presence />

        {/* Projects Section with Optimized Slide Experience */}
        <ProjectsSection />

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24 border-t border-line/70 py-12 sm:py-16">
          <div className="grid items-center gap-10 md:grid-cols-[1.1fr_.9fr]">
            <FadeIn>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-muted">
                Let's work together
              </p>
              <h2 className="mt-2 font-garesin text-5xl leading-tight sm:text-6xl text-ink">
                Say hello
              </h2>
              <ul className="mt-7 space-y-4">
                {/* Website */}
                <li>
                  <a
                    href="https://warriorog.in"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-3"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink text-paper transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.7}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    </span>
                    <span className="font-mono text-sm tracking-wide underline-offset-4 group-hover:underline sm:text-base">
                      warriorog.in
                    </span>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.7}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                      className="h-4 w-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </a>
                </li>

                {/* GitHub */}
                <li>
                  <a
                    href="https://github.com/WarriorOGZz"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-3"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink text-paper transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </span>
                    <span className="font-mono text-sm tracking-wide underline-offset-4 group-hover:underline sm:text-base">
                      github.com/WarriorOGZz
                    </span>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.7}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                      className="h-4 w-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </a>
                </li>

                {/* Discord */}
                <li>
                  <a
                    href="https://discord.com/users/1250685386666016789"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-3"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink text-paper transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.418" />
                      </svg>
                    </span>
                    <span className="font-mono text-sm tracking-wide underline-offset-4 group-hover:underline sm:text-base">
                      WarriorOG
                    </span>
                    <span className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-muted">
                      Discord
                    </span>
                  </a>
                </li>
              </ul>

              <a
                href="https://warriorog.in"
                target="_blank"
                rel="noreferrer"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink shadow-md transition hover:-translate-y-0.5 hover:shadow-lg hover:brightness-105"
              >
                Explore warriorog.in
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </a>
            </FadeIn>

            <FadeIn delay={0.1} className="justify-self-center">
              <svg
                viewBox="0 0 120 90"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-40 w-auto animate-floaty text-ink/70 sm:h-56"
                aria-hidden="true"
              >
                <path d="M26 12h62v44H26z" />
                <path d="M32 6h62v44" />
                <path d="M88 12 94 6M88 56l6-6" />
                <path d="M14 70h86l-8-14H26L14 70Z" />
                <path d="M48 63h18" />
                <path d="M34 20h30M34 28h42M34 36h22" opacity=".55" />
              </svg>
            </FadeIn>
          </div>

          <p className="mt-12 text-center font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted">
            © 2026 WarriorOG · warriorog.in
          </p>
        </section>
      </main>
    </div>
  );
}
