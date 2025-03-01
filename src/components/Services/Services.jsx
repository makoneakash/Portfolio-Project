
import "./Services.scss"
import {motion, useInView} from "framer-motion"
import { useRef } from "react"

const variants = {
    initial :{
        x:-500,
        y: 100,
       opacity:0,
    },
    animate:{
        x:0,
        y:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
};


const Services = ()=>{

    const ref = useRef();
    const isInView = useInView(ref,{margin:"-100px"}); //trigger animatin at a specific point & -100 px indicates length from upside
return (
    <motion.div 
    className="services" 
    ref={ref}
    variants={variants}
    // initial="initial" 
    // whileInView="animate"   //use of InView for trggering animation
    // animate="animate" 
  
    
    >
        <motion.div className="textContainer" variants={variants}>We Belive In Project Based Learning
        
            <hr></hr>
        </motion.div>
        
        <motion.div className="titleContainer" variants={variants}> 
            <div className="title">
                <img src="/people.webp"></img>
                <h1>
                    <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Way Of Work
                </h1>
            </div>
            <div className="title">
                <h1>
                    <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business
                </h1>
                <button>Benifits Of <br/>Working With Us</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}> 
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h1>Proefficient In</h1> 
                <p>
               <ul>
                <li>HTML5: Building semantic, clean, and well-structured layouts that ensure accessibility and SEO optimization.</li>
                <li>Css & Scss/Sass</li>
                <li>JavaScript</li>
                <li>Programming Language : Java</li>
               </ul>
                </p>  
                
             </motion.div>
             <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
             <h1>Frameworks and library's On We Can Work</h1> 
                <p>
               <ul>
                <li>ReactJs</li>
                <li>framer motion</li>
               </ul>
                </p> 
               
             </motion.div>
             <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
             <h1>Key Technologies We Familiar with</h1> 
                <p>
               <ul>
                <li>Programming Languages :<br/> c,python</li>
                <li>Code Editor : <br/>VS code , Eclipse</li>
               </ul>
                </p>       
             </motion.div>
        </motion.div>
    </motion.div>
);

}


export default Services;