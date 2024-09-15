
import styles from "./App.module.css";
import "./index.css"
import Contact from "./components/Contact/Contact.jsx";
import Education from "./components/Education/Education.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Section from "./components/HeroSection/Section.jsx";
import  Navbar  from "./components/Navbar/Navbar.jsx";
import Project from "./components/Projects/Project.jsx";
import TechStack from "./components/TechStack/TechStack.jsx";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState()
  const getMode = (modeValue) => {    
    setTheme(modeValue)
    
  }

  return (
    <div>
     <Navbar mode = {getMode}></Navbar>
     <Section modeValue = {theme}></Section>
     <Education></Education>
     <TechStack></TechStack>
     <Project></Project>
     <Contact></Contact>
     <Footer></Footer>
       
    </div>
  )
}

export default App
