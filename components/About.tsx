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
            Backend developer with Java/Spring Boot and Python/Django experience,
            focused on REST APIs, layered backend logic, relational databases, and
            practical web applications.
          </p>

          <p className="mt-4 theme-text-soft leading-relaxed">
            My freelance and internship background covers backend services,
            API-driven frontend integration, PostgreSQL schemas, authentication,
            validation, testing, and Git-based delivery — with daily programming
            discipline and strong focus on offer-ready backend portfolio growth.
          </p>
          <div className="mt-8 flex gap-3 flex-wrap">
            <span className="theme-badge">Spring Boot & Django</span>
            <span className="theme-badge">REST APIs & PostgreSQL</span>
            <span className="theme-badge">AI / LLM Automation</span>
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
              title: "Backend Engineering",
              text: "Java 21, Spring Boot, Spring Data JPA, Spring Security, Maven, JUnit",
            },
            {
              title: "Python & Data Layer",
              text: "Django, DRF, FastAPI basics, PostgreSQL, SQL modeling, ORM workflows",
            },
            {
              title: "Delivery & Integration",
              text: "React/Vite API integration, Git/GitHub, Docker & AWS basics, LLM APIs",
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
