"use client";

import { motion } from "framer-motion";

const skills = [
  {
    title: "Python Backend",
    items:
      "Python, Django, Django REST Framework, FastAPI basics, ORM, authentication, validation, REST APIs, business logic",
  },
  {
    title: "Java Backend",
    items:
      "Java 21, Spring Boot, Spring Web, Spring Data JPA, Spring Security, Spring JDBC, Maven, REST APIs, layered architecture",
  },
  {
    title: "Databases",
    items:
      "PostgreSQL, SQL, MySQL, SQLite, relational modeling, joins, CRUD queries, schema design, ORM workflows",
  },
  {
    title: "Testing & Delivery",
    items:
      "JUnit 5, Mockito, unit testing basics in Python, Git/GitHub, Docker, Docker Compose, GitHub Actions CI/CD awareness",
  },
  {
    title: "Applied AI",
    items:
      "OpenAI API, Claude API, LLM-powered automation, structured JSON outputs, prompt-driven workflows, AI-assisted debugging and refactoring",
  },
  {
    title: "Frontend Integration",
    items:
      "HTML, CSS, JavaScript, React, Vite, API integration, responsive UI basics, backend-driven user flows",
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
            Backend engineering · databases · testing · delivery · applied AI
          </div>
          <div className="w-16 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 mt-3" />
          <p className="mt-4 theme-text-muted max-w-2xl">
            Technologies I use to build backend services, REST APIs, relational data layers,
            automated tests, and API-driven web applications.
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
