import { motion } from "framer-motion";

function Education() {

    return (

        <section
            id="education"
            className="bg-[#020617] py-24 px-8 text-white"
        >

            <div className="max-w-6xl mx-auto">

                <motion.h2

                    initial={{opacity:0,y:30}}
                    whileInView={{opacity:1,y:0}}

                    className="text-5xl font-bold text-center mb-20"

                >

                    Education

                </motion.h2>

                <div className="space-y-8">

                    <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">

                        <h2 className="text-3xl font-bold">
                            B.E Computer Science Engineering
                        </h2>

                        <p className="text-blue-400 mt-2">
                            Nandha Engineering College
                        </p>

                        <p className="text-gray-400 mt-2">
                            2023 - 2027
                        </p>

                        <p className="mt-3">
                            CGPA : 8.0
                        </p>

                    </div>

                    <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">

                        <h2 className="text-2xl font-bold">
                            Higher Secondary
                        </h2>

                        <p className="text-gray-400">
                            PKPSMHSS
                        </p>

                    </div>

                    <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">

                        <h2 className="text-2xl font-bold">
                            SSLC
                        </h2>

                        <p className="text-gray-400">
                            PKPSMHSS
                        </p>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Education;