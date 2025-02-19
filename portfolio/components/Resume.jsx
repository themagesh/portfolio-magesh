import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Resume = () => {
  const [openSection, setOpenSection] = useState(["education-graduation", "experience-devops"]);

  const toggleSection = (section) => {
    setOpenSection((prevSections) =>
      prevSections.includes(section) ? prevSections.filter((sec) => sec !== section) : [section]
    );
  };

  const sections = [
    {
      category: "Education",
      items: [
        {
          id: "education-graduation",
          title: "Graduation",
          institution: "Don Bosco College",
          year: "2022 - 2025",
          details: "Bachelor of Science in Computer Science",
        },
        {
          id: "education-schools",
          title: "Schools",
          institution: "Paramveer Matriculation Higher Secondary School",
          year: "2020 - 2022",
          details: "Higher Secondary Education",
        },
      ],
    },
    {
      category: "Experience",
      items: [
        {
          id: "experience-wordpress",
          title: "WordPress Developer",
          institution: "Freelance",
          year: "Mar 2022 - Nov 2024",
          details: "Developing custom themes, plugins, optimizing website performance, and implementing security measures.",
        },
        {
          id: "experience-python",
          title: "Python Developer",
          institution: "Freelance",
          year: "Feb 2025 - Present",
          details: "Developing and optimizing backend systems using FastAPI, Django, and cloud-based solutions.",
        },
      ],
    },
  ];

  return (
    <section id="resume-section" className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Resume</h2>
          <p className="text-lg text-gray-300">
            <b className="text-[#ff64ab]">MY</b>
            <span className="font-[Caveat] font-bold text-[#ffffff] text-2xl"> Story</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h5 className="text-2xl font-semibold mb-4 text-center text-[#ff64ab]">{section.category}</h5>
              <hr className="border-gray-600 mb-4" />
              <div className="space-y-6">
                {section.items.map((item) => (
                  <div
                    key={item.id}
                    className={`relative border border-gray-700 pb-2 bg-gray-800 p-4 rounded-lg transition-all duration-300 ${
                      openSection.includes(item.id) ? "shadow-lg shadow-blue-500/60" : ""
                    } hover:border-blue-200`}
                  >
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleSection(item.id)}
                    >
                      <h6 className="text-xl font-bold text-white">{item.title}</h6>
                      <div className="bg-gray-700 rounded-full p-2 hover:bg-blue-500 transition-all duration-300">
                        {openSection.includes(item.id) ? <FaMinus /> : <FaPlus />}
                      </div>
                    </div>

                    {/* Show details only if the section is open */}
                    <div
                      className={`mt-2 text-gray-300 transition-all duration-500 ease-in-out ${
                        openSection.includes(item.id) ? "opacity-100 max-h-40" : "opacity-0 max-h-0 overflow-hidden"
                      }`}
                    >
                      <div className="flex justify-between">
                        <p className="font-[Caveat] font-bold text-[#ffffff] text-2xl">{item.institution}</p>
                        <p className="text-[#ffffff] font-bold">{item.year}</p>

                      </div>
                      <p className="text-gray-300">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
