"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProjects([
        {
          title: "PocketSense",
          description: "A platform that helps college students track and split daily expenses with friends.",
          link: "https://www.chartap.com/",
          preview: "https://www.chartap.com/",
        },
        {
          title: "CryptoTracker",
          description: "A real-time cryptocurrency analytics dashboard built with FastAPI and Redis.",
          link: "https://chartap.vercel.app/docs",
          preview: "https://chartap.vercel.app/docs",
        },
        {
          title: "DevPortfolio",
          description: "A personal portfolio website showcasing my projects and skills.",
          link: "https://documate-git-master-themageshs-projects.vercel.app/",
          preview: "https://documate-git-master-themageshs-projects.vercel.app/",
        },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <section id="projects" className="p-8 text-center">
      <motion.h2
        className="text-3xl font-bold text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <b className="text-[#ff64ab]">MY</b><span className="font-[Caveat] font-bold text-[#ffffff] text-2xl"> Cases</span>

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? [...Array(3)].map((_, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg animate-pulse"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="h-6 bg-gray-600 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-700 rounded w-full mb-4"></div>
                <div className="h-40 bg-gray-700 rounded-lg"></div>
              </motion.div>
            ))
          : projects.map((project, index) => (
              <motion.div
                key={index}
                className={`relative border border-gray-700 pb-2 bg-gray-800 p-4 rounded-lg transition-all duration-300
                  hover:border-blue-400 hover:shadow-lg ${
                    index % 2 === 0 ? "shadow-lg shadow-blue-500/60" : "shadow-lg shadow-pink-500/60"
                  }`}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-gray-400 mt-2">{project.description}</p>

                <div className="mt-4 w-full h-40 overflow-hidden rounded-lg border border-gray-700">
                  <iframe
                    src={project.preview}
                    className="w-full h-full"
                    title={project.title}
                  ></iframe>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff64ab] font-bold mt-4 inline-block transition-colors hover:text-white"
                >
                  View Project →
                </a>
              </motion.div>
            ))}
      </div>
    </section>
  );
}
