import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
} from "react-icons/fa";
import profile from "../assets/profile.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#020617]"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-[180px] opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-[180px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-8 w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-purple-400 text-xl mb-4">
             Hello, I'm
          </p>

          <h1 className="text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            Nandhana
            <span className="text-purple-400"> A K</span>
          </h1>

          <div className="mt-6 text-3xl font-semibold text-purple-400 h-12">
            <TypeAnimation
              sequence={[
                "Software Developer",
                2000,
                "Java Developer",
                2000,
                "AI & ML Enthusiast",
                2000,
                "UI / UX Designer",
                2000,
              ]}
              repeat={Infinity}
              speed={50}
            />
          </div>

          <p className="text-gray-400 text-lg mt-8 leading-8 max-w-xl">
            Passionate Computer Science Engineering student who loves building
            modern web applications, exploring Artificial Intelligence,
            designing intuitive user experiences, and solving real-world
            problems through technology.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="/resume.pdf"
              download
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-semibold transition"
            >
              📄 Download Resume
            </a>

            <a
              href="#contact"
              className="border border-blue-500 hover:bg-blue-600 px-8 py-4 rounded-full font-semibold transition"
            >
              Contact Me
            </a>

          </div>

          <div className="flex gap-6 mt-10 text-3xl">

            <a
              href="https://github.com/nandhana88"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-blue-400 transition duration-300" />
            </a>

            <a
              href="https://www.linkedin.com/in/nandhanakarthikeyan15a19b2a4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-blue-400 transition duration-300" />
            </a>

            <a href="mailto:deepakanandhu88@gmail.com">
              <FaEnvelope className="hover:text-blue-400 transition duration-300" />
            </a>

          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 blur-3xl opacity-40 animate-pulse"></div>

            <img
              src={profile}
              alt="Profile"
              className="relative w-80 h-80 lg:w-[430px] lg:h-[430px] rounded-full object-cover border-4 border-blue-500 shadow-2xl"
            />

          </div>
        </motion.div>

      </div>

      {/* Scroll Down */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce"
      >
        <FaArrowDown size={28} />
      </a>
    </section>
  );
}

export default Hero;