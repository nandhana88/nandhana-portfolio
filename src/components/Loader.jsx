import { useEffect, useState } from "react";

function Loader() {

    const [loading,setLoading]=useState(true);

    useEffect(()=>{

        const timer=setTimeout(()=>{

            setLoading(false);

        },2200);

        return ()=>clearTimeout(timer);

    },[]);

    if(!loading) return null;

    return(

        <div className="fixed inset-0 bg-[#020617] flex justify-center items-center z-[9999]">

            <div className="text-center">

                <h1 className="text-6xl font-bold text-blue-500 animate-pulse">

                    N

                </h1>

                <p className="text-gray-400 mt-6">

                    Loading Portfolio...

                </p>

            </div>

        </div>

    );

}

export default Loader;