import ProjectCard from "./ProjectCard";

const CardPortfolio = () => {
  let formArr = [
    {
      img: "https://img-c.udemycdn.com/course/750x422/4925142_c0ab.jpg",
      title: " JavaScript projects",
      description:
        "Here I used - React JS framework / JavaScript / Node JS / HTML",
      seeProject_URL: "https://julian22222.github.io/All-JavaScript-Proj/",
      gitHub_F_END: "https://github.com/Julian22222/All-JavaScript-Proj",
      gutHub_B_END: "https://github.com/Julian22222/All-JavaScript-Proj",
    },
    {
      img: "https://www.winemag.com/wp-content/themes/TrellisFoundation-child/assets/img/toplists_header.jpg",
      title: "Wine Shop",
      description:
        "Front-end + Back-end Project. Here I used - React JS framework / REST APIs / PSQL / JavaScript / Node JS / HTML / CSS.",
      seeProject_URL: "https://julian22222.github.io/Wine-Shop/",
      gitHub_F_END: "https://github.com/Julian22222/Wine-Shop",
      gutHub_B_END: "https://github.com/Julian22222/Wine-Shop-BackEnd",
    },
    {
      img: "https://grangerchurch.com/wp-content/uploads/2018/06/atthemovies_series_1440x829.jpg",
      title: "Movies website",
      description:
        "Front-end + Back-end Project. Here I used - Vue JS / REST APIs / MongoDB / JavaScript / Node JS / HTML / CSS .",
      seeProject_URL: "https://movies-vue-front-end.onrender.com/",
      gitHub_F_END: "https://github.com/Julian22222/Vue-Website---movies",
      gutHub_B_END: "https://github.com/Julian22222/PRACTICE/tree/main/MongoDB",
    },
    {
      img: "http://vskills.in/certification/blog/wp-content/uploads/2015/01/structure-of-a-news-report.jpg",
      title: "NC NEWS website",
      description:
        "Front-end + Back-end Project. Here I used - React JS framework / REST APIs / postgreSQL / JavaScript / Node JS / HTML / CSS .",
      seeProject_URL: "https://nc-news-front-end.onrender.com/",
      gitHub_F_END: "https://github.com/Julian22222/nc-news-front-end",
      gutHub_B_END: "https://github.com/Julian22222/NC_NEWS_Project",
    },
    {
      img: "https://assets2.rockpapershotgun.com/wordle-past-answers-header.jpg/BROK/thumbnail/1200x900/quality/100/wordle-past-answers-header.jpg",
      title: "Wordle game",
      description:
        "Front-end Project. Here I used - React JS framework / JavaScript / Node JS / HTML / CSS .",
      seeProject_URL: "https://julian22222.github.io/Wordle/",
      gitHub_F_END: "https://github.com/Julian22222/Wordle",
      gutHub_B_END: "https://github.com/Julian22222/Wordle",
    },
    {
      img: "https://blog.hubspot.com/hubfs/To_Do_List.png",
      title: "To do List",
      description:
        " Front-end + Back-end Project. Here I used - React JS framework / REST APIs / postgreSQL / JavaScript / Node JS / HTML / CSS .",
      seeProject_URL: "https://to-do-list-front-end.onrender.com/",
      gitHub_F_END:
        "https://github.com/Julian22222/PRACTICE/tree/main/To-Do-List/client-front-end",
      gutHub_B_END:
        "https://github.com/Julian22222/PRACTICE/tree/main/To-Do-List/server",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGV7sgoJwZS5kpW691ToyQpHWF3_sFpEIW4A&usqp=CAU",
      title: "MySQL DB",
      description:
        "Back-end MySQL Project. Here I used - REST APIs / MySQL / JavaScript / Node JS /",
      seeProject_URL: "https://car-shop-back-end.onrender.com/",
      gitHub_F_END: "",
      gutHub_B_END:
        "https://github.com/Julian22222/PRACTICE/tree/main/MySQL-database",
    },
    {
      img: "https://maychusaigon.vn/wp-content/uploads/2023/07/dinh-nghia-asp-net-la-gi-maychusaigon.jpg",
      title: "ASP.Net Book Store",
      description:
        "Front-end + Back-end Project. Here I used - ASP.NET Core MVC.",
      seeProject_URL: "https://mybookstorewebapp.azurewebsites.net/",
      gitHub_F_END:
        "https://github.com/Julian22222/PRACTICE/tree/main/C_Sharp/Project_MVC_BookShop2",
      gutHub_B_END:
        "https://github.com/Julian22222/PRACTICE/tree/main/C_Sharp/Project_MVC_BookShop2",
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
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CardPortfolio;
