import Image from 'next/image';
import SiteFooter from '../../components/SiteFooter';
import SiteHeader from '../../components/SiteHeader';
import { allProjects } from '../../components/site-data';

export const metadata = {
  title: 'Projects',
  description: 'Selected projects by Gagan Baghel.',
};

function getStatusClass(status) {
  return status.toLowerCase().replace(/\s+/g, '-');
}

export default function ProjectPage() {
  return (
    <>
      <SiteHeader projectPage />

      <main className="site-main">
        <section className="section shell projects-hero reveal">
          <p className="eyebrow">Portfolio Archive</p>
          <div className="project-hero-head">
            <h1 className="section-title">Project Collection</h1>
            <p className="section-copy project-hero-copy">
              A broader snapshot of shipped and experimental work across product UI, APIs, automation, and visual
              systems. Built with the same design DNA, upgraded with modern Next.js architecture.
            </p>
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
      </main>

      <SiteFooter />
    </>
  );
}
