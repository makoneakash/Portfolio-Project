import {motion} from "framer-motion" 
import { useState } from "react"



const Test =()=>{

        // const variants = {
        //    visible:{opacity:1,y:100,transition:{type:"spring",stiffness:100,}}, //by defaulte type is "tween"  ,stiffness is a spped,      
        //     hidden:{opacity:0}
        // }

        
        const variants = {
            visible:{opacity:1,transition:{staggerChildren:0.2}},      
             hidden:{opacity:0}
         }

        const [open,setOpen] = useState(false) //hooks dont need semi colon


        const items =["item1","item2","item3","item4"]; //array

    return(
    
        <div class="course">
             {/* <motion.div class="box" variants={variants}
             initial={{opacity:0.5 ,scale:0.5}}
             //animate={{opacity:1 ,scale:1,x:200,y:200}} //x for x axis and we dont specify here unit line px etc.
            // whileTap={{opacity:1,scale:2}}
            // drag
            transition={{duration:2}}
            animate={open? "visible" :"hidden"}
            
             >

              </motion.div>
              <button onClick={()=>setOpen(prev=>!prev)}>test it </button>  here we changing value of open */}
        
                {/* now we will apply the animations to ul  */}
                 
                 <motion.ul initial="hidden" animate="visible" variants={variants}>
                    {
                        items.map((item=>(
                            <motion.li key={item} variants={variants}>{item}</motion.li> //passing value in react use item //key is used for identify a unique element of the list // key is from framer-motion
                        ))) 
                    }
                 </motion.ul>
          
        
        </div>
       
    );
}


export default Test;