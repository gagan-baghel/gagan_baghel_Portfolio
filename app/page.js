'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import SkillGlobeCanvas from '../components/SkillGlobeCanvas';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import { featuredProjects, skillGroups } from '../components/site-data';

const metrics = [
  { label: 'Years Building', value: '4+' },
  { label: 'Projects Shipped', value: '30+' },
  { label: 'Design + Dev Focus', value: 'Full Stack' },
  { label: 'Core Principle', value: 'Clarity' },
];

const workflow = [
  {
    title: 'Discover',
    description: 'I map user intent, constraints, and technical opportunities before drafting interfaces.',
  },
  {
    title: 'Frame',
    description: 'I architect information layers and interaction rhythm to keep dense UIs readable.',
  },
  {
    title: 'Craft',
    description: 'I design and engineer in parallel so visuals and implementation stay production-accurate.',
  },
  {
    title: 'Refine',
    description: 'I tune motion, hierarchy, and accessibility until the experience feels premium and effortless.',
  },
];

export default function HomePage() {
  const mainRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) {
      return undefined;
    }

    let frame = 0;

    const onPointerMove = (event) => {
      if (frame) {
        cancelAnimationFrame(frame);
      }

      frame = requestAnimationFrame(() => {
        const rect = root.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;

        root.style.setProperty('--pointer-x', x.toFixed(3));
        root.style.setProperty('--pointer-y', y.toFixed(3));
      });
    };

    const onPointerLeave = () => {
      root.style.setProperty('--pointer-x', '0');
      root.style.setProperty('--pointer-y', '0');
    };

    root.addEventListener('pointermove', onPointerMove);
    root.addEventListener('pointerleave', onPointerLeave);

    return () => {
      root.removeEventListener('pointermove', onPointerMove);
      root.removeEventListener('pointerleave', onPointerLeave);
      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY || 0);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const heroOffset = Math.min(scrollY * 0.18, 140);
  const heroOpacity = Math.max(1 - scrollY / 360, 0.04);
  const subHeroOffset = Math.min(scrollY * 0.1, 70);

  return (
    <>
      <SiteHeader />

      <main className="site-main" ref={mainRef}>
        <div className="ambient-layer" aria-hidden="true">
          <span className="ambient-shape shape-one"></span>
          <span className="ambient-shape shape-two"></span>
          <span className="ambient-shape shape-three"></span>
          <span className="ambient-shape shape-four"></span>
        </div>

        <section className="hero section shell">
          <div className="hero-copy reveal">
            <div style={{ transform: `translateY(${heroOffset}px)`, opacity: heroOpacity }}>
              <p className="eyebrow">Portfolio 2026 Edition</p>
              <h1 className="hero-title">
                Hey, Gagan is here. I Design <span>Dense, High-Impact</span> Digital Experiences.
              </h1>
              <p className="hero-description" style={{ transform: `translateY(${subHeroOffset}px)` }}>
                I am Gagan Baghel, a fullstack developer focused on turning ambitious ideas into polished,
                performant products. Same design DNA, elevated to modern award-level craft.
              </p>
              <div className="hero-actions">
                <a href="#work" className="btn btn-primary">
                  Explore Work
                </a>
                <a href="#contact" className="btn btn-ghost">
                  Start a Project
                </a>
              </div>
            </div>
          </div>

          <aside className="hero-panel reveal">
            <div className="signal-dot" aria-hidden="true"></div>
            <p className="panel-label">Now Building</p>
            <h2>Next-generation interfaces blending strategy, storytelling, and production-ready engineering.</h2>
            <ul>
              <li>High-density visual hierarchy</li>
              <li>Performance-first architecture</li>
              <li>Fluid motion with clear intent</li>
            </ul>
          </aside>
        </section>

        <section className="signature section shell reveal">
          <div className="signature-copy">
            <p className="eyebrow">Identity</p>
            <h2 className="section-title">Interactive Skill Globe</h2>
            <p className="section-copy">
              This is the modern replacement for your old hover globe: same eye-catching intent, but fully integrated
              into the Next.js component system without external script dependencies.
            </p>
          </div>

          <SkillGlobeCanvas />
        </section>

        <section className="metrics section shell reveal">
          {metrics.map((metric) => (
            <article key={metric.label} className="metric-card">
              <p className="metric-value">{metric.value}</p>
              <p className="metric-label">{metric.label}</p>
            </article>
          ))}
        </section>

        <section id="about" className="section shell about reveal">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="section-title">Crafted With Intent, Engineered With Precision</h2>
            <p className="section-copy">
              I started with classic portfolio styles years ago. Today I focus on richer interfaces with better
              hierarchy, stronger storytelling, and cleaner systems under the hood. I build from first principles,
              optimize for real users, and ship with quality.
            </p>
          </div>
          <div className="about-grid">
            <article className="panel-card">
              <h3>Design Language</h3>
              <p>Deep-night surfaces, electric-teal accents, slate typography, and layered atmospheric gradients.</p>
            </article>
            <article className="panel-card">
              <h3>Delivery Style</h3>
              <p>Research-informed, iteration-heavy, and execution-focused from concept through production.</p>
            </article>
            <article className="panel-card">
              <h3>Quality Bar</h3>
              <p>Sharp visuals, clear interactions, accessible flows, and scalable frontend architecture.</p>
            </article>
          </div>
        </section>

        <section id="skills" className="section shell reveal">
          <p className="eyebrow">Capabilities</p>
          <h2 className="section-title">Skill Architecture</h2>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article key={group.title} className="skill-group">
                <h3>{group.title}</h3>
                <div className="chip-wrap">
                  {group.items.map((item) => (
                    <span key={item} className="skill-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="section shell reveal">
          <div className="section-head">
            <div>
              <p className="eyebrow">Featured Work</p>
              <h2 className="section-title">Selected Projects</h2>
            </div>
            <Link href="/project" className="btn btn-ghost">
              Full Portfolio
            </Link>
          </div>

          <div className="project-grid">
            {featuredProjects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-image-wrap">
                  <Image src={project.image} alt={project.title} fill sizes="(max-width: 900px) 100vw, 33vw" />
                </div>
                <div className="project-body">
                  <div className="project-meta">
                    <span>{project.year}</span>
                    <div className="chip-wrap">
                      {project.tags.map((tag) => (
                        <span key={tag} className="skill-chip small">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell workflow reveal">
          <p className="eyebrow">Workflow</p>
          <h2 className="section-title">From Vision to Release</h2>
          <div className="workflow-grid">
            {workflow.map((step, index) => (
              <article key={step.title} className="workflow-card">
                <span className="step-index">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section shell contact reveal">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="section-title">Let&apos;s Build Something Exceptional</h2>
            <p className="section-copy">
              If you want a portfolio-grade product experience with strong visual identity and clean implementation,
              let&apos;s collaborate.
            </p>
          </div>

          <form
            action="https://formsubmit.co/8dceccfc7d1a6ea003ce596aa34236d6"
            method="POST"
            className="contact-form"
          >
            <label>
              Full Name
              <input type="text" name="user_name" placeholder="Enter your name" required />
            </label>
            <label>
              Email
              <input type="email" name="user_email" placeholder="Enter your email" required />
            </label>
            <label>
              Project Brief
              <textarea name="user_msg" placeholder="Tell me what you want to build" rows={5} required></textarea>
            </label>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
