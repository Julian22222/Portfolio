import { FaCheckCircle } from "react-icons/fa";
// import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Container2 = () => {
  ////////////////////////////////////////////////////////////////////// animation scrolling blocks

  //destructure elements, and renaming
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  const { ref: skillsRef, inView: skillsIsVisible } = useInView();

  // const myRef = useRef();
  // const [myElementIsVisible, setMyElementIsVisible] = useState();

  // console.log("myElementIsVisible", myElementIsVisible);

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     console.log(entries);
  //     const entry = entries[0];'
  //     // console.log("entry", entry);
  //     setMyElementIsVisible(entry.isIntersecting);
  //   });
  //   observer.observe(myRef.current);
  //   // console.log("myRef", myRef.current);
  // }, []);

  return (
    <div className="flex-container-2">
      <p ref={myRef}></p>
      {myElementIsVisible ? (
        <div class="item-1">
          <div className="animation-block">
            <h2 className="ContainerTwo">Education and work experience</h2>
            <p>
              <FaCheckCircle className="tick" />
              Northcoders | Full Stack Software Development Student | Manchester
              | 08/2022 – 11/2022
            </p>
            <br></br>
            <p>
              <FaCheckCircle className="tick" />
              St. Mary’s Hospital| Medical records clerk | Manchester | 08/2021
              – 08/2022
            </p>
            <br></br>
            <p>
              <FaCheckCircle className="tick" />
              Primary Care Physio | Physiotherapy Assistant | Manchester |
              05/2021 – 08/2021
            </p>
            <br></br>
            <p>
              <FaCheckCircle className="tick" />
              Manchester Metropolitan University BSc(Hons) Biomedical Science |
              09/2018 - 06/2021
            </p>
            <br></br>
            <p>
              <FaCheckCircle className="tick" />
              Castlefield Hotel| Duty Manager | Manchester | 05/2017 – 09/2018
            </p>
          </div>
        </div>
      ) : (
        "Not showing this block"
      )}

      <p ref={skillsRef}> </p>
      {skillsIsVisible ? (
        <div className="animation-block2">
          <h2 className="ContainerSkills">My Skills</h2>
          <br></br>
          <div className="ContainerText">
            <p>
              <FaCheckCircle className="tick" />
              Excellent teamwork skills
            </p>
            <br></br>
            <p>
              {" "}
              <FaCheckCircle className="tick" />
              Excellent listening skills{" "}
            </p>
            <br></br>
            <p>
              {" "}
              <FaCheckCircle className="tick" />
              Problem solving skills{" "}
            </p>
            <br></br>
            <p>
              {" "}
              <FaCheckCircle className="tick" />
              Good organization skills{" "}
            </p>
            <br></br>
            <p>
              {" "}
              <FaCheckCircle className="tick" />
              Great attention to detail
            </p>
            <br></br>
            <p>
              {" "}
              <FaCheckCircle className="tick" />
              Quick lerner skills
            </p>
            <br></br>
            <p>
              {" "}
              <FaCheckCircle className="tick" />
              Multitasking{" "}
            </p>
            <br></br>
            <p>
              {" "}
              <FaCheckCircle className="tick" />
              Ability to ask questions{" "}
            </p>
          </div>
        </div>
      ) : (
        "Not showing second block"
      )}

      {/*  */}
      {/* <div className="skill">
          <div className="outer">
            <div className="inner">
              <div id="number">65%</div>
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="160px"
            height="160px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
              </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="70" stroke-linecap="round" />
          </svg>
        </div> */}
      {/*  */}
    </div>
  );
};

export default Container2;
