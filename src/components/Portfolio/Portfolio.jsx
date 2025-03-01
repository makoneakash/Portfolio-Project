import { useRef } from "react";
import "./portfolio.scss"
import {motion,useScroll, useSpring, useTransform} from "framer-motion"


const items = [
    {
        id:1,
        title:"project 1 title",
        img:"https://pixels.com/images/wallArtPaintedPortrait.jpg",
        desc:"desc here ",
    },
    {
        id:2,
        title:"project 2 title",
        img:"https://pixels.com/images/wallArtPaintedPortrait.jpg",
        desc:"desc here ",
    },
    {
        id:3,
        title:"project 4 title",
        img:"https://pixels.com/images/wallArtPaintedPortrait.jpg",
        desc:"desc here ",
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
                <button>See Demo</button>
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