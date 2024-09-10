import React from "react";
import { useNavigate } from "react-router-dom";
import data from "../utils/data.json";
import mandalorian from "../assets/imagenes/mandalorian.png";
import gamehype from "../assets/imagenes/gamehype.png";
import ciclocero from "../assets/imagenes/ciclocero.png";
import agc from "../assets/imagenes/agc.png"
import github from "../assets/imagenes/github.png";
import enlace from "../assets/imagenes/clip.png";
import Atropos from "atropos/react";

function Proyectos() {
  const navigate = useNavigate();
  const myAtropos = Atropos({
    el: ".my-atropos",
    activeOffset: 40,
    shadowScale: 1.05,
    onEnter() {
      console.log("Enter");
    },
    onLeave() {
      console.log("Leave");
    },
    onRotate(x, y) {
      console.log("Rotate", x, y);
    },
  });

  const handleBack = () => navigate(-1);

  return (
    <div className="proyectos">
      <button className="botonpatata" onClick={handleBack}>
        🔙
      </button>

      <div>
        <h1>PROYECTOS</h1>

        {data.proyectos.map((eachData, index) => {
          return (
            <div key={index} className="atropos">
              <hr />
              <h2>{eachData.nombre}</h2>
              
              <Atropos className="my-atropos">
                {eachData.nombre === "GAMEHYPE" && (
                  <div className="button-container">
                    <img
                      src={gamehype}
                      data-atropos-offset="0"
                      className="proyecto-img"
                    />
                    <a href={eachData.github} target="blank">
                      <button className="boton">
                        <img src={github} alt="github" width={"15px"} />
                      </button>
                    </a>
                    <a href={eachData.enlace} target="blank">
                      <button className="boton2">
                        <img src={enlace} alt="enlace" width={"15px"} />
                      </button>
                    </a>
                  </div>
                )}
                {eachData.nombre === "Ciclocero" && (
                  <div>
                    <div className="button-container">
                      <img
                        src={ciclocero}
                        data-atropos-offset="0"
                        className="proyecto-img"
                      />
                      <a href={eachData.github} target="blank">
                        <button className="boton">
                          <img src={github} alt="github" width={"15px"} />
                        </button>
                      </a>
                      <a href={eachData.enlace} target="blank">
                        <button className="boton2">
                          <img src={enlace} alt="enlace" width={"15px"} />
                        </button>
                      </a>
                    </div>
                  </div>
                )}
                {eachData.nombre === "AGC Gestión" && (
                  <div>
                    <div className="button-container">
                      <img
                        src={agc}
                        data-atropos-offset="0"
                        className="proyecto-img"
                      />
                      <a href={eachData.github} target="blank">
                        <button className="boton">
                          <img src={github} alt="github" width={"15px"} />
                        </button>
                      </a>
                      <a href={eachData.enlace} target="blank">
                        <button className="boton2">
                          <img src={enlace} alt="enlace" width={"15px"} />
                        </button>
                      </a>
                    </div>
                  </div>
                )}
                {eachData.nombre === "Mandalorian" && (
                  <div className="button-container">
                    <img
                      src={mandalorian}
                      data-atropos-offset="0"
                      className="proyecto-img"
                    />

                    <a href={eachData.github} target="blank">
                      <button className="boton">
                        <img src={github} alt="github" width={"15px"} />
                      </button>
                    </a>
                    <a href={eachData.enlace} target="blank">
                      <button className="boton2">
                        <img src={enlace} alt="enlace" width={"15px"} />
                      </button>
                    </a>
                  </div>
                )}
              </Atropos>

              <div className="descripcion">
                <p className="descripcion">{eachData.descripcion}</p>
                {eachData.paquetes.map((eachPaquete, index) => {
                  return (
                    <span key={index} className="paquetes">
                      <b>
                        {eachPaquete} · {""}
                      </b>
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Proyectos;
