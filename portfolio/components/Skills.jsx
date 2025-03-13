"use client";

import React from "react";
import { motion } from "framer-motion";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"], weight: ["400", "700"] });

const skills = [
  { category: "Programming Languages", items: ["Python", "JavaScript"] },
  { category: "Web Development", items: ["HTML", "CSS"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB"] },
  { category: "Cloud Services", items: ["AWS", "Azure"] },
  { category: "CI/CD", items: ["Docker", "Kubernetes", "GitLab"] },
  { category: "Scripting & Automation", items: ["Shell/Bash", "Python"] },
  { category: "Operating Systems", items: ["Linux (Debian & RedHat Based)", "Windows Server"] },
  { category: "Python Libraries", items: ["FastAPI", "Django", "Requests"] },
  { category: "CSS Frameworks", items: ["Tailwind CSS"] },
];

export default function SkillsSection() {
  return (
    <section className={`bg-gray-900 text-white py-16 ${jost.className}`} id="skills-section">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white">Professional Skills</h2>
        <p className="text-xl text-white">
          <span className="text-[#ff64ab] font-bold">MY Talent</span>
        </p>
      </div>

      {/* Skills Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={`relative border border-gray-700 pb-2 bg-gray-800 p-4 rounded-lg transition-all duration-300 
              hover:border-blue-400 hover:shadow-lg ${
                index % 2 === 0 ? "shadow-lg shadow-blue-500/60" : "shadow-lg shadow-pink-500/60"
              }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h6 className="text-xl font-semibold text-[#ff64ab] mb-3">{skill.category}</h6>
            <ul className="text-gray-300">
              {skill.items.map((item, idx) => (
                <li key={idx} className="mb-1">{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );  
}
