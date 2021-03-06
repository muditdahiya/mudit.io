import Home from "../Home/Home";

import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Hobbies from "../../components/Hobbies/Hobbies";
import Contact from "../../components/Contact/Contact";

import { Routes, Route } from "react-router-dom";

function Main() {
  return (
    <div className="Main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="hobbies" element={<Hobbies />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Main;
