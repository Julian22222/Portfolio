import { FaCheckCircle } from "react-icons/fa";
// import { useRef, useEffect, useState } from "react";

const Container2 = () => {
  ////////////////////////////////////////////////////////////////////// animation scrolling blocks

  //destructure elements, and renaming

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
      <div class="item-1">
        <div className="animation-block">
          <h2 className="ContainerTwo">Education and work experience</h2>

          <p className="eachLineTick">
            <FaCheckCircle className="tick" />
            Northcoders | Full Stack Software Development Student | Manchester |
            08/2022 – 11/2022
          </p>
          <br></br>
          <p className="eachLineTick">
            <FaCheckCircle className="tick" />
            St. Mary’s Hospital| Medical records clerk | Manchester | 08/2021 –
            08/2022
          </p>
          <br></br>
          <p className="eachLineTick">
            <FaCheckCircle className="tick" />
            Primary Care Physio | Physiotherapy Assistant | Manchester | 05/2021
            – 08/2021
          </p>
          <br></br>
          <p className="eachLineTick">
            <FaCheckCircle className="tick" />
            Manchester Metropolitan University BSc(Hons) Biomedical Science |
            09/2018 - 06/2021
          </p>
          <br></br>
          <p className="eachLineTick">
            <FaCheckCircle className="tick" />
            Castlefield Hotel| Duty Manager | Manchester | 05/2017 – 09/2018
          </p>
        </div>
      </div>

      <div className="animation-block2">
        <h2 className="ContainerSkills">My Skills</h2>
        <br></br>
        <div className="ContainerText">
          <p>
            <FaCheckCircle className="tick" />
            Reliable
          </p>
          <br></br>
          <p>
            <FaCheckCircle className="tick" />
            Remarkable ability to work independently as well as within a team
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
            Strong problem-solving skills and attention to detail{" "}
          </p>
          <br></br>
          <p>
            {" "}
            <FaCheckCircle className="tick" />
            Good organization skills{" "}
          </p>
          <br></br>
          {/* <p>
            {" "}
            <FaCheckCircle className="tick" />
            Strong attention to detail
          </p>
          <br></br> */}
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
    </div>
  );
};

export default Container2;
