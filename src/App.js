import Header from "./Components/Header";
import LandingPage from "./Pages/Landingpage";

function App() {
  const sections = [
    { title: "Home", url: "/" },
    { title: "Nhận nuôi", url: "/adopt" },
    { title: "Forum", url: "/forum"},
    { title: "Dự án", url: "/project" },
    { title: "Thông tin tiêm chủng", url: "/Vaccine" },
    { title: "Thức ăn& làm đẹp", url: "#" },
    { title: "Cho thú nuôi", url: "/Giving" },
  ];
  return (
    <div className="App">
                <Header title="Blog" sections={sections} maxWidth="lg" />

<LandingPage/>    
</div>
  );
}

export default App;
