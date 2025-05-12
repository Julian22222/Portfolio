import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; //Link to specific section of the page
import Context from "./Context";
import { useContext } from "react";

// import myLogo from "../IMG/logo33.png";
import myLogo from "../IMG/Gif/gif5.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faArrowRight,
  faLocationDot,
  faPhone,
  //   faLinkedin,
  //   faLinkedinIn,
} from "@fortawesome/free-solid-svg-icons";

import {
  faLinkedinIn,
  faWhatsapp,
  faGithub,
  faDiscord,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

const dateTime = new Date();

const Footer = () => {
  const value = useContext(Context);

  const handleEmailBtn = (event) => {
    if (event.key === "Enter") {
      // do something
    }
    // console.log("event.target", event.target.value);
    value.setClientEmail(event.target.value);
    console.log("email of client", value.clientEmail);
  };

  return (
    <footer id="contactCard">
      <div className="row">
        <div className="col">
          <img
            src={myLogo}
            className="logo"
            alt="log-pcs"
            style={{ width: 200, height: 200 }}
            id="logo-footer"
          />
          <p>
            Welcome to my portfolio. Here you can familiarise with my IT
            experience and check my projects using different technologies.
          </p>
        </div>
        <div className="col">
          <h3 className="office-heading">Office</h3>
          <div className="container-office">
            <div className="col-left-flexbox-img">
              <FontAwesomeIcon
                icon={faLocationDot}
                flip
                className="flip-location"
              />
              <br />
              <FontAwesomeIcon
                icon={faEnvelope}
                flip
                className="flip-envelope"
              />
              <br />
              <FontAwesomeIcon icon={faPhone} shake className="shake-phone" />
            </div>
            <div className="info-office-container">
              <p>some Road</p>
              <p>Great Manchester</p>
              <p>Salford, Uk</p>
              <p className="email-id">julik.golovenj@gmail.com</p>
              <h4>+44-789-2828-653</h4>
            </div>
          </div>
        </div>
        <div className="col">
          <h3 className="links-header">Links</h3>
          <ul>
            <li>
              {" "}
              <HashLink className="footer-links" to="/#home-container">
                Home
              </HashLink>
            </li>
            <li>
              {" "}
              <HashLink
                className="footer-links"
                to="/projects/#progects-container"
              >
                Projects
              </HashLink>
            </li>
            <li>
              {" "}
              <HashLink className="footer-links" to="/resume/#resume-container">
                Resume
              </HashLink>
            </li>
            <li>
              {" "}
              <Link to="">Contacts</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3>Get in touch</h3>
          <form className="emailForm">
            <FontAwesomeIcon
              icon={faEnvelope}
              bounce
              className="envelope-footer"
            />
            <input
              name="email"
              value={value.clientEmail}
              type="email"
              placeholder="Enter your email"
              // required
              onChange={handleEmailBtn}
              onKeyPress={handleEmailBtn}
            ></input>
            <button
              onClick={() => value.setBtnPopup(true)}
              type="button"
              // disabled={value.clientEmail === ""}
            >
              {/* <button type="submit"> */}
              <FontAwesomeIcon icon={faArrowRight} fade />
            </button>
          </form>
          <div className="social-icons">
            <form action="https://linkedin.com/groups/5066326/">
              <button className="btn-icon">
                <FontAwesomeIcon icon={faLinkedinIn} className="single-icon" />
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
        </div>
      </div>
      <hr />
      <p className="copyright">
        Portfolio © {dateTime.toLocaleDateString().slice(-4)} - All Rights
        Reserved
      </p>
    </footer>
  );
};

export default Footer;
