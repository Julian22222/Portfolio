import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { React, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Context from "./components/Context";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  // const value = {
  //   wineList,
  //   setWineList,
  //   wineType,
  //   setWineType,
  //   SortBy,
  //   setSortBy,
  //   order,
  //   setOrder,
  //   basketList,
  //   setBasketList,
  // };

  return (
    <BrowserRouter>
      <Context.Provider>
        <div className="App-header">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
