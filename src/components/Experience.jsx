import { motion } from "framer-motion";

function Experience() {

    const experience = [
        {
            company: "Admire Solution",
            role: "AI Intern",
            duration: "15 Days",
            description:
                "Worked on Retrieval-Augmented Generation (RAG) and Large Language Models (LLMs), gaining practical exposure to AI technologies."
        },
        {
            company: "Shellkode",
            role: "AI Intern",
            duration: "15 Days",
            description:
                "Observed the development of a conversational Voice-to-Voice English Assistant using speech AI technologies."
        }
    ];

    return (

        <section
            id="experience"
            className="bg-slate-950 py-24 px-8 text-white"
        >

            <div className="max-w-6xl mx-auto">

                <motion.h2
                    initial={{opacity:0,y:40}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:.8}}
                    className="text-5xl font-bold text-center mb-16"
                >
                    Experience
                </motion.h2>

                <div className="relative border-l-4 border-blue-500 ml-6">

                    {experience.map((exp,index)=>(

                        <motion.div

                            key={index}

                            initial={{opacity:0,x:-60}}
                            whileInView={{opacity:1,x:0}}

                            transition={{duration:.6}}

                            className="mb-16 ml-10"

                        >

                            <div className="absolute -left-[14px] w-6 h-6 rounded-full bg-blue-500"></div>

                            <h2 className="text-3xl font-bold">
                                {exp.company}
                            </h2>

                            <h3 className="text-blue-400 text-xl mt-2">
                                {exp.role}
                            </h3>

                            <p className="text-gray-500 mb-4">
                                {exp.duration}
                            </p>

                            <p className="text-gray-300 leading-8">
                                {exp.description}
                            </p>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Experience;