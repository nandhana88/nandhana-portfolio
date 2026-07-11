import { useEffect, useState } from "react";

function ProgressBar() {

    const [scroll,setScroll]=useState(0);

    useEffect(()=>{

        const handleScroll=()=>{

            const totalHeight=document.documentElement.scrollHeight-window.innerHeight;

            const progress=(window.scrollY/totalHeight)*100;

            setScroll(progress);

        }

        window.addEventListener("scroll",handleScroll);

        return ()=>window.removeEventListener("scroll",handleScroll);

    },[]);

    return(

        <div
            className="fixed top-0 left-0 h-1 bg-blue-500 z-50"
            style={{width:`${scroll}%`}}
        ></div>

    );

}

export default ProgressBar;