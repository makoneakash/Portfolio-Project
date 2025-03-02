import { useRef } from "react";
import "./portfolio.scss"
import {motion,useScroll, useSpring, useTransform} from "framer-motion"


const items = [
    {
        id:1,
        title:"Spotify Clone",
        img:"SpotifyImg.png",
        desc:"||  Technologies Used : React js , context api ,scss ,html5   ||  ||  Here in this application we used spotify's api for feting user data ||  || we used yarn build tool for this project ||",
    },
    {
        id:2,
        title:" Tech Currency Converter",
        img:"tech-currency-converter.png",
        desc:"||  Technologies Used : javascript ,css3 ,html5   ||  || Here we have real-time exchange rates for different currencies || we integrated an api for a current currency exchange rates || ",
    },
    {
        id:3,
        title:"Tic-Tac-Toe-StressRelief",
        img:"tic-tac-toe-stressrelief.png",
        desc:"||  Technologies Used : javascript ,css3 ,html5   ||  ||  It is a simple tic-tac-toe game which can be useful for stressrelief || ",
    },
];

const Single = ({item})=>{

    const ref = useRef(); 
    const {scrollYProgress} = useScroll({target:ref});
    const y = useTransform(scrollYProgress,[0,1],[-300,300]);

    return (
        <section >
          <div className="container">
            <div className="wrapper">
              <div className="imageContainer" ref={ref}>
                <img src={item.img}  />
              </div>
              <motion.div className="textContainer" style={{y}}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
               <a href="https://github.com/makoneakash"><button>See Code</button></a>
              </motion.div>
            </div>
          </div>
        </section>
      );
}
const Portfolio = ()=>{

const ref = useRef();
const {scrollYProgress} = useScroll({target:ref,offset:["end end ", "start start"]});
const scaleX = useSpring(scrollYProgress,{stiffness:100,damping:30}); 
    
return (
        <div className="portfolio" ref={ref}>
          <div className="progress">
            <h1>Featured works</h1>
            <motion.div className="progressBar" style={{scaleX}}>
            </motion.div>
          </div>
          
            {
                items.map((item)=>{
                    return <Single item={item} key={item.id} />
                })
            }
        </div>

    );
}

export  default Portfolio;