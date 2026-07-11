import { motion } from "framer-motion";
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

function Skills() {

  const skills = [
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <FaPython /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node JS", icon: <FaNodeJs /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Figma", icon: <FaFigma /> },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-slate-950 py-24 px-8 text-white"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-5xl font-bold text-center mb-6"
        >
          Skills
        </motion.h2>

        <p className="text-center text-gray-400 mb-16">
          Technologies I use to build modern applications.
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">

          {skills.map((skill,index)=>(

            <motion.div
              key={index}
              whileHover={{scale:1.08}}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col items-center hover:border-blue-500 transition"
            >

              <div className="text-6xl text-blue-400 mb-5">
                {skill.icon}
              </div>

              <h2 className="text-2xl font-semibold">
                {skill.name}
              </h2>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;