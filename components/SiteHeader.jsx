import Link from 'next/link';

const homeNavItems = [
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Work', href: '/#work' },
  { label: 'Contact', href: '/#contact' },
];

const projectNavItems = [
  { label: 'Overview', href: '#project-top' },
  { label: 'Projects', href: '#work' },
  { label: 'Review', href: '#review' },
  { label: 'Process', href: '#process' },
];

export default function SiteHeader({ projectPage = false }) {
  const navItems = projectPage ? projectNavItems : homeNavItems;
  const githubProfile = 'https://github.com/gagan-baghel';

  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Link href="/" className="brand-mark" aria-label="Go to homepage">
          <span className="brand-core">GB</span>
          <span className="brand-label">Gagan Baghel</span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          {navItems.map((item) => (
            <Link key={item.label} className="nav-link" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          {projectPage ? (
            <a
              href={githubProfile}
              target="_blank"
              rel="noreferrer"
              className="nav-profile-link"
              aria-label="Open GitHub profile"
              title="GitHub Profile"
            >
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52 0-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.66 7.66 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
          ) : null}

          <Link href={projectPage ? '/' : '/project'} className="btn btn-ghost">
            {projectPage ? 'Back Home' : 'View Projects'}
          </Link>
        </div>
      </div>
    </header>
  );
}
