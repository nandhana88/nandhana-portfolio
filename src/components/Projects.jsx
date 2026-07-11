import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import { useState, useEffect } from "react";

function Projects() {

  const projects = [

    {
      title: "SmartCare – AI-Powered Elderly Healthcare System",

      role: "Full Stack & AI Developer",

      images: [
        "/projects/smartcare/1.png",
        "/projects/smartcare/2.png",
        "/projects/smartcare/3.png",
        "/projects/smartcare/4.png",
        "/projects/smartcare/5.png",
        "/projects/smartcare/6.png",
      ],

      description:
        "Developed SmartCare, an AI-powered healthcare application for elderly users featuring personalized nutrition recommendations, medication reminders, caregiver support, health history management, and predictive health analysis using XGBoost with 97.4% prediction accuracy.",

      tech: [
        "React Native",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Python",
        "Flask",
        "XGBoost",
      ],

      github: "https://github.com/nandhana88",

      demo: "#",
    },

    {
      title: "Venba Poultry Farms",

      role: "UI/UX Designer & Frontend Contributor",

      images: [
        "/projects/poultry/1.png",
      ],

      description:
        "Designed intuitive dashboards, wireframes, and prototypes for poultry farm management, simplifying feed management, vaccination tracking, stock monitoring, and daily operations.",

      tech: [
        "Figma",
        "React",
        "UI/UX",
      ],

      github: "https://github.com/nandhana88",

      demo: "#",
    },

    {
      title: "Smart Parking System",

      role: "IoT Developer",

      images: [
        "/projects/parking/1.png",
        "/projects/parking/2.png",
      ],

      description:
        "Designed and implemented an automated smart parking system using sensor-based technology to detect available parking spaces and guide vehicles efficiently in real time.",

      tech: [
        "Arduino",
        "Embedded C",
        "IoT",
        "IR Sensor",
        "Ultrasonic Sensor",
      ],

      github: "https://github.com/nandhana88",

      demo: "#",
    },

  ];

  return (

    <section
      id="projects"
      className="bg-[#020617] text-white py-28 px-8"
    >

      <div className="max-w-7xl mx-auto">

        <motion.h2

          initial={{ opacity: 0, y: 40 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8 }}

          className="text-5xl font-bold text-center"

        >

          Featured Projects

        </motion.h2>

        <p className="text-center text-gray-400 mt-6 max-w-3xl mx-auto leading-8">

          Here are some of my recent projects showcasing my expertise
          in Artificial Intelligence, Mobile Development, UI/UX Design,
          Full Stack Development, and IoT solutions.

        </p>

        <div className="grid lg:grid-cols-2 gap-12 mt-20">

          {projects.map((project, index) => (

            <ProjectCard

              key={index}

              project={project}

            />

          ))}

        </div>

      </div>

    </section>

  );

}
function ProjectCard({ project }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [project.images.length]);

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <motion.div
      whileHover={{ y: -12 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
    >
      {/* Image Section */}

      <div className="relative h-72 overflow-hidden">

        <img
          src={project.images[currentImage]}
          alt={project.title}
          className="w-full h-full object-cover transition duration-700"
        />

        {project.images.length > 1 && (
          <>
            <button
              onClick={previousImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-blue-600 p-3 rounded-full transition"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-blue-600 p-3 rounded-full transition"
            >
              <FaChevronRight />
            </button>
          </>
        )}

        {/* Image Indicators */}

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">

          {project.images.map((_, index) => (

            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentImage === index
                  ? "bg-blue-500"
                  : "bg-white/40"
              }`}
            />

          ))}

        </div>

      </div>

      {/* Content */}

      <div className="p-8">

        <p className="text-blue-400 uppercase text-sm tracking-widest">
          {project.role}
        </p>

        <h2 className="text-3xl font-bold mt-3">
          {project.title}
        </h2>

        <p className="text-gray-400 mt-5 leading-8">
          {project.description}
        </p>

        {/* Tech Stack */}

        <div className="flex flex-wrap gap-3 mt-8">

          {project.tech.map((item, index) => (

            <span
              key={index}
              className="bg-blue-600/20 border border-blue-500 text-blue-300 px-4 py-2 rounded-full text-sm"
            >
              {item}
            </span>

          ))}

        </div>

        {/* Buttons */}

        <div className="flex flex-wrap gap-4 mt-8">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl transition"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>

        </div>

      </div>

    </motion.div>
  );
}

export default Projects;