import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import SwipeableTextMobileStepper from "../../Components/Header/Stepper";
// import ListCard from "../../Components/Card/ListCard";
import { Typography } from "@mui/material";
// import ImageListItemLanding from "../../Components/ImageList/ImageList";
// import Message from "../../Components/Message/Message";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import SwipeableTextMobileStepper from "../Components/SteperLandingPage";
import PetCard from "../Components/PetCard";

// import FeedBackList from "../../Components/FeedbackList/FeedbackList";

const images = [
  {
    label: "保護された状態を保ち、スタイリッシュに見える",
    des: "モダンなデザインの3層ハンドメイドマスク",

    imgPath:
      "https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
  },
  {
    label: "保護された状態を保ち、スタイリッシュに見える",
    des: "モダンなデザインの3層ハンドメイドマスク",

    imgPath:
      "https://images.unsplash.com/photo-1557495235-340eb888a9fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1413&q=80",
  },
  {
    label: "保護された状態を保ち、スタイリッシュに見える",
    des: "モダンなデザインの3層ハンドメイドマスク",

    imgPath:
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1392&q=80",
  },
  {
    label: "保護された状態を保ち、スタイリッシュに見える",
    des: "モダンなデザインの3層ハンドメイドマスク",

    imgPath:
      "https://images.unsplash.com/photo-1560534493-fca50fa9bfe1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];

const theme = createTheme();
function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}
export default function LandingPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <SwipeableTextMobileStepper images={images} />
          
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              width: "100%",
              textAlign: "center",
              borderBottom: "2px solid #000",
              lineHeight: "0rem",
              margin: "20px 0px 40px",
            }}
          >
            <span style={{ padding: "0 10px", backgroundColor: "#ffff" }}>
              NEW{" "}
            </span>
          </Typography>
   <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              width: "100%",
              textAlign: "center",
              borderBottom: "2px solid #000",
              lineHeight: "0rem",
              margin: "50px 0px 20px",
            }}
          >
            <span style={{ padding: "0 10px", backgroundColor: "#ffff" }}>
              {" "}
              Sản phẩm ưa thích
            </span>
          </Typography>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="success"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#91986B",
                color: "#ffffff",
              },
            }}
            aria-label="  tabs example"
          >
            <LinkTab label="週間売上ランキング" href="/drafts" />
            <LinkTab label="NEW" href="/trash" />
            <LinkTab label="セール" href="/spam" />
          </Tabs>
<PetCard/>          {/* <ListCard /> */}
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              width: "100%",
              textAlign: "center",
              borderBottom: "2px solid #000",
              lineHeight: "0rem",
              margin: "50px 0px 40px",
            }}
          >
            <span
              style={{
                padding: "0 10px",
                backgroundColor: "#ffff",
              }}
            >
              {" "}
              Khách hàng và Origami{" "}
            </span>
          </Typography>
          {/* <FeedBackList /> */}
          {/* <Message /> */}
        </main>
      </Container>
    </ThemeProvider>
  );
}