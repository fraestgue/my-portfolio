import React from "react";
import { NavLink } from "react-router-dom";

function NavbarComp() {
  const navCheck = (navInfo) => {
    if (navInfo.isActive === true) {
      return "link-active";
    } else {
      return "link-inactive";
    }
  };

  return (
    <nav>
      <div className="link">
        <NavLink className={navCheck} to="/">
          Home
        </NavLink>
        <NavLink className={navCheck} to="/proyectos">
          Proyectos
        </NavLink>
      </div>
    </nav>
  );
}

export default NavbarComp;
