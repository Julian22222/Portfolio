import { Link } from "react-router-dom";
import { useRef } from "react";
import "../Styles/main.css";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const items = ["Home", "Projects", "Resume", "Contact"];

  return (
    <header className="NaviBar">
      <nav ref={navRef}>
        <ul className="a">
          {items.map((item) => {
            return item === "Home" ? (
              <li key={item} className="NavBar">
                <Link to="/" className="NavBar">
                  {" "}
                  {item}
                </Link>
              </li>
            ) : item === "Projects" ? (
              <li key={item} className="NavBar">
                <Link to="projects" className="NavBar">
                  {item}
                </Link>
              </li>
            ) : item === "Resume" ? (
              <li key={item} className="NavBar">
                <Link to="resume" className="NavBar">
                  {item}
                </Link>
              </li>
            ) : (
              <li key={item} className="NavBar">
                <Link to="contact" className="NavBar">
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
        <button>
          <FaTimes className="nav-btn nav-close-btn" onClick={showNavbar} />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default NavBar;
