import React from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../context/theme.context'

function NavbarComp() {

    const {darkTheme, toggleTheme} = useContext(ThemeContext)

    const navCheck = (navInfo) => {

        if (navInfo.isActive === true) {
            return "link-active"
        } else {
            return "link-inactive"
        }
    }


  return (
    <nav>
        
        <button onClick={toggleTheme}>{darkTheme === true ? "☼" : "☾" }</button>
        <div className='link'>

        <NavLink className={navCheck} to="/">Home</NavLink>
        <NavLink className={navCheck} to="/proyectos" >Proyectos</NavLink>
        </div>
    </nav>
  )
}

export default NavbarComp