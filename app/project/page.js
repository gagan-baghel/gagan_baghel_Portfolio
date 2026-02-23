import Image from 'next/image';
import Link from 'next/link';
import SiteFooter from '../../components/SiteFooter';
import SiteHeader from '../../components/SiteHeader';
import { allProjects } from '../../components/site-data';

export const metadata = {
  title: 'Projects',
  description: 'Selected projects by Gagan Baghel.',
};

const inProgressStatuses = new Set(['concept', 'prototype', 'in progress']);

const reviewLenses = [
  {
    title: 'Frontend',
    points: ['Component structure', 'State management', 'Performance'],
  },
  {
    title: 'Backend & Data',
    points: ['API design', 'Data modeling', 'Scalability'],
  },
  {
    title: 'Product Impact',
    points: ['Business value', 'Reliability', 'Delivery speed'],
  },
];

const deliveryPhases = [
  { phase: '01', title: 'Requirements', note: 'Convert business requirements into technical scope.' },
  { phase: '02', title: 'Architecture', note: 'Define frontend, backend, and data structure.' },
  { phase: '03', title: 'Development', note: 'Implement features with production-ready code quality.' },
  { phase: '04', title: 'Optimization', note: 'Improve speed, reliability, and deployment readiness.' },
];

function getStatusClass(status) {
  return status.toLowerCase().replace(/\s+/g, '-');
}

export default function ProjectPage() {
  const liveProjectCount = allProjects.filter((project) => project.status.toLowerCase() === 'live').length;
  const inProgressCount = allProjects.filter((project) =>
    inProgressStatuses.has(project.status.toLowerCase())
  ).length;
  const viewSignals = [
    { label: 'Total Projects', value: String(allProjects.length).padStart(2, '0') },
    { label: 'Live Projects', value: String(liveProjectCount).padStart(2, '0') },
    { label: 'In Progress', value: String(inProgressCount).padStart(2, '0') },
    { label: 'Primary Stack', value: 'Next.js' },
  ];

  return (
    <>
      <SiteHeader projectPage />

      <main className="site-main">
        <section className="section shell projects-hero reveal" id="project-top">
          <p className="eyebrow">Projects</p>
          <div className="project-hero-head">
            <h1 className="section-title">Project Collection</h1>
            <p className="section-copy project-hero-copy">
              A collection of full-stack projects across dashboards, APIs, data workflows, and production deployments.
              Each project highlights implementation quality and measurable impact.
            </p>
          </div>

          <div className="view-signal-grid">
            {viewSignals.map((signal) => (
              <article className="view-signal-card" key={signal.label}>
                <p>{signal.value}</p>
                <span>{signal.label}</span>
              </article>
            ))}
          </div>

          <div className="project-atlas-grid">
            {allProjects.slice(0, 4).map((project, index) => (
              <article key={project.title} className={`atlas-card a${index + 1}`}>
                <div className="atlas-image">
                  <Image src={project.image} alt={project.title} fill sizes="(max-width: 900px) 100vw, 22vw" />
                </div>
                <div className="atlas-copy">
                  <p>{String(index + 1).padStart(2, '0')}</p>
                  <h3>{project.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell projects-list reveal" id="work">
          {allProjects.map((project, index) => (
            <article className="project-row" key={project.title}>
              <div className="project-thumb">
                <Image src={project.image} alt={project.title} fill sizes="(max-width: 900px) 100vw, 28vw" />
              </div>

              <div className="project-content">
                <p className="project-index">{String(index + 1).padStart(2, '0')}</p>
                <h2>{project.title}</h2>
                <p>{project.description}</p>

                <div className="project-row-meta">
                  <div className="chip-wrap">
                    {project.stack.map((item) => (
                      <span key={item} className="skill-chip small">
                        {item}
                      </span>
                    ))}
                  </div>
                  <span className={`status-pill ${getStatusClass(project.status)}`}>{project.status}</span>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="section shell project-lens reveal" id="review">
          <p className="eyebrow">Evaluation</p>
          <h2 className="section-title">How each project is reviewed</h2>
          <div className="project-lens-grid">
            {reviewLenses.map((lens) => (
              <article className="project-lens-card" key={lens.title}>
                <h3>{lens.title}</h3>
                <ul>
                  {lens.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell delivery-map reveal" id="process">
          <div>
            <p className="eyebrow">Delivery Process</p>
            <h2 className="section-title">Execution approach used across projects</h2>
          </div>
          <div className="delivery-phase-grid">
            {deliveryPhases.map((item) => (
              <article key={item.phase} className="delivery-phase-card">
                <p className="delivery-phase">{item.phase}</p>
                <h3>{item.title}</h3>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell view-page-end reveal">
          <div>
            <p className="eyebrow">Need More Detail?</p>
            <h2 className="section-title">I can share a deeper technical walkthrough for any selected project.</h2>
            <p className="section-copy">
              If required, I can provide architecture notes, trade-offs, implementation details, and performance
              decisions for the project.
            </p>
          </div>
          <Link href="/#contact" className="btn btn-primary">
            Request Details
          </Link>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
