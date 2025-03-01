import "./App.scss"
import Navbar from "./components/Navbar/Navbar"
import Test from "./test"
import Hero from "./components/Hero/Hero.jsx"
import Parallax from "./components/Parallax/Parallax.jsx"
import Services from "./components/Services/Services.jsx"
import Portfolio from "./components/Portfolio/portfolio.jsx"
import Contact from "./components/Contact/Contact.jsx"

// Test.jsx is for understanding the implementation of framer-motion library

const App = () => {
  return <div>
    <section id="Homepage"><Navbar/>
    <Hero/>
    </section>
    <section id="services"><Parallax type="Services"/></section>
    <section ><Services/></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <Portfolio/>
    <section id="Contact"><Contact/></section>
   

    
    {/* <Test></Test> */}
  </div>;
};

export default App;
