import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CardPortfolio = () => {
  return (
    <div className="CardPortfolio">
      <Card sx={{ maxWidth: 345 }} className="EachCard">
        <CardMedia
          sx={{ height: 140 }}
          image="https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg"
          title="random color cat"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Colour Cat
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Use React framework / CSS / JS. On click shows random color and
            random cat psc.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <a href="https://julian22222.github.io/Colour_Cat/" target="_blank">
              <input type="button" class="buttonProject" value="See project" />
            </a>
          </Button>
          <Button size="small">
            <a href="https://github.com/Julian22222/Colour_Cat" target="_blank">
              <input type="button" class="buttonProject" value="GitHub" />
            </a>
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345 }} className="EachCard">
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
            Front-end Project: created Wine shop website using React framework.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <a href="https://julian22222.github.io/Wine-Shop/" target="_blank">
              <input type="button" class="buttonProject" value="See project" />
            </a>
          </Button>
          <Button size="small">
            <a href="https://github.com/Julian22222/Wine-Shop" target="_blank">
              <input type="button" class="buttonProject" value="GitHub" />
            </a>
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345 }} className="EachCard">
        <CardMedia
          sx={{ height: 140 }}
          image="https://grangerchurch.com/wp-content/uploads/2018/06/atthemovies_series_1440x829.jpg"
          title="wine shop shelf"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Movies
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Back-end Project: implemented endpoints to see all the movies, to
            get, delete and update movie by Id, to post new movie to MongoDB.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <a href="https://movies-ypff.onrender.com/" target="_blank">
              <input type="button" class="buttonProject" value="See project" />
            </a>
          </Button>
          <Button size="small">
            <a
              href="https://github.com/Julian22222/PRACTICE/tree/main/MongoDB"
              target="_blank"
            >
              <input type="button" class="buttonProject" value="GitHub" />
            </a>
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345 }} className="EachCard">
        <CardMedia
          sx={{ height: 140 }}
          image="http://vskills.in/certification/blog/wp-content/uploads/2015/01/structure-of-a-news-report.jpg"
          title="wine shop shelf"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            NC NEWS
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Front-end + Back-end Project: created news website using JavaScript,
            CSS, React JS, postgreSQL etc.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <a href="https://nc-news-front-end.onrender.com/" target="_blank">
              <input type="button" class="buttonProject" value="See project" />
            </a>
          </Button>
          <Button size="small">
            <a
              href="https://github.com/Julian22222/nc-news-front-end"
              target="_blank"
            >
              <input type="button" class="buttonProject" value="GitHub F-End" />
            </a>
          </Button>
          <Button size="small">
            <a
              href="https://github.com/Julian22222/NC_NEWS_Project"
              target="_blank"
            >
              <input type="button" class="buttonProject" value="GitHub B-End" />
            </a>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardPortfolio;
