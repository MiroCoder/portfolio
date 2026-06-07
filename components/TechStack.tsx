"use client";

import { motion } from "framer-motion";

const skills = [
  {
    title: "Java Backend",
    items:
      "Java 21, Spring Boot, Spring Web, Spring Data JPA, Spring Security, Maven, JUnit, REST APIs, layered architecture, validation",
  },
  {
    title: "Python Backend",
    items:
      "Python, Django, Django REST Framework, FastAPI basics, ORM, admin workflows, authentication, business logic",
  },
  {
    title: "Databases",
    items:
      "PostgreSQL, SQL, MySQL, SQLite, relational data modeling, queries, relationships, structured schemas",
  },
  {
    title: "Frontend Integration",
    items:
      "HTML, CSS, JavaScript, React, Vite, API integration, dynamic user flows, responsive UI basics",
  },
  {
    title: "AI / LLM Tools",
    items:
      "OpenAI API, Claude API, content generation flows, response automation, structured JSON output, AI dev tools",
  },
  {
    title: "Tools & Delivery",
    items:
      "Git, GitHub, IntelliJ IDEA, PyCharm, Docker basics, AWS basics, debugging, readable commits, testing mindset",
  },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-28 md:py-32 px-6 theme-section-alt">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="theme-heading text-3xl md:text-4xl">Tech Skills</h2>
          <div className="theme-badge mt-4">
            Core stack for backend development and practical full-stack delivery
          </div>
          <div className="w-16 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 mt-3" />
          <p className="mt-4 theme-text-muted max-w-2xl">
            Technologies I use to build REST APIs, backend services, relational
            data layers, and API-driven web applications.
          </p>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
              >
                <div className="theme-card theme-card-hover p-6 hover:scale-[1.02] h-full">
                  <h3 className="font-semibold text-lg">{skill.title}</h3>
                  <p className="text-sm theme-text-muted mt-2">{skill.items}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
