import { motion } from "framer-motion";
import profile from "../assets/profile.png";

function About() {
  return (
    <section
      id="about"
      className="bg-[#020617] text-white py-24 px-8"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-fit mx-auto">

            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 blur-2xl opacity-30"></div>

            <img
              src={profile}
              alt="Profile"
              className="relative rounded-3xl w-80 shadow-2xl border border-slate-700"
            />

          </div>
        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-blue-400 text-lg font-semibold">
            ABOUT ME
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Passionate About Building
            <span className="text-blue-500"> Digital Solutions.</span>
          </h2>

          <p className="text-gray-400 leading-9 mt-8 text-lg">

            I am a Computer Science Engineering student with a passion
            for Software Development, Artificial Intelligence,
            UI/UX Design, and modern web technologies.

            I enjoy creating clean, user-friendly applications that
            solve real-world problems while continuously learning
            new technologies.

          </p>

          <div className="grid grid-cols-2 gap-6 mt-12">

            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">

              <h2 className="text-5xl font-bold text-blue-500">
                8.0
              </h2>

              <p className="text-gray-400 mt-2">
                CGPA
              </p>

            </div>

            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">

              <h2 className="text-5xl font-bold text-blue-500">
                4+
              </h2>

              <p className="text-gray-400 mt-2">
                Projects
              </p>

            </div>

            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">

              <h2 className="text-5xl font-bold text-blue-500">
                2
              </h2>

              <p className="text-gray-400 mt-2">
                Internships
              </p>

            </div>

            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">

              <h2 className="text-5xl font-bold text-blue-500">
                2+
              </h2>

              <p className="text-gray-400 mt-2">
                Certificates
              </p>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;