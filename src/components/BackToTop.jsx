import { useEffect,useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function BackToTop(){

const[show,setShow]=useState(false);

useEffect(()=>{

const scroll=()=>{

if(window.scrollY>400){

setShow(true);

}else{

setShow(false);

}

};

window.addEventListener("scroll",scroll);

return()=>window.removeEventListener("scroll",scroll);

},[]);

const top=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

return(

show && (

<button

onClick={top}

className="fixed bottom-8 right-8 bg-blue-600 w-14 h-14 rounded-full shadow-lg hover:bg-blue-700 transition z-50"

>

<FaArrowUp/>

</button>

)

);

}

export default BackToTop;