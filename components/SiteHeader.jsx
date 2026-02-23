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

        <Link href={projectPage ? '/' : '/project'} className="btn btn-ghost">
          {projectPage ? 'Back Home' : 'View Projects'}
        </Link>
      </div>
    </header>
  );
}
