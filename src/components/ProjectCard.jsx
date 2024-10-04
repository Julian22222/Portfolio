import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ProjectCard = (props) => {
  return (
    <Card sx={{ maxWidth: 355 }} className="EachCard">
      <CardMedia
        sx={{ height: 140 }}
        // image={require(props.img)}
        image={props.img}
        className="EchCardImage"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <a href={props.seeProject_URL} target="_blank">
            <input type="button" class="buttonProject" value="See project" />
          </a>
        </Button>
        {props.switch === "Front" || props.switch === "Both" ? (
          <Button size="small">
            <a href={props.gitHub_F_END} target="_blank">
              <input type="button" class="buttonProject" value="GitHub F-End" />
            </a>
          </Button>
        ) : (
          ""
        )}

        {props.switch === "Back" || props.switch === "Both" ? (
          <Button size="small">
            <a href={props.gutHub_B_END} target="_blank">
              <input type="button" class="buttonProject" value="GitHub B-End" />
            </a>
          </Button>
        ) : (
          ""
        )}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
