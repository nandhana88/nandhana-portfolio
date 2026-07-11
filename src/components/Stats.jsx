import { motion } from "framer-motion";

function Stats() {

    const stats = [
        {
            number: "04+",
            title: "Projects"
        },
        {
            number: "02",
            title: "Internships"
        },
        {
            number: "01",
            title: "Research Paper"
        },
        {
            number: "02+",
            title: "Certificates"
        }
    ];

    return (

        <section className="bg-slate-950 py-24">

            <div className="max-w-7xl mx-auto px-8">

                <h2 className="text-5xl font-bold text-center mb-16">
                    Achievements
                </h2>

                <div className="grid md:grid-cols-4 gap-8">

                    {stats.map((item,index)=>(

                        <motion.div

                            key={index}

                            whileHover={{scale:1.08}}

                            className="bg-slate-900 rounded-3xl border border-slate-800 p-10 text-center hover:border-blue-500 transition"

                        >

                            <h2 className="text-6xl font-bold text-blue-500">
                                {item.number}
                            </h2>

                            <p className="text-gray-400 mt-5 text-xl">
                                {item.title}
                            </p>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Stats;