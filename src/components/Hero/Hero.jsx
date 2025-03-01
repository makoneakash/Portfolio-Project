import "./Hero.scss"
import {motion} from "framer-motion"


const textVariants ={
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
    scrollButton:{
        opacity:0,
        y:0,
        transition:{
            duration:2,
            repeat:Infinity,
        }
    }
   };

   const sliderVariants ={
    initial:{
        x:"20%",
    },
    animate:{
        x:"-200%",
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:20,
        },
    },
  
   };

const Hero=()=>{

return (
<div className="hero">
    <motion.div className="wrapper">
        <motion.div className="textContainer" 
        initial="initial" 
        animate="animate" 
        variants={textVariants} 
        >
             <motion.h2 variants={textVariants}>Mr.Akash Makone</motion.h2>
            <motion.h1 variants={textVariants}>
                Front End <br></br>Devloper
            </motion.h1>  
        <   div className="buttons">
           <a href="#Portfolio"> <motion.button variants={textVariants} >See the latest works</motion.button></a>
           <a href="#Contact"> <motion.button variants={textVariants}>Contact me</motion.button></a>
            </div>
        <motion.img   variants={textVariants} animate="scrollButton" src="/scroll.png"></motion.img>
        </motion.div>
    </motion.div> 

     <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Devloper 
    </motion.div>
    <div className="imageContainer">
        <img src="sitePic.png" alt=""></img>
    </div>
</div>
)
}


export default Hero;