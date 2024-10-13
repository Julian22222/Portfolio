import certificate from "../IMG/certificate1.jpg";

const Resume = () => {
  return (
    <div>
      <h1 className="Resume">My Resume</h1>
      <h3 className="MyCertificate">Personal Statement</h3>
      <p className="TextResume">
        Throughout my life, I have loved to play chess, to solve and unravel
        various puzzles where you can use your logical and thinking skills. I
        decided to be a software developer because behind this lies the ability
        to think outside the box and where logical chains of events cause great
        satisfaction. The Northcoders bootcamp course was an excellent
        opportunity for me to change my career direction. This course gave me an
        understanding of how backend, frontend and the programming logic work.
        This course ignited my passion to study IT in much more depth and seek
        to continue my education further. Now I am improving my IT skills and
        learning new technologies in this scope.
      </p>
      <p className="TextResume-2">
        {" "}
        I am a quick-thinking person who can adapt to any circumstances.
        Moreover, I have excellent organisation, patience and problem-solving
        skills, due to my work experience in the hospitality sector as a Duty
        Manager.
      </p>
      <br />
      <br />
      <h2 className="key-skills">Key Technical Skills:</h2>

      <div className="skills-container">
        <span style={{ fontWeight: "bold", color: "rgb(211, 59, 59)" }}>
          Languages:
        </span>{" "}
        <span>JavaScript, C#</span>
        <hr style={{ marginLeft: "-20px" }} />
        {/* <br /> */}
        <span style={{ fontWeight: "bold", color: "rgb(211, 59, 59)" }}>
          Front-end:
        </span>
        <span>
          {" "}
          HTML, CSS, React JS, React Native, ASP.Net Core MVC, Vue JS
        </span>
        <hr style={{ marginLeft: "-20px" }} />
        <span style={{ fontWeight: "bold", color: "rgb(211, 59, 59)" }}>
          Back-end:
        </span>
        <span>
          {" "}
          HTTP, Express JS, REST API, ASP.NET Web Api, SQL, PSQL, SQLite, SQL
          Server, MySQL, MongoDB, OOP, Docker, MVC
        </span>
        <hr style={{ marginLeft: "-20px" }} />
        <span style={{ fontWeight: "bold", color: "rgb(211, 59, 59)" }}>
          Testing:
        </span>
        <span> Jest, Test Driven Development (TDD)</span>
        <hr style={{ marginLeft: "-20px" }} />
        <span style={{ fontWeight: "bold", color: "rgb(211, 59, 59)" }}>
          Hosting:{" "}
        </span>
        <span>Git, GitHub</span>
        <hr style={{ marginLeft: "-20px" }} />
        <span style={{ fontWeight: "bold", color: "rgb(211, 59, 59)" }}>
          Clouds:{" "}
        </span>
        <span>Microsoft Azure</span>
        <hr style={{ marginLeft: "-20px" }} />
        <span style={{ fontWeight: "bold", color: "rgb(211, 59, 59)" }}></span>
        <span style={{ fontWeight: "bold", color: "rgb(211, 59, 59)" }}>
          Other:{" "}
        </span>
        <span>
          NodeJS, Dot Net Core, CI/CD, Kanban, Software testing and debugging
          techniques, good understanding of web development principles and etc.
        </span>
        <hr style={{ marginLeft: "-20px" }} />
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h3 className="MyCertificate">Personal achievements and Certificates</h3>
      <br></br>
      <br></br>
      <br></br>
      <div className="certificate-container">
        <img
          src={certificate}
          alt="certificate 1"
          // width={600}
          className="Certificates"
        />
      </div>
    </div>
  );
};

export default Resume;
