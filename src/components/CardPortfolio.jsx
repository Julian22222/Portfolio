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
            image="data:image/jpeg;base64,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"
            title="toDoList"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              MySQL DB
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ASP.Net MVC
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <a href="mybookstorewebapp.azurewebsites.net" target="_blank">
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
