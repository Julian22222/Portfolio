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
        <span>JavaScript, TypeScript</span>
        <hr style={{ marginLeft: "-20px" }} />
        {/* <br /> */}
        <span style={{ fontWeight: "bold", color: "rgb(211, 59, 59)" }}>
          Front-end:
        </span>
        <span>
          {" "}
          HTML, CSS, React, React Native, Next.js, Vue.js, Bootstrap, jQuery,
          AJAX
        </span>
        <hr style={{ marginLeft: "-20px" }} />
        <span style={{ fontWeight: "bold", color: "rgb(211, 59, 59)" }}>
          Back-end:
        </span>
        <span>
          {" "}
          Node.js, HTTP, Express JS, REST APIs, NestJS, Prisma, Redis, SQL,
          PSQL, SQLite, MySQL, MongoDB, Insomnia, Postman
        </span>
        <hr style={{ marginLeft: "-20px" }} />
        <span style={{ fontWeight: "bold", color: "rgb(211, 59, 59)" }}>
          Testing:
        </span>
        <span>
          {" "}
          Test Driven Development (TDD), Jest, Supertest and React Testing
          Library
        </span>
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
          AWS (IAM, EC2, S3, RDS, Lambda, API Gateway, Load Balancer, etc.)
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
