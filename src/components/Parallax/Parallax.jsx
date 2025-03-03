import "./Parallax.scss"
import {motion, useScroll, useTransform} from "framer-motion"
import { useRef } from "react";


const Parallax =({type})=>{

    const ref = useRef(null);

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start" , "end start"]
    });                         //from knowing y axis progress

    const yBg = useTransform(scrollYProgress , [0,1],["0%","500%"]); //here in input is scrollYProgress
                                                                      //to useTransform hook for transformation          
     const yText = useTransform(scrollYProgress , [0,1],["0%","100%"]); 

return(
    <div className="parallax" 
    
    ref={ref}
    style={{
        
    background:type==="services" ? 
    "linear-gradient(180deg,#111132,#0c0c1d)" :
    "linear-gradient(180deg,#111132,#505064)",
    
    }}>
        <motion.h1 style={{y:yText}}>{type==="services" ?"our speciality ?" : "what we did ?" }</motion.h1>
        <motion.div className="mountains" ></motion.div>
        <motion.div className="planets" 
            style={{
                backgroundImage:`url(${type==="services" ? "/planets.png": "/sun.png"}`
            }}

        ></motion.div>
        <motion.div className="stars" style={{x:yBg}}></motion.div>  
    </div>
); 
}



export default Parallax;