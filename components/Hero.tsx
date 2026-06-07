"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";

const EngineeringScene = dynamic(() => import("./three/EngineeringScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5" />
  ),
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 overflow-hidden"
    >
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-purple-500/10 blur-3xl rounded-full top-[-200px] left-[-200px]" />
        <div className="absolute w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full bottom-[-200px] right-[-200px]" />
      </div>

      <div className="absolute inset-0 -z-10 opacity-45 pointer-events-none">
        <EngineeringScene />
      </div>

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="theme-badge mb-6">
              Backend Developer • Java & Python
            </div>

            <h1 className="theme-heading text-4xl md:text-6xl">
              Miroslav Nekhaev
            </h1>

            <p className="mt-4 text-lg theme-text-muted">
              Spring Boot • Django • REST APIs • PostgreSQL • React
            </p>

            <p className="mt-6 theme-text-soft max-w-xl">
              Backend developer focused on REST APIs, layered backend logic,
              relational databases, and practical web applications — with
              freelance delivery, clean project ownership, and recruiter-ready
              portfolio growth.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="theme-btn-primary px-6 py-3">
                View Projects
              </a>

              <a
                href="/Miroslav_Nekhaev_Resume.pdf"
                download
                className="theme-btn-outline px-6 py-3"
              >
                Download Resume
              </a>

              <a href="#contact" className="theme-btn-outline px-6 py-3">
                Contact Me
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative w-80 h-96 rounded-2xl overflow-hidden border border-[var(--border)] shadow-xl bg-[var(--surface)]">
            <Image
              src="/profile.png"
              alt="Miroslav Nekhaev"
              fill
              priority
              className="object-cover object-[center_18%]"
              sizes="(max-width: 768px) 320px, 320px"
            />
            <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
              <p className="font-medium text-white">Miroslav Nekhaev</p>
              <p className="text-sm text-gray-300 mt-1">Zielona Góra, Poland</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
