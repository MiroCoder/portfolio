"use client";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tech Skills", href: "#tech" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/MiroCoder",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/miroslav-nekhaev-87b70a283",
  },
  {
    label: "Email",
    href: "mailto:mirixonneck@gmail.com",
  },
  {
    label: "Resume",
    href: "/Miroslav_Nekhaev_Resume.pdf",
    download: true,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--section-alt)]">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a
              href="#home"
              className="font-bold text-lg text-[var(--foreground)] hover:opacity-80 transition"
            >
              Miroslav Nekhaev
            </a>
            <p className="mt-3 text-sm theme-text-muted leading-relaxed">
              Backend Developer specializing in Java, Spring Boot, Python, and
              REST APIs. Based in Zielona Góra, Poland.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--foreground)]">Navigation</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="theme-nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[var(--foreground)]">Connect</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    download={link.download}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="theme-nav-link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--border-soft)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs theme-text-soft">
          <p>© {year} Miroslav Nekhaev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
