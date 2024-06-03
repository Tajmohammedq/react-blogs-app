import { useState,useEffect } from "react";
const useWindowSize=()=>{
    const [windowSize,setWindowSize]=useState({width:undefined,height:undefined})
    useEffect(()=>{
        const resize=()=>{
            setWindowSize({width:window.innerWidth,height:window.innerHeight})
        }
        resize()
        window.addEventListener("resize",resize)
    },[])

    
    return windowSize

}
export default useWindowSize;