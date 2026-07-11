import { motion } from "framer-motion";

function Certificates(){

const certificates=[

"NPTEL Cloud Computing",

"IEEE Conference Paper",

"National Level Hackathon"

];

return(

<section
className="bg-[#020617] py-24"
id="certificates"
>

<div className="max-w-7xl mx-auto px-8">

<h2 className="text-5xl font-bold text-center mb-16">
Certificates
</h2>

<div className="grid md:grid-cols-3 gap-8">

{

certificates.map((certificate,index)=>(

<motion.div

key={index}

whileHover={{y:-10}}

className="bg-slate-900 rounded-3xl p-10 border border-slate-800 hover:border-blue-500 transition"

>

<h2 className="text-2xl font-bold">

🏆 {certificate}

</h2>

<p className="text-gray-400 mt-5">

Successfully completed.

</p>

</motion.div>

))

}

</div>

</div>

</section>

);

}

export default Certificates;