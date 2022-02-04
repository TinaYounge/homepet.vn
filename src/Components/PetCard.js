import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import "./Card.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import { makeStyles } from '@mui/styles';

// import { Link } from "react-router-dom";
const useStyles = makeStyles({
    
    card: {
        boxShadow: "none ",
        border: "none ",
        width: "18%",
        marginBottom: 20,
        display: "inline-block",
        paddingLeft: 2,
        paddingRight: 2,
        marginLeft: 10,
        '@media (min-width: 780px)' : {
            width: '80%'
          }
     
      },
     
  });




const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

export default function PetCard() {
    const classes = useStyles();

  return (
    // <Link to="/singleProduct" style={{ textDecoration: "none" }}>
      <Card
    
      className=  {` ${classes.card}`}
        // className="landing-page__card--border"
        sx={
          {
            maxWidth: { xs: 160, md: 240 },
          }
        }
      >
        <CardMedia
          style={{
            backgroundColor: "grey",
          }}
          component="img"
          alt="green iguana"
          height="250"
          image="https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            キールズ DS クリアリーホワイト{" "}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            肌（角質層）に素早く浸透し、高い美白効果*と保湿効果を発揮する美白*美容液（医薬部外品）
          </Typography>
        </CardContent>
        <StyledRating
          readOnly
          name="customized-color"
          defaultValue={4.5}
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />
        <CardActions>
          <Typography
            style={{
              color: "black",
            }}
          >
            10,230円（税込）
          </Typography>
        </CardActions>
      </Card>
    // </Link>
  );
}