"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"], weight: ["400", "700"] });

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProjects([
        {
          title: "ChartAP.com",
          description: "Chartap.com is a platform for real-time cryptocurrency analytics, providing trading insights, market trends, and data visualization for informed decision-making",
          link: "https://www.chartap.com/",
          preview: "https://www.chartap.com/",
        },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <section id="projects" className={`py-16 px-4 text-center ${jost.className}`}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Projects
          </motion.h2>
          <p className="text-xl text-white">
            <b className="text-[#ff64ab]">MY</b>
            <span className="font-[Caveat] font-bold text-[#ffffff] text-2xl"> Cases</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {loading
          ? [...Array(3)].map((_, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg animate-pulse text-center max-w-sm w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="h-6 bg-gray-600 rounded w-3/4 mb-4 mx-auto"></div>
                <div className="h-4 bg-gray-700 rounded w-full mb-4 mx-auto"></div>
                <div className="h-40 bg-gray-700 rounded-lg mx-auto"></div>
              </motion.div>
            ))
          : projects.map((project, index) => (
              <motion.div
                key={index}
                className={`relative border border-gray-700 bg-gray-800 p-6 rounded-lg transition-all duration-300 text-center max-w-sm w-full
                  hover:border-blue-400 hover:shadow-lg ${
                    index % 2 === 0 ? "shadow-lg shadow-blue-500/60" : "shadow-lg shadow-pink-500/60"
                  }`}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold text-white text-center mb-3">{project.title}</h3>
                <p className="text-gray-400 text-center mb-4">{project.description}</p>

                <div className="w-full h-40 overflow-hidden rounded-lg border border-gray-700 mx-auto mb-4">
                  <iframe
                    src={project.preview}
                    className="w-full h-full"
                    title={project.title}
                  ></iframe>
                </div>

                <div className="text-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ff64ab] font-bold inline-block transition-colors hover:text-white"
                  >
                    View Project →
                  </a>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
