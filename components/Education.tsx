"use client";

import { motion } from "framer-motion";

const education = [
  {
    degree: "Master's Degree, Informatics",
    school: "University of Zielona Góra, Poland",
    period: "Expected: Sep 2027",
  },
  {
    degree: "Bachelor of Science, Information Technology",
    school: "BSUIR, Minsk, Belarus",
    period: "Graduated: Jun 2024",
  },
];

const languages = [
  "English — C1 / professional working proficiency",
  "Polish — professional working proficiency",
  "German — basic, improving daily",
  "Russian — native",
  "Belarusian — native",
];

export default function Education() {
  return (
    <section id="education" className="py-28 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="theme-heading text-3xl md:text-4xl">
            Education & Languages
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 mt-3" />
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {education.map((item) => (
                <div key={item.degree} className="theme-card theme-card-hover p-6">
                  <h3 className="font-semibold">{item.degree}</h3>
                  <p className="text-sm theme-text-muted mt-2">{item.school}</p>
                  <p className="text-xs theme-text-soft mt-1">{item.period}</p>
                </div>
              ))}
            </div>
            <div className="theme-card p-6">
              <h3 className="font-semibold">Languages</h3>
              <ul className="mt-4 space-y-2 text-sm theme-text-muted">
                {languages.map((lang) => (
                  <li key={lang}>{lang}</li>
                ))}
              </ul>
              <p className="mt-6 text-sm theme-text-soft leading-relaxed">
                Work style: daily programming discipline, project-based learning,
                code written and understood, structured delivery with long-term
                stability.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
