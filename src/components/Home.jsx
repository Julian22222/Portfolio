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
          <h1 className="Header1">glad to see you here</h1>
          <h3 className="Header1">
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

            <Link to="projects" className="NavBar">
              <button className="Portfol">Go to portfolio</button>
            </Link>
          </div>
          <div className="MyStory">
            <h2 className="HeadingMySTory">My Story</h2>
            <p className="MyStory">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              fuga amet autem saepe inventore quisquam nobis possimus expedita
              tempore nemo, minima tenetur optio quo dolor architecto! Labore
              aliquam iusto expedita qui quaerat reiciendis numquam accusamus
              vitae consequuntur facilis perferendis nostrum, iure distinctio
              odit quisquam beatae deserunt quasi error! Non alias dicta labore
              obcaecati ab qui cupiditate tempore, accusantium itaque asperiores
              ipsam aspernatur quia odit modi, consectetur voluptatibus
              assumenda earum laboriosam beatae iusto, error voluptas. Veritatis
              iste illo a quis delectus recusandae est nemo fugit praesentium
              fuga. Similique soluta itaque, eos a tempora eaque doloribus
              dignissimos cumque voluptatum, ducimus asperiores quae.
            </p>
          </div>

          <Container2 />
        </div>
      </div>
    </div>
  );
};

export default Home;
