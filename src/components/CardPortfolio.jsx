import ProjectCard from "./ProjectCard";
import image1 from "../IMG/Proj_img/js_projects.jpg";
import image2 from "../IMG/Proj_img/wine_shop.jpg";
import image3 from "../IMG/Proj_img/movies.jpg";
import image4 from "../IMG/Proj_img/news.jpg";
import image5 from "../IMG/Proj_img/wordl.jpg";
import image6 from "../IMG/Proj_img/To_Do_List.png";
import image7 from "../IMG/Proj_img/mySQL.jpeg";
import image8 from "../IMG/Proj_img/bookshop2.jpg";
import image9 from "../IMG/Proj_img/webapi.png";
import image10 from "../IMG/Proj_img/aspNet.jpg";
import image11 from "../IMG/Proj_img/car-repair-shop.jpg";
import image12 from "../IMG/Proj_img/car-repair-shop1.jpg";

const CardPortfolio = () => {
  class CardPortfolio {
    img;
    title;
    description;
    seeProject_URL;
    gitHub_F_END;
    gitHub_B_END;
    btnSwitch;

    constructor(
      img,
      title,
      description,
      seeProject_URL,
      gitHub_F_END,
      gitHub_B_END,
      btnSwitch
    ) {
      this.img = img;
      this.title = title;
      this.description = description;
      this.seeProject_URL = seeProject_URL;
      this.gitHub_F_END = gitHub_F_END;
      this.gitHub_B_END = gitHub_B_END;
      this.btnSwitch = btnSwitch;
    }
  }

  let cardArr = [
    new CardPortfolio(
      image1,
      "JavaScript Projects",
      "Applied ReactJS / JavaScript / Node JS / HTML",
      "https://julian22222.github.io/All-JavaScript-Proj/",
      "https://github.com/Julian22222/All-JavaScript-Proj",
      "https://github.com/Julian22222/All-JavaScript-Proj",
      "Front"
    ),
    new CardPortfolio(
      image11,
      "Car Repair Shop",
      "Front-end + Back-end Project. Applied ReactJS / TypeScript / REST APIs / MySQL / JavaScript / Node JS / CI/CD / Docker / Supertest",
      "https://repair-shop-mxf8.onrender.com",
      "https://github.com/Julian22222/PRACTICE/tree/main/TypeScript/repair-shop",
      "https://github.com/Julian22222/PRACTICE/tree/main/MySQL-database",
      "Both"
    ),
    new CardPortfolio(
      image2,
      "Wine Shop",
      "Front-end + Back-end Project. Applied ReactJS / REST APIs / PSQL / JavaScript / Node JS / HTML / CSS",
      "https://julian22222.github.io/Wine-Shop/",
      "https://github.com/Julian22222/Wine-Shop",
      "https://github.com/Julian22222/Wine-Shop-BackEnd",
      "Both"
    ),
    new CardPortfolio(
      image3,
      "Movies Website",
      "Front-end + Back-end Project. Applied Vue JS / REST APIs / MongoDB / JavaScript / Node JS / HTML / CSS",
      "https://movies-vue-front-end.onrender.com/",
      "https://github.com/Julian22222/Vue-Website---movies",
      "https://github.com/Julian22222/PRACTICE/tree/main/MongoDB",
      "Both"
    ),
    new CardPortfolio(
      image4,
      "NC NEWS Website",
      "Front-end + Back-end Project. Applied ReactJS / REST APIs / Supertest / postgreSQL / JavaScript / Node JS / HTML / CSS",
      "https://nc-news-front-end.onrender.com/",
      "https://github.com/Julian22222/nc-news-front-end",
      "https://github.com/Julian22222/NC_NEWS_Project",
      "Both"
    ),
    new CardPortfolio(
      image5,
      "Wordle Game",
      "Front-end Project. Applied ReactJS / JavaScript / Node JS / HTML / CSS",
      "https://julian22222.github.io/Wordle/",
      "https://github.com/Julian22222/Wordle",
      "https://github.com/Julian22222/Wordle",
      "Front"
    ),
    new CardPortfolio(
      image6,
      "To Do List",
      " Front-end + Back-end Project. Applied ReactJS / REST APIs / postgreSQL / JavaScript / Node JS / HTML / CSS",
      "https://to-do-list-front-end.onrender.com/",
      "https://github.com/Julian22222/PRACTICE/tree/main/To-Do-List/client-front-end",
      "https://github.com/Julian22222/PRACTICE/tree/main/To-Do-List/server",
      "Both"
    ),
    new CardPortfolio(
      image10,
      "ASP.NET Core MVC projects",
      "Applied ASP.NET Core MVC / C# / Bootstrap / jQuery / Ajax / Docker / HTML / CSS",
      "https://asp-net-nodb.onrender.com",
      "https://github.com/Julian22222/PRACTICE/tree/main/C_Sharp/Project1",
      "",
      "Front"
    ),
    new CardPortfolio(
      image8,
      "ASP.NET MVC Book Store",
      "Front-end + Back-end Project. Applied ASP.NET Core MVC / Entity Framework Core(ORM) / Identity core / Microsoft Azure / Ajax / Bootstrap / jQuery / C#",
      "https://mybookstorewebapp.azurewebsites.net/",
      "https://github.com/Julian22222/PRACTICE/tree/main/C_Sharp/Project_MVC_BookShop2",
      "https://github.com/Julian22222/PRACTICE/tree/main/C_Sharp/Project_MVC_BookShop2",
      "Both"
    ),
    new CardPortfolio(
      image9,
      "ASP.NET Web API",
      "Back-end Project. Applied ASP.NET Web API/ SQL Server / Entity Framework Core / Microsoft Azure / C#",
      "https://techstorewebapi-b6btevanhwfahagd.ukwest-01.azurewebsites.net/swagger/index.html",
      "",
      "https://github.com/Julian22222/React_Asp.Net_WebAPI/tree/main/api",
      "Back"
    ),
  ];

  return (
    <div className="CardPortfolio">
      <ul>
        {cardArr.map((proj) => {
          return (
            <li key={proj.title}>
              <ProjectCard
                img={proj.img}
                title={proj.title}
                description={proj.description}
                seeProject_URL={proj.seeProject_URL}
                gitHub_F_END={proj.gitHub_F_END}
                gutHub_B_END={proj.gitHub_B_END}
                switch={proj.btnSwitch}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CardPortfolio;
