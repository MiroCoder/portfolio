"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Backend Developer — Portfolio Projects",
    company: "GitHub / Personal Projects",
    period: "Sep 2024 – Present",
    accent: "purple",
    highlights: [
      "Delivered backend and full-stack features for international web/SaaS clients",
      "Built REST API features with Java/Spring Boot and Python/Django/FastAPI using layered architecture and validation flows",
      "Designed PostgreSQL/SQL data models, relationships, and queries for structured application data",
      "Integrated React/HTML/CSS frontend views with API-driven backend logic and dynamic user flows",
      "Implemented AI/LLM automation with OpenAI/Claude APIs — content generation, response automation, and structured JSON output",
      "Used Git/GitHub, Docker, and AWS basics for reproducible development and deployment workflows",
    ],
  },
  {
    title: "Python Backend Developer Intern",
    company: "UI Technologies LLC, Minsk",
    period: "Mar 2024 – Sep 2024",
    accent: "blue",
    highlights: [
      "Worked on web application tasks using Python, Django, SQL, HTML/CSS, and Git",
      "Implemented backend features, validation, authentication-related logic, debugging, and testing-minded improvements",
      "Practiced relational models, ORM workflows, API/backend flow, and structured development cycles",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="theme-heading text-3xl md:text-4xl">Experience</h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 mt-3" />
          <p className="mt-4 theme-text-muted max-w-2xl">
            Freelance delivery, internship experience, and daily backend portfolio
            development focused on practical APIs, databases, and clean engineering.
          </p>
          <div className="theme-badge mt-4">
            Focus: Java/Spring Boot, Python/Django, REST APIs, PostgreSQL, Git delivery
          </div>
          <div className="mt-12 relative border-l theme-timeline pl-6 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 + index * 0.1 }}
                className="relative"
              >
                <div
                  className={`absolute -left-[34px] top-2 w-3 h-3 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.6)] ${
                    exp.accent === "purple" ? "bg-purple-500" : "bg-blue-500"
                  }`}
                />
                <h3 className="text-xl font-semibold theme-heading">{exp.title}</h3>
                <p className="text-sm theme-text-soft mt-1">
                  {exp.company} · {exp.period}
                </p>
                <ul className="mt-3 theme-text-muted text-sm space-y-2 list-disc pl-4">
                  {exp.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
