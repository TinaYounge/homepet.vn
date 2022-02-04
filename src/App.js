import Header from "./Components/Header";
import LandingPage from "./Pages/Landingpage";
import { useState, useEffect } from "react";
import PhoneHeader from "./Components/PhoneHeader";
import { Container } from "@mui/material";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
function App() {
  const sections = [
    { title: "Home", url: "/" },
    { title: "Nhận nuôi", url: "/adopt" },
    { title: "Forum", url: "/forum"},
    { title: "Dự án", url: "/project" },
    { title: "Thông tin tiêm chủng", url: "/Vaccine" },
    { title: "Giải cứu", url: "/help" },
    { title: "Cho thú nuôi", url: "/Giving" },
  ];
  const { width } = useWindowDimensions();

  return (
    <div className="App">
             <Container maxWidth="lg">
        {width > 600 ? (
          <Header title="Blog" sections={sections} maxWidth="lg" />
        ) : (
          <PhoneHeader title="Blog" sections={sections} maxWidth="lg" />
          
        )}
      </Container>

<LandingPage/>    
</div>
  );
}

export default App;
