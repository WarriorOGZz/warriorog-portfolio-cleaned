import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import FadeIn from './FadeIn';

interface Project {
  title: string;
  description: string;
  repo: string;
  stars: number;
  lang: string;
  langColor: string;
  gradient: string;
  rot: string;
}

const projects: Project[] = [
  {
    title: 'WarXFolio',
    description: 'A cyber-inspired developer portfolio built around clean component architecture, motion, and a responsive design system.',
    repo: 'https://github.com/WarriorOGZz/WarXFolio',
    stars: 3,
    lang: 'TypeScript',
    langColor: '#3178C6',
    gradient: 'linear-gradient(135deg, rgba(49, 120, 198, 0.22), rgba(49, 120, 198, 0.6))',
    rot: '-2.5deg',
  },
  {
    title: 'Glassmorphism Studio',
    description: 'Cinematic portfolio concept using glassmorphism, layered visuals, animated typography, and interactive project cards.',
    repo: 'https://github.com/WarriorOGZz/WarriorOG-Glassmorphism-Landing-Page',
    stars: 1,
    lang: 'TypeScript',
    langColor: '#3178C6',
    gradient: 'linear-gradient(135deg, rgba(210, 224, 69, 0.22), rgba(210, 224, 69, 0.6))',
    rot: '2deg',
  },
  {
    title: 'renime-profile-card',
    description: 'Handcoded animated profile showcase and dynamic interactive card system with customized aesthetic flair.',
    repo: 'https://github.com/WarriorOGZz/renime-profile-card',
    stars: 1,
    lang: 'TypeScript',
    langColor: '#3178C6',
    gradient: 'linear-gradient(135deg, rgba(240, 200, 8, 0.22), rgba(240, 200, 8, 0.6))',
    rot: '-1.5deg',
  },
  {
    title: 'Nocte-Premium',
    description: 'A lightweight standalone interface experiment exploring a more minimal premium dark look and clean typography.',
    repo: 'https://github.com/WarriorOGZz/Nocte-Premium',
    stars: 1,
    lang: 'HTML & CSS',
    langColor: '#E34F26',
    gradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.22), rgba(168, 85, 247, 0.6))',
    rot: '1.8deg',
  },
  {
    title: 'More Repositories',
    description: 'Explore Discord bots, full-stack tools, automation pipelines, and UI experiments on GitHub.',
    repo: 'https://github.com/WarriorOGZz?tab=repositories',
    stars: 10,
    lang: 'GitHub',
    langColor: '#C7D43F',
    gradient: 'linear-gradient(135deg, rgba(199, 212, 63, 0.22), rgba(199, 212, 63, 0.6))',
    rot: '-2deg',
  },
];

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Optimized scroll tracking on the dedicated container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth horizontal slide from side as you scroll down
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ['0%', '0%'] : ['0%', '-52%']
  );

  return (
    <div ref={containerRef} id="projects" className="relative h-[210vh] scroll-mt-12">
      {/* Sticky Viewport Stage */}
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-4 sm:py-6">
        
        {/* Section Header */}
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6">
          <FadeIn>
            <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-1">
              <div>
                <h2 className="section-title">Featured Projects</h2>
                <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                  Scroll down to slide through creations
                </p>
              </div>

              <a
                href="https://github.com/WarriorOGZz"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-muted transition-colors hover:text-ink"
              >
                github.com/WarriorOGZz
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.7}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </a>
            </div>
            
            {/* Header Rule & Progress Tracker */}
            <div className="relative mt-2">
              <div className="rule" />
              <motion.div
                className="absolute top-0 left-0 h-[2px] bg-lime"
                style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
              />
            </div>
          </FadeIn>
        </div>

        {/* Sliding Projects Track: Slides from side on scroll */}
        <div className="w-full overflow-visible">
          <motion.div
            style={{ x, willChange: 'transform' }}
            className="flex items-center gap-6 sm:gap-8 px-4 sm:px-8 md:px-14 w-max"
          >
            {projects.map((project) => (
              <div
                key={project.title}
                className="w-[82vw] sm:w-[380px] md:w-[420px] shrink-0"
              >
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  style={{ ['--rot' as string]: project.rot } as any}
                  className="group flex h-full rotate-[var(--rot)] flex-col rounded-[3px] bg-white p-3.5 pb-5 shadow-polaroid hover:rotate-0 hover:-translate-y-2 hover:shadow-polaroidHover sm:p-4 border border-line/40 dark:border-white/10 transition-[transform,box-shadow] duration-200"
                >
                  {/* Card Art / Preview Banner */}
                  <span
                    className="relative flex aspect-[4/2.6] w-full items-center justify-center overflow-hidden rounded-[2px]"
                    style={{ background: project.gradient }}
                  >
                    {/* Subtle Grid Accent */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 opacity-[0.16]"
                      style={{
                        backgroundImage:
                          'linear-gradient(rgba(0,0,0,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.4) 1px, transparent 1px)',
                        backgroundSize: '18px 18px',
                      }}
                    />

                    {/* Clean Code SVG Icon */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="relative h-11 w-11 text-ink/70 transition-transform duration-200 group-hover:scale-110"
                      aria-hidden="true"
                    >
                      <path d="m9 8-4 4 4 4M15 8l4 4-4 4" />
                    </svg>

                    {/* Star Badge */}
                    <span className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 font-mono text-[0.6rem] text-ink shadow-xs dark:bg-black/75 dark:text-white">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-3 w-3 text-amber-500"
                        aria-hidden="true"
                      >
                        <path d="m12 3.6 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.8l5.9-.9L12 3.6Z" />
                      </svg>{' '}
                      {project.stars}
                    </span>
                  </span>

                  {/* Project Info Header */}
                  <span className="mt-3.5 flex items-baseline justify-between gap-2">
                    <span className="font-garesin text-2xl leading-none text-ink font-bold">
                      {project.title}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-muted">
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: project.langColor }}
                      />
                      {project.lang}
                    </span>
                  </span>

                  {/* Description */}
                  <span className="mt-2 block font-mono text-[0.74rem] leading-relaxed text-muted min-h-[2.8rem]">
                    {project.description}
                  </span>

                  {/* View Repo Action Row */}
                  <span className="mt-3.5 pt-3 border-t border-line/60 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-ink group-hover:text-lime transition-colors">
                      View repo
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.7}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                      >
                        <path d="M5 12h14" />
                        <path d="m13 6 6 6-6 6" />
                      </svg>
                    </span>
                  </span>
                </a>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
}
