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
              Use React framework / CSS / JS / HTML. Here you can request random
              cat api, creating random color background and play rock papaer
              scissors game .
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
              Front-end Project: created Wine shop website using React
              framework.
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
                <input type="button" class="buttonProject" value="GitHub" />
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
              Movies
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Front-end + Back-end Project: created Movies website using Vue JS,
              JavaScript, CSS, MongoDB etc. Implemented endpoints to get all
              movies, delete, update movie by Id and to post new movie to
              MongoDB.
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
              NC NEWS
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Front-end + Back-end Project: created news website using React JS,
              JavaScript, CSS, postgreSQL etc. Implemented endpoints to get all
              news, delete, update comments by news Id and to post new commens
              and likes to postgreSQL.
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
              Wordle
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Front-end Project: created Wordle game using JavaScript, HTML, CSS
              and React JS.
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
      </div>
    </div>
  );
};

export default CardPortfolio;
