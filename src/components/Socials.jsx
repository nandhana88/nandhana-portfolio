import {
FaGithub,
FaLinkedin,
FaEnvelope
} from "react-icons/fa";

function Socials(){

return(

<div className="fixed left-8 bottom-8 flex flex-col gap-5 text-2xl z-40">

<a href="#">
<FaGithub className="hover:text-blue-500 transition"/>
</a>

<a href="#">
<FaLinkedin className="hover:text-blue-500 transition"/>
</a>

<a href="#">
<FaEnvelope className="hover:text-blue-500 transition"/>
</a>

</div>

);

}

export default Socials;