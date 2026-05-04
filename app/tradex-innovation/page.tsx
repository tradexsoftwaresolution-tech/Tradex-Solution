"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { CountUpAnimation } from "@/components/CountUpAnimation";
import { ParallaxBackground } from "@/components/ParallaxBackground";

const stats = [
  { value: "120+", label: "Systems delivered across multiple business environments.", numericValue: 120 },
  { value: "10+", label: "Industries supported with scalable digital solutions.", numericValue: 10 },
  { value: "2–6w", label: "Typical delivery cycle for production-ready systems.", numericValue: null },
];

const solutions = [
  {
    title: "Custom System Development",
    description: "Design and build tailored software systems aligned with operational and business needs.",
    points: ["Architecture design", "Scalable backend systems", "Secure and reliable deployments"],
  },
  {
    title: "Digital Product Engineering",
    description: "Create modern digital products with performance, usability, and scalability in mind.",
    points: ["Full-stack development", "User-focused interfaces", "Continuous iteration and improvement"],
  },
  {
    title: "Process Automation",
    description: "Streamline workflows and reduce manual effort with intelligent automation solutions.",
    points: ["Workflow automation", "System integrations", "Efficiency optimization"],
  },
];

const workflow = [
  {
    step: "01",
    title: "Discover",
    description: "Understand requirements, constraints, and opportunities for system design.",
  },
  {
    step: "02",
    title: "Design",
    description: "Create scalable architectures and user-focused system flows.",
  },
  {
    step: "03",
    title: "Build",
    description: "Develop reliable, high-performance systems ready for production.",
  },
  {
    step: "04",
    title: "Scale",
    description: "Deploy, optimize, and evolve systems as business needs grow.",
  },
];

const services = [
  "System architecture",
  "Product engineering",
  "Automation workflows",
  "API integrations",
  "Deployment and scaling",
];

const differentiators = [
  "Deep technical expertise across modern software stacks and architectures.",
  "Tailored solutions that align with your business goals and constraints.",
  "Modern development practices that improve quality, speed, and maintainability.",
  "Hands-on support for teams adopting new systems and workflows.",
];

const navItems = [
  { label: "Solutions", href: "#solutions" },
  { label: "Workflow", href: "#workflow" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const contactDetails = [
  { label: "Address", value: "16/1 Maligawa Road, Ethul Kotte, Kotte, Sri Lanka" },
  { label: "Email", value: "info@tradexinnovation.com" },
  { label: "Phone", value: "+94 77 874 5847" },
  { label: "Hours", value: "Monday - Friday: 8 AM to 5 PM | Saturday: 8 AM to 12 PM" },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400/80">
        {eyebrow}
      </p>
      <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {/* Highlight key phrases with brand color */}
        {title.split(" ").map((word, i) => {
          const highlights = ["innovative", "scalable", "modern", "intelligent", "performance"];
          const isHighlight = highlights.some(h => word.toLowerCase().includes(h));
          return (
            <span key={i}>
              {isHighlight ? <span className="text-blue-500">{word}</span> : word}{" "}
            </span>
          );
        })}
      </h2>
      <p className="text-base leading-7 text-zinc-400 sm:text-lg">{description}</p>
    </div>
  );
}

/**
 * Hero operational card with floating animation and metric count-up
 */
function HeroCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, rotateX: 10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 60, rotateX: 10 }}
      transition={{ duration: 1, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative"
    >
      {/* Pulsing glow behind card */}
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-white/5 to-blue-950/30 blur-2xl animate-pulse-glow" />

      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl"
      >
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Operational view</p>
            <p className="mt-2 font-heading text-2xl font-semibold text-white">From idea to deployment</p>
          </div>
          <div className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200">
            Live workflow
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "Architecture design",
            "Development & testing",
            "System integration",
            "Production deployment",
          ].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="group rounded-3xl border border-white/10 bg-black/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/20 hover:bg-black/40"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">
                0{index + 1}
              </p>
              <p className="mt-8 font-heading text-xl text-white">{item}</p>
            </motion.div>
          ))}
        </div>

        {/* Metric card with count-up animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="relative mt-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-blue-500/12 to-transparent p-5"
        >
          {/* Subtle animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 bg-[length:200%_100%] animate-flow" />
          
          <div className="relative">
            <p className="text-sm uppercase tracking-[0.26em] text-blue-300/80">
              Efficiency gain
            </p>
            <div className="mt-3 flex items-end justify-between gap-6">
              <p className="max-w-sm text-sm leading-6 text-zinc-300">
                Streamline development cycles and reduce manual effort by moving to modern, automated workflows.
              </p>
              <p className="font-heading text-4xl font-semibold text-white">
                +<CountUpAnimation end={40} duration={2.5} />%
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function TradexInnovationPage() {
  return (
    <main className="relative isolate overflow-hidden">
      {/* Static background gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.2),_transparent_28%),radial-gradient(circle_at_80%_0%,_rgba(29,78,216,0.18),_transparent_24%),linear-gradient(180deg,_#030303_0%,_#09090b_48%,_#030303_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh-grid bg-[size:72px_72px] opacity-[0.08]" />
      
      {/* Parallax animated blobs */}
      <ParallaxBackground />

      {/* Signature scanning light effect - subtle premium touch */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute h-full w-[200px] bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-xl animate-scan" />
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2 shadow-[0_16px_40px_rgba(0,0,0,0.28)] backdrop-blur">
              <img
                src="/Gemini_Generated_Image_v1z8tzv1z8tzv1z8-removebg-preview.png"
                alt="Tradex Innovation"
                className="h-11 w-auto sm:h-12"
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-zinc-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-blue-500/40 hover:bg-blue-500/10"
          >
            Start a Project
          </a>
        </div>
      </header>

      <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-16 px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          {/* Hero text with staggered animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-zinc-300"
            >
              Building innovative systems
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="max-w-4xl font-heading text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
              >
                <span className="text-blue-500">Innovative systems</span> and digital products built for real-world performance.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl"
              >
                We design and develop scalable systems, platforms, and automation tools that help businesses operate smarter.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#solutions"
                className="group inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600 hover:shadow-glow-hover"
              >
                Explore Solutions
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
              >
                Why Tradex
              </a>
            </motion.div>
          </motion.div>

          {/* Operational card with floating animation */}
          <HeroCard />
        </div>

        {/* Stats with stagger animation */}
        <StaggerContainer className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <StaggerItem key={stat.value}>
              <div className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.06] hover:shadow-glow-sm">
                <p className="font-heading text-3xl font-semibold text-white">
                  {stat.numericValue ? (
                    <>
                      <CountUpAnimation end={stat.numericValue} duration={2} />+
                    </>
                  ) : (
                    stat.value
                  )}
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <section id="solutions" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Core solutions"
            title="Built to power modern digital operations with scalable and intelligent systems."
            description=""
          />
        </AnimatedSection>

        <StaggerContainer className="mt-12 grid gap-6 lg:grid-cols-3">
          {solutions.map((solution) => (
            <StaggerItem key={solution.title}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.06] hover:shadow-glow-sm"
              >
                {/* Gradient overlay that fades in on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 opacity-0 transition-opacity duration-500 group-hover:from-blue-500/5 group-hover:via-transparent group-hover:to-transparent group-hover:opacity-100" />
                
                <div className="relative">
                  <div className="inline-flex rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.3em] text-zinc-400 transition-colors group-hover:border-blue-500/30 group-hover:text-blue-400/80">
                    Solution
                  </div>
                  <h3 className="mt-6 font-heading text-2xl font-semibold text-white">
                    {solution.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-400">{solution.description}</p>
                  <ul className="mt-8 space-y-3 text-sm text-zinc-300">
                    {solution.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-blue-500 transition-transform group-hover:scale-125" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <section id="workflow" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Connected workflow"
              title="From concept to scalable system with modern development practices."
              description=""
            />
          </AnimatedSection>

          {/* Workflow pipeline with connecting lines */}
          <div className="relative">
            {/* Connecting line - vertical on mobile, grid on desktop */}
            <div className="absolute left-8 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-blue-500/40 via-blue-500/20 to-blue-500/40 sm:block" />
            
            <StaggerContainer className="relative grid gap-4 sm:grid-cols-2">
              {workflow.map((item, index) => (
                <StaggerItem key={item.step}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 transition-all duration-300 hover:border-blue-500/40 hover:shadow-glow-sm"
                  >
                    {/* Animated gradient border effect on hover */}
                    <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 opacity-0 transition-opacity duration-500 group-hover:from-blue-500/10 group-hover:via-transparent group-hover:to-transparent group-hover:opacity-100" />
                    
                    <div className="relative">
                      <motion.p
                        whileHover={{ scale: 1.1 }}
                        className="text-sm font-semibold tracking-[0.24em] text-blue-400/80 transition-colors group-hover:text-blue-400"
                      >
                        {item.step}
                      </motion.p>
                      <h3 className="mt-6 font-heading text-2xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-zinc-400">{item.description}</p>
                    </div>

                    {/* Flowing indicator line */}
                    {index < workflow.length - 1 && (
                      <div className="absolute -bottom-2 right-6 h-px w-12 bg-gradient-to-r from-blue-500/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    )}
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <AnimatedSection>
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 lg:p-10"
            >
              <SectionHeading
                eyebrow="About Tradex"
                title="Built to deliver scalable, high-performance systems for modern businesses."
                description="Tradex Innovation combines technical expertise with business understanding. The goal is not just software delivery, but a measurable upgrade in speed, reliability, and operational efficiency."
              />

              <StaggerContainer className="mt-10 grid gap-4 md:grid-cols-2">
                {differentiators.map((item) => (
                  <StaggerItem key={item}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="group rounded-3xl border border-white/10 bg-black/30 p-5 transition-all duration-300 hover:border-blue-500/20 hover:bg-black/40 hover:shadow-glow-sm"
                    >
                      <p className="text-sm leading-7 text-zinc-300">{item}</p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-500/12 via-white/[0.04] to-white/[0.03] p-8"
              >
                {/* Subtle animated gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100" />
                
                <div className="relative">
                  <p className="text-xs uppercase tracking-[0.3em] text-blue-400/80">Vision</p>
                  <h3 className="mt-4 font-heading text-3xl font-semibold text-white">
                    Technology that helps businesses <span className="text-blue-500">innovate</span> and scale.
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-300">
                    Reduce technical debt, enable better collaboration, and create the conditions for sustainable growth.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Services</p>
                <StaggerContainer className="mt-6 grid gap-3">
                  {services.map((service) => (
                    <StaggerItem key={service}>
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-zinc-300 transition-all duration-300 hover:border-blue-500/20 hover:bg-black/40"
                      >
                        {service}
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <AnimatedSection>
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 lg:p-10"
            >
              <SectionHeading
                eyebrow="Contact"
                title="Let's build a faster, more intelligent system together."
                description=""
              />

              <div className="mt-10 space-y-5">
                {contactDetails.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-b border-white/10 pb-5 last:border-b-0"
                  >
                    <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">{item.label}</p>
                    <p className="mt-2 text-sm leading-7 text-zinc-300">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.005 }}
              transition={{ duration: 0.3 }}
              className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 lg:p-10"
            >
              <div className="mb-8 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Get in touch</p>
                  <h3 className="mt-3 font-heading text-3xl font-semibold text-white">
                    Tell us what you need to <span className="text-blue-500">build</span>.
                  </h3>
                </div>
                <div className="hidden rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-200 md:block">
                  Reply in 24-48 hours
                </div>
              </div>

              <form className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm text-zinc-300">
                    Name
                    <input
                      type="text"
                      placeholder="Your name"
                      className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-500/40 focus:shadow-glow-sm"
                    />
                  </label>
                  <label className="grid gap-2 text-sm text-zinc-300">
                    Email
                    <input
                      type="email"
                      placeholder="you@company.com"
                      className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-500/40 focus:shadow-glow-sm"
                    />
                  </label>
                </div>

                <label className="grid gap-2 text-sm text-zinc-300">
                  Company
                  <input
                    type="text"
                    placeholder="Company or brand"
                    className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-500/40 focus:shadow-glow-sm"
                  />
                </label>

                <label className="grid gap-2 text-sm text-zinc-300">
                  Project brief
                  <textarea
                    rows={5}
                    placeholder="What system or product are you looking to build or improve?"
                    className="rounded-[1.5rem] border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-500/40 focus:shadow-glow-sm"
                  />
                </label>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200 hover:shadow-lg"
                >
                  Send inquiry
                </motion.button>
              </form>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-zinc-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>Developed by Tradex Innovation Team</p>
          <p>Copyright (c) 2026 Tradex Innovation. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}