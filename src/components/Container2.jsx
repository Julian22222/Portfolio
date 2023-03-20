const Container2 = () => {
  return (
    <div class="flex-container-2">
      <div class="item item-1">
        <h2 className="ContainerTwo">Education and work experience</h2>
        <p className="ContainerText-work-experience">
          Northcoders | Full Stack Software Development Student | Manchester |
          08/2022 – 11/2022
        </p>
        <p className="WorkExperience">
          St. Mary’s Hospital| Medical records clerk | Manchester | 08/2021 –
          08/2022
        </p>
        <br></br>
        <p className="WorkExperience">
          Primary Care Physio | Physiotherapy Assistant | Manchester | 05/2021 –
          08/2021
        </p>
        <br></br>
        <p className="WorkExperience">
          Manchester Metropolitan University BSc(Hons) Biomedical Science |
          09/2018 - 06/2021
        </p>
        <br></br>
        <p className="WorkExperience">
          Castlefield Hotel| Duty Manager | Manchester | 05/2017 – 09/2018
        </p>
      </div>
      <div class="item item-2">
        <h2 className="ContainerSkills">My Skills</h2>
        {/* <p className="ContainerText">Make a graph of my Skills</p> */}
        <div className="ContainerText">
          <p>excellent teamwork skills</p>
          <br></br>
          <p>excellent listening skills </p>
          <br></br>
          <p>problem solving skills </p>
          <br></br>
          <p>good organization skills </p>
          <br></br>
          <p>great attention to detail</p>
          <br></br>
          <p>quick lerner skills</p>
          <br></br>
          <p>multitasking </p>
          <br></br>
          <p>ability to ask questions </p>
        </div>
      </div>

      <div class="item item-2">
        <img
          className="ContainerPhoto"
          src="https://cds.cdm.depaul.edu/wp-content/uploads/2016/11/37821466-wallpaper-computer-1024x576.jpg"
          // width={600}
        />
      </div>
    </div>
  );
};

export default Container2;
