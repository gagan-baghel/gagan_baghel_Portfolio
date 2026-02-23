import { socialLinks } from './site-data';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-shell">
        <p className="footer-title">Designed + Engineered by Gagan Baghel</p>
        <div className="footer-links">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} className="footer-link" target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
          <a href="mailto:gaganbaghelofficial@gmail.com" className="footer-link">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
