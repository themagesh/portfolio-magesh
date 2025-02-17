import React from "react";

const Resume = () => {
  return (
    <section id="resume-section" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Resume</h2>
          <p className="text-lg text-gray-300">my <b>Story</b></p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <h5 className="text-2xl font-semibold mb-4">Education</h5>
            <div className="space-y-6">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h6 className="text-xl font-bold">Graduation</h6>
                <p className="text-gray-400">Hindusthan College of Engineering and Technology</p>
                <p className="text-gray-300">2018 - 2022</p>
                <p className="text-gray-300">B.Tech in Information Technology</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h6 className="text-xl font-bold">Schools</h6>
                <p className="text-gray-400">Paramveer Matriculation Higher Secondary School</p>
                <p className="text-gray-300">2014 - 2016</p>
                <p className="text-gray-300">Higher Secondary Education</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h5 className="text-2xl font-semibold mb-4">Experience</h5>
            <div className="space-y-6">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h6 className="text-xl font-bold">Associate DevOps Engineer</h6>
                <p className="text-gray-400">Ladybird Web Solution Pvt Ltd</p>
                <p className="text-gray-300">Jun 2023 - Nov 2024</p>
                <p className="text-gray-300">Responsible for deploying and managing Faveo Helpdesk Ticketing system on both on-premise and cloud.</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <h6 className="text-xl font-bold">WordPress Developer</h6>
                <p className="text-gray-400">Freelance</p>
                <p className="text-gray-300">Mar 2022 - Present</p>
                <p className="text-gray-300">Developing custom themes, plugins, optimizing website performance, and implementing security measures.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
