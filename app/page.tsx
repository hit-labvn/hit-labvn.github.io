const clientLogos = [
  "Google",
  "Microsoft",
  "NVIDIA",
  "Siemens",
  "Amazon",
  "Cisco",
];

const expertiseCards = [
  {
    title: "Automation System",
    description:
      "Optimal automation system design and implementation for efficient operations.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="7" y="7" width="10" height="10" rx="1.5" />
        <path d="M4 9h3M4 12h3M4 15h3M17 9h3M17 12h3M17 15h3" />
        <path d="M9 4v3M12 4v3M15 4v3M9 17v3M12 17v3M15 17v3" />
      </svg>
    ),
  },
  {
    title: "AI & Computer Vision",
    description:
      "Deploying advanced visual recognition models for real-world intelligence and automation.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Custom Application",
    description:
      "High-performance cross-platform software with seamless user experience and integration.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="12" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
];

const footerLinks = {
  Platform: ["Expertise", "Services", "Projects"],
  Company: ["Contact", "Privacy Policy", "Terms of Service"],
};

export default function Home() {
  return (
    <>
      <nav className="topbar">
        <div className="shell topbar-inner">
          <a className="brand" href="#">
            HITLAB
          </a>

          <div className="topbar-links" aria-label="Primary">
            <a className="is-active" href="#expertise">
              Expertise
            </a>
            <a href="#contact">Services</a>
            <a href="#contact">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <a className="pill-button" href="mailto:inquiry@hit-lab.vn">
            Get Started
          </a>
        </div>
      </nav>

      <main className="landing-page">
        <section className="shell hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Engineering Excellence</p>
            <h1>
              Build reliable products, <span>fast.</span>
            </h1>

            <div className="hero-actions">
              <a className="pill-button pill-button-primary" href="mailto:inquiry@hit-lab.vn">
                Start Project
              </a>
              <a className="pill-button pill-button-muted" href="#services">
                Our Services
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-glow" aria-hidden="true"></div>
            <div className="hero-image-frame">
              <img
                alt="Modern high-tech server room with blue neon lighting and cable management"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUORMuzV5mbM-XTDOi78gZPSH77_vgGSmH8b_BF8sLTFHGN_06rK01Y3yFIbrGrXT5HyvoqE6E2YeBKUXLqRUCLyEN4IRD88C5m_SZXQZ44_UCIC2t7W0whD7ED8KBCN4Rn0_Om364snSYIcwD0uc5RfQd3bAQ6OF1uPvDs0EQ6cNczVmGZnftgyc4aTnTJxfnKbPt1GBV-XV9QpuW9xrfgJDVLWkara-_0JlwdNJCJTX7FD4g2ohNfiznapsp3pHlU1ZoxlELD9KU"
              />
            </div>
          </div>
        </section>

        <section className="shell trust-section" aria-labelledby="trusted-by-title">
          <p id="trusted-by-title" className="trust-title">
            Trusted by customers
          </p>
          <div className="logo-row">
          </div>
        </section>

        <section id="expertise" className="feature-band">
          <div className="shell">
            <div className="section-heading">
              <h2>Technical Expertise</h2>
              <p>
                Our core focus lies in the intersection of performance,
                reliability, and innovative engineering.
              </p>
            </div>

            <div className="expertise-grid">
              {expertiseCards.map((card) => (
                <article key={card.title} className="expertise-card">
                  <div className="expertise-icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="shell cta-section">
          <div className="cta-panel">
            <h2>Your ideas. Our engineering.</h2>
            <div className="cta-stack">
              <p>inquiry@hit-lab.vn</p>
              <a className="pill-button pill-button-primary" href="mailto:inquiry@hit-lab.vn">
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="site-footer">
        <div className="shell footer-grid">
          <div className="footer-brand">
            <h3>HITLAB Company Limited</h3>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group} className="footer-column">
              <h4>{group}</h4>
              <ul>
                {links.map((link) => (
                  <li key={link}>
                    <a href={link === "Expertise" ? "#expertise" : "#"}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-column">
            <h4>Contact</h4>
            <p>
              Ho Chi Minh City, Vietnam
              <br />
              inquiry@hit-lab.vn
            </p>
          </div>
        </div>

        <div className="shell footer-bottom">
          <p>© 2026 HITLAB Company Limited. All rights reserved.</p>
          <div className="footer-socials" aria-label="Social links">
            <a href="#" aria-label="Website">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18Z" />
                <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
              </svg>
            </a>
            <a href="mailto:inquiry@hit-lab.vn" aria-label="Email">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 6h16v12H4z" />
                <path d="m5 7 7 6 7-6" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
