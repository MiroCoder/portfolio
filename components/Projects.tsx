"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Habit Tracker API",
    description:
      "Production-style habit tracking application with REST APIs, PostgreSQL persistence, automated tests, Docker, CI, and OpenAPI documentation.",
    details: [
      { label: "Backend", value: "Spring Boot REST API, CRUD, validation, statistics, streaks, scheduling, and daily reset logic" },
      { label: "Architecture", value: "Controller-Service-Repository structure, DTOs, JdbcTemplate persistence, centralized error handling" },
      { label: "Delivery", value: "Docker Compose, GitHub Actions CI, OpenAPI/Swagger, Maven Wrapper" },
      { label: "Testing", value: "JUnit 5 and Mockito with isolated H2 test database" },
    ],
    tags: ["Java 21", "Spring Boot", "PostgreSQL", "REST API", "Docker", "GitHub Actions", "JUnit 5", "OpenAPI"],
    url: "https://github.com/MiroCoder/habit-tracker-api",
  },
  {
    title: "Warsaw Salon Explorer",
    description:
      "Full-stack application for browsing and managing Warsaw beauty and hair salon data.",
    details: [
      { label: "Backend", value: "Spring Boot, Spring Data JPA, Spring Security, PostgreSQL, REST endpoints" },
      { label: "Frontend", value: "React/Vite listing page, district filtering, detail views, protected admin editing" },
      { label: "Quality", value: "Service-layer unit tests, error handling, environment-based configuration" },
    ],
    tags: ["Java", "Spring Boot", "Spring Security", "React", "PostgreSQL", "JUnit"],
    url: "https://github.com/MiroCoder/Beauty-of-Warsaw",
  },
  {
    title: "Django Game Store",
    description:
      "Django application for browsing a video game catalog and managing user profiles and personal game libraries.",
    details: [
      { label: "Backend", value: "Django ORM, authentication flows, views, templates, admin panel, and media handling" },
      { label: "Database", value: "Relational models with SQLite and Django migrations" },
      { label: "UI", value: "HTML/CSS catalog and account workflows" },
    ],
    tags: ["Python", "Django", "SQLite", "Pillow", "HTML/CSS"],
    url: "https://github.com/MiroCoder/django-game-store-web-app",
  },
  {
    title: "Medical Clinic Management System",
    description:
      "Graduation project for patient profiles, medical records, doctor schedules, and appointment management.",
    details: [
      { label: "Backend", value: "Django application with authentication, validation, relational models, and admin workflows" },
      { label: "Modules", value: "Patient profiles, medical records, doctor schedules, appointment booking and history" },
      { label: "Delivery", value: "Environment-based Django settings, requirements file, demo data, and documented setup" },
    ],
    tags: ["Python", "Django", "SQL", "SQLite", "HTML/CSS"],
    url: "https://github.com/MiroCoder/Web-systems-of-medical-clinic",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 md:py-32 px-6 theme-section-alt">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="theme-heading text-3xl md:text-4xl">Featured Projects</h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 mt-3" />
          <p className="mt-4 theme-text-muted max-w-2xl">
            Selected backend and full-stack applications demonstrating API design,
            relational data modeling, testing, deployment tooling, and frontend integration.
          </p>
          <div className="theme-badge mt-4">
            Java / Spring Boot · Python / Django · PostgreSQL · Docker · React
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 + index * 0.1 }}
                className="group theme-card theme-card-hover p-6 hover:scale-[1.02] hover:-translate-y-1 duration-300 relative overflow-hidden block"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-purple-500/10 to-blue-500/10" />
                <h3 className="text-xl font-semibold theme-heading">{project.title}</h3>
                <p className="text-sm theme-text-muted mt-2">{project.description}</p>
                <div className="mt-4 text-sm theme-text-soft space-y-2">
                  {project.details.map((detail) => (
                    <p key={detail.label}>
                      <span className="text-[var(--foreground)]">{detail.label}:</span>{" "}
                      {detail.value}
                    </p>
                  ))}
                </div>
                <div className="mt-6 flex gap-2 flex-wrap text-xs">
                  {project.tags.map((tag) => (
                    <span key={tag} className="theme-badge">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
