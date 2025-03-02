import "./Navbar.scss"
import { motion } from "framer-motion"
import Sidebar from "../Sidebar/Sidebar"  // Sidebar import

const Navbar = () => {
    return (
        <div className="navbar">
            {/* sidebar */}
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Mr.Akash Makone
                </motion.span>

                <div className="social">
                    <a href="https://www.linkedin.com/in/akashmakone"><img src="/linkedIn.png" alt="LinkedIn" /></a>  
                    <a href="https://github.com/makoneakash"><img src="/gitHub.png" alt="GitHub" /></a>
                    <a href="https://www.instagram.com/u_nick_soule?igsh=MWRnd2w5ZDJqM21yaA=="><img src="/instagram.png" alt="Instagram" /></a>
                    <a href="https://leetcode.com/u/makoneakash/"><img src="/leetcode.png" alt="Facebook" /></a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
