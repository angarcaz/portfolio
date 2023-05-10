import "./styles/App.css";
import { Route, Routes } from "react-router-dom";

//Pages:
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

//Components:
import FooterComponent from "./core/FooterComponent";
import NavComponent from "./core/NavComponent";

function App() {
  return (
    <div className="App">
      <NavComponent></NavComponent>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
      </Routes>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
