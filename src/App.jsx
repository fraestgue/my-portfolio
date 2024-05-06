import { useContext } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ThemeContext } from "./context/theme.context";
import Homepage from "./pages/Homepage";
import Proyectos from "./pages/Proyectos";
import Footer from "./components/Footer";
import NavbarComp from "./components/NavbarComp";
import ParticlesComponent from "./components/ParticlesComponent";

function App() {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div>
      <ParticlesComponent className="particles" />
    <div className={darkTheme === true ? "dark-page" : "light-page"}>

    
      <div className="pagina">
      <NavbarComp />
      <br />
      <hr />
        <Routes>
          <Route path={"/"} element={<Homepage />} />
          <Route path="/proyectos" element={<Proyectos />} />
        </Routes>
      <footer>

      <Footer />
      </footer>
      </div>
      </div>
    </div>
  );
}

export default App;
