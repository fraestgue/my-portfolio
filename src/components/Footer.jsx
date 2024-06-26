import React, { useContext } from "react";
import github from "../assets/imagenes/github.png"
import github1 from "../assets/imagenes/github1.png";
import linkedin from "../assets/imagenes/linkedin.png"
import linkedin1 from "../assets/imagenes/linkedin1.png";
import email from "../assets/imagenes/email.png";
import cv from "../assets/imagenes/cv.png";
import { ThemeContext } from "../context/theme.context";

function Footer() {

  const { darkTheme } = useContext(ThemeContext)

  return (
    <div className="pie">
      <hr />

      <div className="footer">
      <a href="https://github.com/fraestgue" target="blank">{darkTheme === true ? <img src={github1} alt="github" width={"50px"}/> : <img src={github} alt="github" width={"50px"}/> }
      </a>

      <a href="https://www.linkedin.com/in/francisco-estepa-guerra/" target="blank">{darkTheme === true ? <img src={linkedin1} alt="linkedin" width={"50px"}/> : <img src={linkedin} alt="linkedin" width={"50px"}/> }
      </a>
        <a href="mailto:estepaguerrafrancisco@gmail.com" target="blank">
          <img src={email} alt="email" width={"50px"} />
        </a>

        <a
          href="https://www.canva.com/design/DAGAVwXOgRA/yfcEyuQluQ7ViWWcMJWnvA/view?utm_content=DAGAVwXOgRA&utm_campaign=designshare&utm_medium=link&utm_source=editor"
          target="blank"
        >
          <img src={cv} alt="cv" width={"50px"} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
