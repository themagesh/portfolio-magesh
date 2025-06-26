"use client";

import React from "react";
import { motion } from "framer-motion";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"], weight: ["400", "700"] });

const skills = [
  { category: "Front-End", items: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"] },
  { category: "Back-End", items: ["Python", "FastAPI", "Django", "REST API", "JWT Auth"] },
  { category: "Databases", items: ["MongoDB", "PostgreSQL", "SQL", "Redis"] },
  { category: "Developer Tools", items: ["VS Code", "PyCharm", "GitHub", "WordPress", "CPanel & WHM", "Vercel", "Linux"] },
  { category: "Cloud Deployment", items: ["AWS EC2", "Vercel"] },
  { category: "Design Tools", items: ["Adobe Design", "Canva"] },
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
