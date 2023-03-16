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
      <p>
        {" "}
        I am a quick-thinking person who can adapt to any circumstances.
        Moreover, I have excellent organisation, patience and problem-solving
        skills, due to my work experience in the hospitality sector as a Duty
        Manager.
      </p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h3 className="MyCertificate">My Certificates</h3>
      <br></br>
      <br></br>
      <br></br>
      <img
        src={certificate}
        alt="certificate 1"
        width={600}
        className="Certificates"
      />
    </div>
  );
};

export default Resume;
