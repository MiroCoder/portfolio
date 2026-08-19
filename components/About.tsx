"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-28 md:py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="theme-heading text-3xl md:text-4xl">About Me</h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 mt-3" />
          <p className="mt-6 theme-text-muted leading-relaxed">
            Backend developer working across Python/Django and Java/Spring Boot,
            with a strong focus on REST APIs, relational databases, validation,
            authentication, testing, and maintainable application structure.
          </p>

          <p className="mt-4 theme-text-soft leading-relaxed">
            My background includes a Python backend internship and continued development
            of production-style portfolio applications using PostgreSQL, Docker,
            automated tests, CI workflows, frontend API integration, and LLM APIs.
          </p>
          <div className="mt-8 flex gap-3 flex-wrap">
            <span className="theme-badge">Python & Java Backend</span>
            <span className="theme-badge">REST APIs & PostgreSQL</span>
            <span className="theme-badge">Applied AI / LLM APIs</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid gap-4"
        >
          {[
            {
              title: "Python Backend",
              text: "Python, Django, DRF, FastAPI basics, ORM, REST APIs, authentication and validation",
            },
            {
              title: "Java Backend",
              text: "Java 21, Spring Boot, Spring Data JPA, Spring Security, Spring JDBC, Maven and JUnit",
            },
            {
              title: "Delivery & AI",
              text: "PostgreSQL, Docker, GitHub Actions, React/Vite integration, OpenAI and Claude APIs",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="theme-card theme-card-hover p-6 hover:scale-[1.02] duration-300"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm theme-text-muted mt-2">{item.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
