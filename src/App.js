import { HashRouter, Routes, Route } from "react-router-dom";
import { React, useState } from "react";
import "./App.css";
import "../src/Styles/resume.css";
import "../src/Styles/projects.css";
import "../src/Styles/navbar.css";
import "../src/Styles/home.css";
import "../src/Styles/container2.css";
import "../src/Styles/footer.css";
import "../src/Styles/popup.css";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

import Context from "./components/Context";

function App() {
  //popUp email form
  const [btnPopup, setBtnPopup] = useState(false);

  // set client email in footer input
  const [clientEmail, setClientEmail] = useState("");

  const value = {
    clientEmail,
    setClientEmail,
    btnPopup,
    setBtnPopup,
  };

  return (
    // HashRouter instead of BrowserRouter (Hash routing tends to work more reliably on static hosting platforms like GitHub Pages.)
    <HashRouter>
      <Context.Provider value={value}>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </Context.Provider>
    </HashRouter>
  );
}

export default App;
