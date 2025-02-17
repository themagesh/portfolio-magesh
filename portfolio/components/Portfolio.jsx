'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const worksData = [
  { id: 1, title: 'Cloud Infrastructure', category: 'DevOps' },
  { id: 2, title: 'CI/CD Automation', category: 'DevOps' },
  { id: 3, title: 'E-commerce Website', category: 'Web Development' },
  { id: 4, title: 'Portfolio Website', category: 'Web Development' },
];

const WorksSection = () => {
  const [filter, setFilter] = useState('All');

  const filteredWorks =
    filter === 'All' ? worksData : worksData.filter((work) => work.category === filter);

  return (
    <section id="works-section" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <motion.h2 
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.h2>
        <p className="text-lg text-gray-400">my <b>Cases</b></p>

        <div className="mt-8 flex justify-center gap-6">
          {['All', 'DevOps', 'Web Development'].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg ${filter === category ? 'bg-blue-500' : 'bg-gray-700'}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {filteredWorks.map((work) => (
            <motion.div 
              key={work.id} 
              className="p-6 bg-gray-800 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold">{work.title}</h3>
              <p className="text-gray-400">{work.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
