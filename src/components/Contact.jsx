import {
FaGithub,
FaLinkedin,
FaEnvelope,
FaPhone
} from "react-icons/fa";

function Contact(){

return(

<section
id="contact"
className="bg-slate-950 py-24 px-8"
>

<div className="max-w-5xl mx-auto text-center">

<h2 className="text-5xl font-bold mb-8">

Let's Work Together

</h2>

<p className="text-gray-400 text-lg">

Feel free to reach out for internships, collaborations, or software development opportunities.

</p>

<div className="mt-16 space-y-8">

<div className="flex justify-center items-center gap-5 text-2xl">

<FaEnvelope className="text-blue-500"/>

<span>

deepakanandhu88@gmail.com

</span>

</div>

<div className="flex justify-center items-center gap-5 text-2xl">

<FaPhone className="text-blue-500"/>

<span>

+91 8870735282

</span>

</div>

<div className="flex justify-center gap-10 text-4xl mt-10">

<a href="https://github.com/nandhana88">

<FaGithub className="hover:text-blue-500 transition"/>

</a>

<a href="https://linkedin.com">

<FaLinkedin className="hover:text-blue-500 transition"/>

</a>

</div>

</div>

</div>

</section>

);

}

export default Contact;