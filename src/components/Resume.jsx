const Resume = () => {
  return (
    <div id="resume-container">
      <h1 className="Resume">My Resume</h1>
      <h3 className="MyCertificate">Personal Statement</h3>
      <p className="TextResume">
        I have always enjoyed playing chess and solving puzzles that challenge
        logical thinking and problem-solving skills. This passion led me to
        pursue software development, where thinking outside the box and building
        logical solutions brings a strong sense of satisfaction.
      </p>
      <p className="TextResume-2">
        {" "}
        I am a quick-thinking and adaptable individual with excellent
        organisational, patience, and problem-solving skills. My experience in
        the hospitality sector as a Duty Manager has strengthened my ability to
        work under pressure and manage complex situations effectively.
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
