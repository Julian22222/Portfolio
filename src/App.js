import { BrowserRouter, Routes, Route } from "react-router-dom";
import { React } from "react";
import "./App.css";
import "../src/Styles/contacts.css";
import "../src/Styles/resume.css";
import "../src/Styles/projects.css";
import "../src/Styles/navbar.css";
import "../src/Styles/home.css";
import "../src/Styles/container2.css";
import "../src/Styles/footer.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App-header">
        <NavBar />
        <Routes>
          <Route path="/Portfolio" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
