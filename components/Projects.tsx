"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Habit Tracker API",
    description:
      "Spring Boot REST API for habit tracking, completion stats, daily discipline logic, and analytics.",
    details: [
      { label: "Backend", value: "REST API, CRUD endpoints, completion/undo actions, search, priority filtering, validation" },
      { label: "Architecture", value: "Controller-Service-Repository structure, JdbcTemplate persistence, Maven build" },
      { label: "Frontend", value: "HTML, CSS, JavaScript dashboard connected to backend API" },
      { label: "Testing", value: "JUnit coverage for business logic and statistics" },
    ],
    tags: ["Java", "Spring Boot", "REST API", "PostgreSQL", "JdbcTemplate", "JUnit 5", "Maven", "JavaScript"],
    url: "https://github.com/MiroCoder/habit-tracker-api",
  },
  {
    title: "Beauty of Warsaw — Salon Explorer",
    description:
      "Full-stack web application for browsing beauty and hair salons in Warsaw with real salon records.",
    details: [
      { label: "Backend", value: "Spring Boot, Spring Data JPA, Spring Security, PostgreSQL, REST endpoints" },
      { label: "Frontend", value: "React/Vite listing page, district filter, detail view, protected admin edit" },
      { label: "Features", value: "Error handling, structured salon data, admin workflow" },
    ],
    tags: ["Java", "Spring Boot", "React", "Vite", "PostgreSQL"],
    url: "https://github.com/MiroCoder/Beauty-of-Warsaw",
  },
  {
    title: "Django Game Store Web App",
    description:
      "Django web app for browsing, buying, and managing a video game catalog with user profile and library.",
    details: [
      { label: "Backend", value: "Django ORM, views, templates, admin panel, media handling" },
      { label: "Database", value: "Relational models with SQLite/MySQL support" },
      { label: "UI", value: "Responsive HTML/CSS with structured catalog workflows" },
    ],
    tags: ["Python", "Django", "SQLite", "MySQL", "HTML/CSS"],
    url: "https://github.com/MiroCoder/game-web-repeatin",
  },
  {
    title: "Automated Patient Information System",
    description:
      "Graduation thesis project for patient registration, appointments, and medical records management.",
    details: [
      { label: "Backend", value: "Django backend flow with authentication and validation" },
      { label: "Modules", value: "Reporting tools, appointment handling, medical records" },
      { label: "Database", value: "SQL database storage with structured clinic workflows" },
    ],
    tags: ["Python", "Django", "SQL", "HTML/CSS"],
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
            Selected backend and full-stack projects with clean structure, practical
            APIs, database skills, and recruiter-ready presentation.
          </p>
          <div className="theme-badge mt-4">
            Focus: Spring Boot APIs, Django backends, PostgreSQL, React/Vite integration
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
