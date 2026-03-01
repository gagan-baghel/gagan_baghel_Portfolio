'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import SkillGlobeCanvas from '../components/SkillGlobeCanvas';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import { allProjects, featuredProjects } from '../components/site-data';

const metrics = [
  { label: 'Experience', value: '2+ Years' },
  { label: 'Frontend Load Time', value: '-45%' },
  { label: 'Pipeline Runtime', value: '-50%' },
  { label: 'Production Apps', value: '19+' },
];

const workflow = [
  {
    title: 'Plan',
    description: 'Break product requirements into technical milestones and delivery phases.',
  },
  {
    title: 'Build',
    description: 'Develop frontend, backend APIs, and data workflows with clean architecture.',
  },
  {
    title: 'Optimize',
    description: 'Improve performance with profiling, code-splitting, query tuning, and caching.',
  },
  {
    title: 'Ship',
    description: 'Deploy production-ready systems, monitor outcomes, and iterate quickly.',
  },
];

const serviceModes = [
  {
    title: 'Enterprise Dashboards',
    summary: 'Owned business-critical web platforms using React, Next.js, and TypeScript.',
  },
  {
    title: 'Data-Heavy Systems',
    summary: 'Designed and optimized ETL workflows processing millions of records.',
  },
  {
    title: 'Full-Stack Product Delivery',
    summary: 'Built and shipped end-to-end applications across frontend, backend, and deployment.',
  },
  {
    title: 'Performance Engineering',
    summary: 'Improved loading and runtime performance using architecture and query-level optimizations.',
  },
];

const proofPoints = [
  { value: 'Millions', label: 'Rows Processed In ETL' },
  { value: '70%', label: 'Peak Load-Time Improvement' },
  { value: '45%', label: 'Frontend Load-Time Reduction' },
  { value: '50%', label: 'Pipeline Runtime Reduction' },
  { value: '5+', label: 'Production Apps Delivered' },
  { value: '2+ Years', label: 'Engineering Experience' },
];

const skillTicker = [
  { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs/061220' },
  { name: 'React', logo: 'https://cdn.simpleicons.org/react/087ea4' },
  { name: 'TypeScript', logo: 'https://cdn.simpleicons.org/typescript/0f5a8f' },
  { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs/1f6d44' },
  { name: 'Tailwind', logo: 'https://cdn.simpleicons.org/tailwindcss/0f7693' },
  { name: 'GSAP', logo: 'https://cdn.simpleicons.org/greensock/175f4b' },
  { name: 'MongoDB', logo: 'https://cdn.simpleicons.org/mongodb/1f5b34' },
  { name: 'PostgreSQL', logo: 'https://cdn.simpleicons.org/postgresql/1f4879' },
  { name: 'Docker', logo: 'https://cdn.simpleicons.org/docker/1f5d97' },
  { name: 'Figma', logo: 'https://cdn.simpleicons.org/figma/5a2f6a' },
  { name: 'Framer', logo: 'https://cdn.simpleicons.org/framer/162446' },
  { name: 'GitHub', logo: 'https://cdn.simpleicons.org/github/101820' },
];

const experienceCompanies = [
  {
    id: 'cybage',
    company: 'Cybage Software',
    role: 'Software Developer',
    period: 'Dec 2023 - Present',
    location: 'Pune, India',
    heading:
      'Owned development of enterprise-grade web platforms using React, Next.js, and TypeScript.',
    summary:
      'Focused on performance, scalability, and maintainability across business-critical workflows.',
    points: [
      'Improved frontend performance by about 45% via code-splitting, lazy loading, and bundle optimization.',
      'Built reusable UI systems and real-time data-heavy visualizations for core product workflows.',
      'Built and maintained ETL pipelines processing millions of rows using SQL, Python, and Perl.',
      'Reduced end-to-end pipeline runtime by about 50% with parallel and multi-threaded processing.',
    ],
    stats: [
      { stat: '45%', label: 'Frontend load-time improvement' },
      { stat: '50%', label: 'Pipeline runtime reduction' },
      { stat: 'Millions', label: 'Rows processed' },
      { stat: 'Now', label: 'Current role' },
    ],
  },
  {
    id: 'anything4cloud',
    company: 'Anything4Cloud',
    role: 'Software Developer',
    period: 'Jul 2022 - Aug 2023',
    location: 'Remote, Australia',
    heading:
      'Delivered production-grade client applications across e-commerce platforms and admin dashboards.',
    summary:
      'Owned full-stack delivery from frontend implementation to backend APIs and deployment.',
    points: [
      'Delivered 5+ client applications using Next.js, React, Node.js, and MongoDB.',
      'Improved application load times by up to 70% and overall performance by around 50%.',
      'Implemented secure authentication, role-based access, and payment integrations.',
      'Worked directly with international clients to convert business requirements into shipped software.',
    ],
    stats: [
      { stat: '5+', label: 'Client apps shipped' },
      { stat: '70%', label: 'Peak load-time gain' },
      { stat: '50%', label: 'Overall performance gain' },
      { stat: '2022', label: 'Started at A4C' },
    ],
  },
];

export default function HomePage() {
  const mainRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [activeExperienceId, setActiveExperienceId] = useState(experienceCompanies[0].id);

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
  const activeExperience =
    experienceCompanies.find((item) => item.id === activeExperienceId) ?? experienceCompanies[0];

  return (
    <>
      <SiteHeader />

      <main className="site-main" ref={mainRef}>
        <div className="ambient-layer" aria-hidden="true">
          <span className="ambient-shape shape-one"></span>
          <span className="ambient-shape shape-two"></span>
          <span className="ambient-shape shape-three"></span>
          <span className="ambient-shape shape-four"></span>
          <span className="ambient-shape shape-five"></span>
        </div>

        <section className="hero section shell">
          <div className="hero-copy reveal">
            <div style={{ transform: `translateY(${heroOffset}px)`, opacity: heroOpacity }}>
              <p className="eyebrow">Gagan Baghel</p>
              <h1 className="hero-title">
                Product-Driven <span>Full-Stack Engineer</span> building performance-critical web systems.
              </h1>
              <p className="hero-description" style={{ transform: `translateY(${subHeroOffset}px)` }}>
                2+ years of experience building enterprise dashboards and data-heavy platforms. Improved frontend load
                times by about 45% and reduced ETL pipeline runtime by about 50% in production systems.
              </p>
              <div className="hero-actions">
                <a href="#work" className="btn btn-primary">
                  View Projects
                </a>
                <a href="#contact" className="btn btn-ghost">
                  Contact Me
                </a>
              </div>
            </div>
          </div>

          <aside className="hero-panel reveal">
            <div className="signal-dot" aria-hidden="true"></div>
            <p className="panel-label">Current Role</p>
            <h2>Software Developer at Cybage Software, building enterprise-grade platforms with React and Next.js.</h2>
            <ul>
              <li>Frontend performance improvement of about 45%</li>
              <li>ETL processing optimization up to about 50%</li>
              <li>Ownership across frontend, backend APIs, and data workflows</li>
            </ul>
          </aside>
        </section>

        <section className="signature section shell reveal">
          <div className="signature-copy">
            <p className="eyebrow">Impact</p>
            <h2 className="section-title">Measured outcomes</h2>
            <div className="signature-impact-grid">
              {proofPoints.map((item) => (
                <article key={item.label} className="signature-impact-card">
                  <p>{item.value}</p>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
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
            <h2 className="section-title">Product-focused engineer with full-stack ownership</h2>
            <p className="section-copy">
              I build scalable web applications and data-heavy systems with a strong focus on performance,
              maintainability, and production reliability. I work across frontend architecture, backend APIs, and
              delivery workflows.
            </p>
          </div>
          <div className="about-grid">
            <article className="panel-card">
              <h3>Frontend Architecture</h3>
              <p>React, Next.js, TypeScript, reusable UI systems, and real-time data-heavy interfaces.</p>
            </article>
            <article className="panel-card">
              <h3>Backend & Data</h3>
              <p>Node.js APIs, SQL optimization, MongoDB/Supabase modeling, and robust ETL pipelines.</p>
            </article>
            <article className="panel-card">
              <h3>Execution</h3>
              <p>Translate product requirements into shipped systems with clean code and measurable improvements.</p>
            </article>
          </div>
        </section>

        <section className="section shell services reveal">
          <p className="eyebrow">Experience</p>
          <h2 className="section-title">What I have delivered</h2>
          <div className="services-grid">
            {serviceModes.map((mode) => (
              <article key={mode.title} className="service-card">
                <h3>{mode.title}</h3>
                <p>{mode.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell immersion reveal">
          <div className="immersion-head">
            <p className="eyebrow">Experience</p>
            <h2 className="section-title">
              {activeExperience.role} at {activeExperience.company}
            </h2>
            <p className="section-copy experience-head-meta">
              {activeExperience.period} | {activeExperience.location}
            </p>
          </div>

          <div className="immersion-layout">
            <article className="immersion-feature">
              <p className="immersion-kicker">Responsibilities</p>
              <h3>{activeExperience.heading}</h3>
              <p>{activeExperience.summary}</p>
              <ul className="experience-points">
                {activeExperience.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="immersion-orbits" aria-hidden="true">
                <span className="orbit one"></span>
                <span className="orbit two"></span>
                <span className="orbit three"></span>
              </div>
            </article>

            <aside className="experience-sidebar" aria-label="Company selector">
              {experienceCompanies.map((company) => (
                <button
                  key={company.id}
                  type="button"
                  className={`btn btn-ghost company-chip ${company.id === activeExperience.id ? 'active' : ''}`}
                  onClick={() => setActiveExperienceId(company.id)}
                  aria-pressed={company.id === activeExperience.id}
                >
                  {company.company}
                </button>
              ))}
            </aside>
          </div>

          <div className="signature-moments">
            {activeExperience.stats.map((moment) => (
              <article key={moment.label} className="moment-card">
                <p>{moment.stat}</p>
                <span>{moment.label}</span>
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

        <section className="section shell view-page-section reveal">
          <div className="view-page-head">
            <p className="eyebrow">Projects</p>
            <h2 className="section-title">Explore all projects on the dedicated Project page</h2>
            <p className="section-copy">
              Open the Project page to view the full project list with stack details, status, and implementation
              context.
            </p>
          </div>
          <div className="view-page-stage">
            <article className="view-feature-card">
              <div className="view-feature-image">
                <Image src={allProjects[0].image} alt={allProjects[0].title} fill sizes="(max-width: 900px) 100vw, 46vw" />
              </div>
              <div className="view-feature-copy">
                <p className="view-index">01 / FEATURED</p>
                <h3>{allProjects[0].title}</h3>
                <p>{allProjects[0].description}</p>
                <div className="chip-wrap">
                  {allProjects[0].stack.map((stack) => (
                    <span key={stack} className="skill-chip small">
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            <div className="view-page-grid">
              {allProjects.slice(1, 4).map((project, index) => (
                <article key={project.title} className={`view-card v${index + 1}`}>
                  <p className="view-index">{String(index + 2).padStart(2, '0')}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </article>
              ))}
              <Link href="/project" className="btn btn-primary view-open-btn">
                Go to Project Page
              </Link>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-command reveal" aria-label="Technology logo belt">
          <div className="skills-belt-shell skills-belt-full" role="region" aria-label="Continuous technology belt">
            <div className="skills-belt-motion">
              {[...skillTicker, ...skillTicker].map((item, index) => (
                <article key={`${item.name}-${index}`} className="belt-item">
                  <img src={item.logo} alt={`${item.name} logo`} width={22} height={22} loading="lazy" />
                  <span>{item.name}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section shell workflow reveal">
          <p className="eyebrow">How I Work</p>
          <h2 className="section-title">Delivery process</h2>
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
          <div className="contact-copy">
            <p className="eyebrow">Contact</p>
            <h2 className="section-title">Let&apos;s connect</h2>
            <p className="section-copy">
              Based in Pune, India. For full-time roles, contract work, or product collaborations, feel free to
              reach out.
            </p>
            <p className="section-copy">
              Email: <a href="mailto:gaganbaghelofficial@gmail.com">gaganbaghelofficial@gmail.com</a>
            </p>
            <p className="section-copy">Location: Pune, India</p>
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
