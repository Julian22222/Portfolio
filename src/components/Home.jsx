import { Link } from "react-router-dom";
import Container2 from "./Container2";
import logo from "../IMG/IMG3.JPG";

const Home = () => {
  return (
    <div>
      <div class="flex-container">
        <div class="item item-1">
          <div class="wrapper">
            <div></div>
          </div>
          <img src={logo} className="ImageOfMe" alt="pcs of me" />
        </div>

        <div class="item item-2">
          <hr className="HomeLine"></hr>
          <h1 className="Header1">Hi there, I'am Julian</h1>
          <h1 className="Header2">glad to see you here</h1>
          <h3 className="Header3">
            Full-Stack Software Developer based in Manchester.
          </h3>
          <p className="HeaderAboutMe">
            I enjoy turning complex problems into simple. I am very interested
            in software development. I feel motivated and I really enjoy
            learning more about it. I have huge desire to grow my software
            development skills in JavaScript, Back-End Web Servers, Databases,
            Front-End frameworks and clouds. I am passionate about new
            technologies. Here you can familirise yourself with my projects.
          </p>
          <div className="PortfolioBtn">
            {/* <button className="Portfol" Link to="projects">
              Go to portfolio
            </button> */}

            <Link to="../projects" className="NavBar">
              <button className="Portfol">Go to portfolio</button>
            </Link>
          </div>
          <div className="MyStory">
            <h2 className="HeadingMySTory">
              Knowledge and experience of working in:
            </h2>
            <p className="MyStoryText">
              Git, GitHub, JavaScript, HTML, CSS, NodeJS, OOP, TDD, REST APIs ,
              React JS, React Native, PostgreSQL Database, MongoDB, Docker,
              software testing and debugging techniques, good understanding of
              web development principles and etc.
            </p>
          </div>
          <Container2 />
        </div>
      </div>
    </div>
  );
};

export default Home;
