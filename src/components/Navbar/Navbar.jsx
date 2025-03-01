import "./Navbar.scss"
import {motion} from "framer-motion"

import Sidebar from "../Sidebar/Sidebar"  ///sidebar import



const Navbar = ()=>{
 
    return <div className="navbar">
        {/* sidebar */}
    <Sidebar/>
    <div class="wrapper">
    <motion.span
    initial={{opacity:0,scale:0.5}}
    animate={{opacity:1,scale:1}}
    transition={{duration:0.5}}  
    >Mr.Akash Makone</motion.span>

    <div class="social">
    <a href="#"><img src="/linkedIn.png" alt=""></img></a>  
    <a href="#"><img src="/gitHub.png" alt=""></img></a>
    <a href="#"><img src="/instagram.png" alt=""></img></a>
    <a href="#"><img src="/facebook.png" alt=""></img></a>
    </div>
    </div>

    </div>
}

export default Navbar;