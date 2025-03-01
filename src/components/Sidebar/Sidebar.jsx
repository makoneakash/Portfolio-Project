import React from "react";
import "./Sidebar.scss";

import {motion} from "framer-motion"

import { useState } from "react";

import Links from "./Links/Links.jsx";  
import ToggleButton from "./ToggleButton/ToggleButton.jsx";



const variants = {
    open:{
        clipPath:"circle(1200px at 50px 50px)",  //used to create a any type of shape
        transition:{ 
            type:"spring",
            stiffness: 20,
         }
    },
    closed:{
        clipPath : "circle(30px at 50px 50px )",
        transition:{
            delay:0.2,
            type:"spring",
            stiffness:400,
            damping:40,

            },
    },
   };




const Sidebar = () => {
   
    const [open,setOpen] = useState(false);
    return (
        <motion.div className="sidebar" animate={open?"open":"closed"}>  
        {/* Changed class to className  and here we are just defing animatioon but we are using it only in bg class b
        
        by provding the variants object ,//variants are declaring here becoz we are using varients in differnt components i.e each component have diff varients states but same declaration/trggger point*/} 
        
            <motion.div className="bg" variants={variants}>  {/* Changed class to className & using variants here / implementing here */}
                <Links />
            </motion.div>
            <ToggleButton setOpen={setOpen} /> {/* here we are passing function as a prop*/}
        </motion.div>
    );
};

export default Sidebar;
