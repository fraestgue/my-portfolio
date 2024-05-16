import React from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../context/theme.context'

function NavbarComp() {

    const {darkTheme, toggleTheme} = useContext(ThemeContext)

    const navCheck = (navInfo) => {

        if (navInfo.isActive && darkTheme) {
            return "link-active dark-active"
        } else if (navInfo.isActive && !darkTheme) {
            return "link-active light-active" 
        } else if (!navInfo.isActive && darkTheme){
            return "link-inactive dark-active"
        } else {
            return "link-inactive light-active"
        }
    }


  return (
    <nav>

        <button onClick={toggleTheme}>{darkTheme ? "☼" : "☾" }</button>
        <div className='link'>

        <NavLink className={navCheck} to="/">Home</NavLink>
        <NavLink className={navCheck} to="/proyectos" >Proyectos</NavLink>
        </div>
    </nav>
  )
}

export default NavbarComp