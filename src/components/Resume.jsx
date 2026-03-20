const Resume = () => {
  return (
    <div id="resume-container">
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
        <span>JavaScript, TypeScript, C#</span>
        <hr style={{ marginLeft: "-20px" }} />
        {/* <br /> */}
        <span style={{ fontWeight: "bold", color: "rgb(211, 59, 59)" }}>
          Front-end:
        </span>
        <span>
          {" "}
          HTML, CSS, ReactJS, React Native, Next JS, ASP.NET Core MVC, Vue JS,
          Ajax, Bootstrap, jQuery
        </span>
        <hr style={{ marginLeft: "-20px" }} />
        <span style={{ fontWeight: "bold", color: "rgb(211, 59, 59)" }}>
          Back-end:
        </span>
        <span>
          {" "}
          NodeJS, HTTP, Express JS, MVC, REST APIs, Nest JS, SQL, PSQL, SQLite,
          SQL Server, MySQL, MongoDB, .Net Core, ASP.NET Web APIs, Entity
          Framework Core(ORM), Insomnia, Postman
        </span>
        <hr style={{ marginLeft: "-20px" }} />
        <span style={{ fontWeight: "bold", color: "rgb(211, 59, 59)" }}>
          Testing:
        </span>
        <span> Test Driven Development (TDD), Jest and Supertest</span>
        <hr style={{ marginLeft: "-20px" }} />
        <span style={{ fontWeight: "bold", color: "rgb(211, 59, 59)" }}>
          Tools:{" "}
        </span>
        <span>Git, GitHub, Docker, CI/CD</span>
        <hr style={{ marginLeft: "-20px" }} />
        <span style={{ fontWeight: "bold", color: "rgb(211, 59, 59)" }}>
          Cloud:{" "}
        </span>
        <span>
          AWS (IAM, EC2, S3, RDS, Lambda, etc.), Microsoft Azure (IAM, Microsoft
          Entra ID, App Services, SQL Server databases, SQL servers, Storage
          accounts, Key Vaults, etc.).{" "}
        </span>
        <hr style={{ marginLeft: "-20px" }} />
        <span style={{ fontWeight: "bold", color: "rgb(211, 59, 59)" }}></span>
        <span style={{ fontWeight: "bold", color: "rgb(211, 59, 59)" }}>
          Other:{" "}
        </span>
        <span>
          Agile (Kanban, Scrum), Software testing and debugging techniques, good
          understanding of web development principles and etc.
        </span>
        <hr style={{ marginLeft: "-20px" }} />
      </div>
    </div>
  );
};

export default Resume;
