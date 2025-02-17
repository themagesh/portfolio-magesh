"use client";

import React from "react";
import { motion } from "framer-motion";

const skills = [
  { category: "Cloud Services", items: ["AWS", "Digital Ocean"] },
  { category: "DB", items: ["MySQL", "MariaDB"] },
  { category: "Monitoring Tools", items: ["Zabbix", "Prometheus", "Grafana"] },
  { category: "OS Platforms", items: ["Windows Server", "Linux (Debian & RedHat Based)"] },
  { category: "CI/CD", items: ["Jenkins", "GitLab", "ArgoCD", "Ansible"] },
  { category: "Log Management", items: ["Elasticsearch", "Fluentbit", "Kibana"] },
  { category: "Web Servers", items: ["Apache", "NGINX", "Litespeed"] },
  { category: "Scripting", items: ["Shell/Bash", "Python"] },
  { category: "Container Orchestration", items: ["Docker", "Kubernetes"] },
];

export default function SkillsSection() {
  return (
    <section className="bg-gray-900 text-white py-16" id="skills-section">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-yellow-400">Professional Skills</h2>
        <p className="text-xl text-gray-300">My <b>Talent</b></p>
      </div>

      {/* Skills Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h6 className="text-xl font-semibold text-yellow-400 mb-3">{skill.category}</h6>
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