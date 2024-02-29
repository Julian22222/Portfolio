import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CardPortfolio = () => {
  return (
    <div className="CardPortfolio">
      <div className="first-line">
        <Card sx={{ maxWidth: 355 }} className="EachCard">
          <CardMedia
            sx={{ height: 140 }}
            image="https://img-c.udemycdn.com/course/750x422/4925142_c0ab.jpg"
            title="JavaScript projects webpage"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              JavaScript projects
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Here I used - React JS framework / JavaScript / Node JS / HTML /
              CSS .
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <a
                href="https://julian22222.github.io/All-JavaScript-Proj/"
                target="_blank"
              >
                <input
                  type="button"
                  class="buttonProject"
                  value="See project"
                />
              </a>
            </Button>
            <Button size="small">
              <a
                href="https://github.com/Julian22222/All-JavaScript-Proj"
                target="_blank"
              >
                <input type="button" class="buttonProject" value="GitHub" />
              </a>
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 355 }} className="EachCard">
          <CardMedia
            sx={{ height: 140 }}
            image="https://www.winemag.com/wp-content/themes/TrellisFoundation-child/assets/img/toplists_header.jpg"
            title="wine shop shelf"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Wine Shop
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Front-end + Back-end Project. Here I used - React JS framework /
              REST APIs / PSQL / JavaScript / Node JS / HTML / CSS .
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <a
                href="https://julian22222.github.io/Wine-Shop/"
                target="_blank"
              >
                <input
                  type="button"
                  class="buttonProject"
                  value="See project"
                />
              </a>
            </Button>

            <Button size="small">
              <a
                href="https://github.com/Julian22222/Wine-Shop"
                target="_blank"
              >
                <input
                  type="button"
                  class="buttonProject"
                  value="GitHub F-End"
                />
              </a>
            </Button>

            <Button size="small">
              <a
                href="https://github.com/Julian22222/Wine-Shop-BackEnd"
                target="_blank"
              >
                <input
                  type="button"
                  class="buttonProject"
                  value="GitHub B-End"
                />
              </a>
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 355 }} className="EachCard">
          <CardMedia
            sx={{ height: 140 }}
            image="https://grangerchurch.com/wp-content/uploads/2018/06/atthemovies_series_1440x829.jpg"
            title="movies"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Movies website
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Front-end + Back-end Project. Here I used - Vue JS / REST APIs /
              MongoDB / JavaScript / Node JS / HTML / CSS .
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <a
                href="https://movies-vue-front-end.onrender.com/"
                target="_blank"
              >
                <input
                  type="button"
                  class="buttonProject"
                  value="See project"
                />
              </a>
            </Button>

            <Button size="small">
              <a
                href="https://github.com/Julian22222/Vue-Website---movies"
                target="_blank"
              >
                <input
                  type="button"
                  class="buttonProject"
                  value="GitHub F-End"
                />
              </a>
            </Button>

            <Button size="small">
              <a
                href="https://github.com/Julian22222/PRACTICE/tree/main/MongoDB"
                target="_blank"
              >
                <input
                  type="button"
                  class="buttonProject"
                  value="GitHub B-End"
                />
              </a>
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 355 }} className="EachCard">
          <CardMedia
            sx={{ height: 140 }}
            image="http://vskills.in/certification/blog/wp-content/uploads/2015/01/structure-of-a-news-report.jpg"
            title="nc-news-front"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              NC NEWS website
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Front-end + Back-end Project. Here I used - React JS framework /
              REST APIs / postgreSQL / JavaScript / Node JS / HTML / CSS .
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <a href="https://nc-news-front-end.onrender.com/" target="_blank">
                <input
                  type="button"
                  class="buttonProject"
                  value="See project"
                />
              </a>
            </Button>
            <Button size="small">
              <a
                href="https://github.com/Julian22222/nc-news-front-end"
                target="_blank"
              >
                <input
                  type="button"
                  class="buttonProject"
                  value="GitHub F-End"
                />
              </a>
            </Button>
            <Button size="small">
              <a
                href="https://github.com/Julian22222/NC_NEWS_Project"
                target="_blank"
              >
                <input
                  type="button"
                  class="buttonProject"
                  value="GitHub B-End"
                />
              </a>
            </Button>
          </CardActions>
        </Card>
        <br />
      </div>

      <div className="second-line">
        <Card sx={{ maxWidth: 355 }} className="EachCard">
          <CardMedia
            sx={{ height: 140 }}
            image="https://assets2.rockpapershotgun.com/wordle-past-answers-header.jpg/BROK/thumbnail/1200x900/quality/100/wordle-past-answers-header.jpg"
            title="wordle"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Wordle game
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Front-end Project. Here I used - React JS framework / JavaScript /
              Node JS / HTML / CSS .
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <a href="https://julian22222.github.io/Wordle/" target="_blank">
                <input
                  type="button"
                  class="buttonProject"
                  value="See project"
                />
              </a>
            </Button>
            <Button size="small">
              <a href="https://github.com/Julian22222/Wordle" target="_blank">
                <input type="button" class="buttonProject" value="GitHub" />
              </a>
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 355 }} className="EachCard">
          <CardMedia
            sx={{ height: 140 }}
            image="https://blog.hubspot.com/hubfs/To_Do_List.png"
            title="toDoList"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              To do List
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Front-end + Back-end Project. Here I used - React JS framework /
              REST APIs / postgreSQL / JavaScript / Node JS / HTML / CSS .
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <a
                href="https://to-do-list-front-end.onrender.com/"
                target="_blank"
              >
                <input
                  type="button"
                  class="buttonProject"
                  value="See project"
                />
              </a>
            </Button>
            <Button size="small">
              <a
                href="https://github.com/Julian22222/PRACTICE/tree/main/To-Do-List/client-front-end"
                target="_blank"
              >
                <input
                  type="button"
                  class="buttonProject"
                  value="GitHub F-End"
                />
              </a>
            </Button>

            <Button size="small">
              <a
                href="https://github.com/Julian22222/PRACTICE/tree/main/To-Do-List/server"
                target="_blank"
              >
                <input
                  type="button"
                  class="buttonProject"
                  value="GitHub B-End"
                />
              </a>
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 355 }} className="EachCard">
          <CardMedia
            sx={{ height: 140 }}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGV7sgoJwZS5kpW691ToyQpHWF3_sFpEIW4A&usqp=CAU"
            title="toDoList"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              MySQL DB
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Back-end MySQL Project. Here I used - REST APIs / MySQL /
              JavaScript / Node JS /
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <a href="https://car-shop-back-end.onrender.com/" target="_blank">
                <input
                  type="button"
                  class="buttonProject"
                  value="See project"
                />
              </a>
            </Button>

            <Button size="small">
              <a
                href="https://github.com/Julian22222/PRACTICE/tree/main/MySQL-database"
                target="_blank"
              >
                <input
                  type="button"
                  class="buttonProject"
                  value="GitHub B-End"
                />
              </a>
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 355 }} className="EachCard">
          <CardMedia
            sx={{ height: 140 }}
            image="https://maychusaigon.vn/wp-content/uploads/2023/07/dinh-nghia-asp-net-la-gi-maychusaigon.jpg"
            title="toDoList"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              ASP.Net
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Front-end + Back-end Project. Here I used - ASP.NET framework.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <a
                href="https://mybookstorewebapp.azurewebsites.net/"
                target="_blank"
              >
                <input
                  type="button"
                  class="buttonProject"
                  value="See project"
                />
              </a>
            </Button>

            <Button size="small">
              <a
                href="https://github.com/Julian22222/PRACTICE/tree/main/C_Sharp/Project_MVC_BookShop2"
                target="_blank"
              >
                <input type="button" class="buttonProject" value="GitHub" />
              </a>
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default CardPortfolio;
