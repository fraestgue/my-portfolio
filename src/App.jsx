import { useContext } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Proyectos from "./pages/Proyectos";
import Footer from "./components/Footer";
import NavbarComp from "./components/NavbarComp";
import ParticlesComponent from "./components/ParticlesComponent";

function App() {
  

  return (
    <div>
      <ParticlesComponent className="particles" />
    <div >

    
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
