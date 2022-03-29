import { Interactions } from "../Interactions";

import Card from "@mui/material/Card";
import { useTheme } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";

import "./Content.css";

function writeContent(data) {
  if (data.parentId === "") {
    return data.content;
  }

  return "Replying to @"+data.parentId+"\u000A\u000A"+data.content;
}

export const Content = ({ data }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        padding: "10px",
        width: "80vw",
        maxWidth: { sm: 400, md: 500, lg: 600, xl: 600 },
        maxHeight: "150vh",
        borderRadius: "15px",
        backgroundColor: "#121212",
      }}
    >
      <CardHeader
        avatar={
          <Link to={"/profile?user="+data["username"]}>
            <Avatar
              sx={{ bgcolor: theme.palette.primary.main }}
              aria-label={data.name}
            ></Avatar>
          </Link>
        }
        action={
          <>
            <Typography
              variant="body1"
              fontSize={15}
              component={"p"}
              color={"#fff"}
            >
              {data.topic}
            </Typography>
            <Typography
              variant="body1"
              fontSize={12}
              component={"p"}
              color={"#c4c4c4"}
            >
              {data.date}
            </Typography>
          </>
        }
        title={data.name}
        subheader={`@${data.username}`}
      />
      {data.parentId!=="" ? <Typography sx={{fontWeight: 300, whiteSpace: "pre-wrap"}} variant="body1" color="text.primary">
          {"Replying to @"+data.parentId}
        </Typography> : null}
      {data.img ? <CardMedia component="img" image={data.img} /> : null}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Interactions up={data.up} down={data.down} uuid={data.uuid} />
      </CardActions>
    </Card>
  );
};
