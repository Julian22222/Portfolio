import { Link } from "react-router-dom"; //Link to specific page
import { HashLink } from "react-router-hash-link"; //Link to specific section of the page
import Context from "./Context";
import { useContext, useState, useEffect } from "react";
// import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHouse,
  faLayerGroup,
  faUser,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faWhatsapp,
  faGithub,
  faDiscord,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

import { FaBars } from "react-icons/fa";
import myLogo from "../IMG/logo33.png";
import PopUpForm from "./PopUpForm";
import "../Styles/main.css";

import "../jquery";

const NavBar = () => {
  const value = useContext(Context);
  const [showLinks, setShowLinks] = useState(false); //show side menu bar or not --> Home, project, resume, contacts
  const [animateMenu, setAnimateMenu] = useState(false);

  useEffect(() => {
    if (showLinks) {
      setTimeout(() => setAnimateMenu(true), 300);
    } else {
      setAnimateMenu(false);
    }
  }, [showLinks]);

  const items = [
    { name: "Home", icon: faHouse, link: "/" },
    { name: "Projects", icon: faLayerGroup, link: "/projects" },
    { name: "Resume", icon: faUser, link: "/resume" },
    { name: "Contacts", icon: faBook, link: "/#contactCard" },
  ];

  return (
    <header className="NaviBar">
      <div className="flexbox-container1">
        <button className="logo-btn">
          <Link to="/">
            <img src={myLogo} alt="logoJ" width="60" height="60" />
          </Link>
        </button>
      </div>

      <div className="flexbox-container2">
        <div className={`menu-overlay ${showLinks ? "show" : "hide"}`}>
          <button className="x-button-menu" onClick={() => setShowLinks(false)}>
            x
          </button>
          <nav>
            <ul className="menu-list">
              {items.map((item, index) => (
                <li
                  key={item.name}
                  className={`NavBar_el ${animateMenu ? "slide-in" : ""}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <HashLink
                    to={item.link}
                    onClick={() => setShowLinks(false)}
                    className="NavBar-item"
                  >
                    {showLinks ? (
                      <FontAwesomeIcon
                        icon={item.icon}
                        className="menu-icon"
                        style={{ marginRight: "5px" }}
                      />
                    ) : (
                      ""
                    )}
                    {item.name}
                  </HashLink>
                </li>
              ))}
            </ul>
          </nav>
          {showLinks ? <hr /> : null}

          {/* ///////////////////// social-Icons in side menu bar bottom*/}
          {showLinks ? (
            <div className="social-icons">
              <form action="https://linkedin.com/groups/5066326/">
                <button className="btn-icon">
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="single-icon"
                  />
                </button>
              </form>

              <form action="https://whatsapp.com/">
                <button className="btn-icon">
                  <FontAwesomeIcon icon={faWhatsapp} className="single-icon" />
                </button>
              </form>

              <form action="https://github.com/Julian22222">
                <button className="btn-icon">
                  <FontAwesomeIcon icon={faGithub} className="single-icon" />
                </button>
              </form>

              <form action="https://discordapp.com/users/Julian.Iam#6241">
                <button className="btn-icon">
                  <FontAwesomeIcon icon={faDiscord} className="single-icon" />
                </button>
              </form>

              <form action="https://t.me/JulianGoloven">
                <button className="btn-icon">
                  <FontAwesomeIcon icon={faTelegram} className="single-icon" />
                </button>
              </form>
            </div>
          ) : null}
        </div>

        {/* /////////////////////////////////////////////////////////Burger menu BTN */}
        <button className="menuBtn" onClick={() => setShowLinks(!showLinks)}>
          <FaBars />
        </button>
      </div>

      <div className="flexbox-container3">
        <p className="MailMe">
          <button onClick={() => value.setBtnPopup(true)}>
            <FontAwesomeIcon icon={faEnvelope} className="envelope-logo-main" />
            <p className="email-name">julik.golovenj@gmail.com</p>
          </button>
          <PopUpForm />
        </p>
      </div>
      <div className="underline">
        <span></span>
      </div>
    </header>
  );
};

export default NavBar;
