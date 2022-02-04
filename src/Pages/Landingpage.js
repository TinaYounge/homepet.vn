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
// import FeedBackList from "../../Components/FeedbackList/FeedbackList";

const images = [
  {
    label: "保護された状態を保ち、スタイリッシュに見える",
    des: "モダンなデザインの3層ハンドメイドマスク",

    imgPath:
      "https://images.unsplash.com/photo-1586867763684-05933c155795?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    label: "保護された状態を保ち、スタイリッシュに見える",
    des: "モダンなデザインの3層ハンドメイドマスク",

    imgPath:
      "https://images.unsplash.com/photo-1606501126768-b78d4569d3f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    label: "保護された状態を保ち、スタイリッシュに見える",
    des: "モダンなデザインの3層ハンドメイドマスク",

    imgPath:
      "https://images.unsplash.com/photo-1592199121537-7217efde1c73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
  },
  {
    label: "保護された状態を保ち、スタイリッシュに見える",
    des: "モダンなデザインの3層ハンドメイドマスク",

    imgPath:
      "https://images.unsplash.com/photo-1603042521335-2bc9c8d9ee3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
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
          {/* <SwipeableTextMobileStepper images={images} /> */}
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
          {/* <ImageListItemLanding /> */}
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
          {/* <ListCard /> */}
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