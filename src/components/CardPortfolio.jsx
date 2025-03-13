import ProjectCard from "./ProjectCard";
import image1 from "../IMG/Proj_img/js_projects.jpg";
import image2 from "../IMG/Proj_img/wine_shop.jpg";
import image3 from "../IMG/Proj_img/movies.jpg";
import image4 from "../IMG/Proj_img/news.jpg";
import image5 from "../IMG/Proj_img/wordl.jpg";
import image6 from "../IMG/Proj_img/To_Do_List.png";
import image7 from "../IMG/Proj_img/mySQL.jpeg";
import image8 from "../IMG/Proj_img/aspNet.jpg";
import image9 from "../IMG/Proj_img/webapi.png";
import image10 from "../IMG/Proj_img/asp-net-mvc-logo.jpg";

const CardPortfolio = () => {
  let formArr = [
    {
      img: image1,
      title: " JavaScript projects",
      description: "Applied React JS framework / JavaScript / Node JS / HTML",
      seeProject_URL: "https://julian22222.github.io/All-JavaScript-Proj/",
      gitHub_F_END: "https://github.com/Julian22222/All-JavaScript-Proj",
      gutHub_B_END: "https://github.com/Julian22222/All-JavaScript-Proj",
      switch: "Front",
    },
    {
      img: image10,
      title: " ASP.NET Core MVC projects",
      description: "Applied ASP.NET / C# / jQuery / Ajax / HTML / CSS",
      seeProject_URL: "https://asp-net-nodb.onrender.com",
      gitHub_F_END:
        "https://github.com/Julian22222/PRACTICE/tree/main/C_Sharp/Project1",
      switch: "Front",
    },
    {
      img: image2,
      title: "Wine Shop",
      description:
        "Front-end + Back-end Project. Applied React JS framework / REST APIs / PSQL / JavaScript / Node JS / HTML / CSS",
      seeProject_URL: "https://julian22222.github.io/Wine-Shop/",
      gitHub_F_END: "https://github.com/Julian22222/Wine-Shop",
      gutHub_B_END: "https://github.com/Julian22222/Wine-Shop-BackEnd",
      switch: "Both",
    },
    {
      img: image3,
      title: "Movies website",
      description:
        "Front-end + Back-end Project. Applied Vue JS / REST APIs / MongoDB / JavaScript / Node JS / HTML / CSS",
      seeProject_URL: "https://movies-vue-front-end.onrender.com/",
      gitHub_F_END: "https://github.com/Julian22222/Vue-Website---movies",
      gutHub_B_END: "https://github.com/Julian22222/PRACTICE/tree/main/MongoDB",
      switch: "Both",
    },
    {
      img: image4,
      title: "NC NEWS website",
      description:
        "Front-end + Back-end Project. Applied React JS framework / REST APIs / postgreSQL / JavaScript / Node JS / HTML / CSS",
      seeProject_URL: "https://nc-news-front-end.onrender.com/",
      gitHub_F_END: "https://github.com/Julian22222/nc-news-front-end",
      gutHub_B_END: "https://github.com/Julian22222/NC_NEWS_Project",
      switch: "Both",
    },
    {
      img: image5,
      title: "Wordle game",
      description:
        "Front-end Project. Applied React JS framework / JavaScript / Node JS / HTML / CSS",
      seeProject_URL: "https://julian22222.github.io/Wordle/",
      gitHub_F_END: "https://github.com/Julian22222/Wordle",
      gutHub_B_END: "https://github.com/Julian22222/Wordle",
      switch: "Front",
    },
    {
      img: image6,
      title: "To do List",
      description:
        " Front-end + Back-end Project. Applied React JS framework / REST APIs / postgreSQL / JavaScript / Node JS / HTML / CSS",
      seeProject_URL: "https://to-do-list-front-end.onrender.com/",
      gitHub_F_END:
        "https://github.com/Julian22222/PRACTICE/tree/main/To-Do-List/client-front-end",
      gutHub_B_END:
        "https://github.com/Julian22222/PRACTICE/tree/main/To-Do-List/server",
      switch: "Both",
    },
    {
      img: image7,
      title: "MySQL DB",
      description:
        "Back-end MySQL Project. Applied REST APIs / MySQL / JavaScript / Node JS",
      seeProject_URL: "https://car-shop-back-end.onrender.com/",
      gitHub_F_END: "",
      gutHub_B_END:
        "https://github.com/Julian22222/PRACTICE/tree/main/MySQL-database",
      switch: "Back",
    },
    {
      img: image8,
      title: "ASP.NET MVC Book Store",
      description:
        "Front-end + Back-end Project. Applied ASP.NET Core MVC / Entity Framework Core / Identity core / Microsoft Azure / C#",
      seeProject_URL: "https://mybookstorewebapp.azurewebsites.net/",
      gitHub_F_END:
        "https://github.com/Julian22222/PRACTICE/tree/main/C_Sharp/Project_MVC_BookShop2",
      gutHub_B_END:
        "https://github.com/Julian22222/PRACTICE/tree/main/C_Sharp/Project_MVC_BookShop2",
      switch: "Both",
    },
    {
      img: image9,
      title: "ASP.NET Web API",
      description:
        "Back-end Project. Applied ASP.NET Web API/ SQL Server / Entity Framework Core / Microsoft Azure / C#",
      seeProject_URL:
        "https://techstorewebapi-b6btevanhwfahagd.ukwest-01.azurewebsites.net/swagger/index.html",
      gitHub_F_END:
        "https://github.com/Julian22222/React_Asp.Net_WebAPI/tree/main/api",
      gutHub_B_END:
        "https://github.com/Julian22222/React_Asp.Net_WebAPI/tree/main/api",
      switch: "Back",
    },
  ];

  return (
    <div className="CardPortfolio">
      <ul>
        {formArr.map((proj) => {
          return (
            <li key={proj.title}>
              <ProjectCard
                img={proj.img}
                title={proj.title}
                description={proj.description}
                seeProject_URL={proj.seeProject_URL}
                gitHub_F_END={proj.gitHub_F_END}
                gutHub_B_END={proj.gutHub_B_END}
                switch={proj.switch}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CardPortfolio;
