"use client";

import { motion } from "framer-motion";

const contactLinks = [
  {
    title: "Email",
    value: "mirixonneck@gmail.com",
    href: "mailto:mirixonneck@gmail.com",
  },
  {
    title: "Phone",
    value: "+48 572 106 694",
    href: "tel:+48572106694",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/miroslav-nekhaev-87b70a283",
    href: "https://linkedin.com/in/miroslav-nekhaev-87b70a283",
    external: true,
  },
  {
    title: "GitHub",
    value: "github.com/MiroCoder",
    href: "https://github.com/MiroCoder",
    external: true,
  },
  {
    title: "Resume PDF",
    value: "Download Miroslav_Nekhaev_Resume.pdf",
    href: "/Miroslav_Nekhaev_Resume.pdf",
    download: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-32 px-6">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-purple-500/10 blur-3xl rounded-full bottom-[-200px] left-[-200px]" />
        <div className="absolute w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full top-[-200px] right-[-200px]" />
      </div>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="theme-heading text-3xl md:text-4xl">
            Let&apos;s Work Together
          </h2>
          <div className="theme-badge mt-4">
            Available for freelance • backend roles • full-stack delivery
          </div>
          <div className="w-16 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 mt-3" />
          <p className="mt-4 theme-text-muted max-w-2xl">
            Based in Zielona Góra, Poland. Open to backend developer roles,
            freelance projects, and practical API-driven application work.
          </p>
          <div className="mt-12 grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  download={link.download}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="block theme-card theme-card-hover p-5 hover:scale-[1.02] hover:-translate-y-1 duration-300"
                >
                  <h3 className="font-semibold">{link.title}</h3>
                  <p className="text-sm theme-text-muted mt-1">{link.value}</p>
                </a>
              ))}
            </div>
            <div className="theme-card p-6">
              <h3 className="text-lg font-semibold">Send a Message</h3>
              <form
                className="mt-4 space-y-4"
                action="mailto:mirixonneck@gmail.com"
                method="post"
                encType="text/plain"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="theme-input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="theme-input"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  className="theme-input"
                />
                <button type="submit" className="theme-btn-primary w-full py-3 rounded-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
