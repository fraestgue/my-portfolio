import { createContext, useState } from "react";

const ThemeContext = createContext()

function ThemeWrapper(props) {
    const [ darkTheme, setDarkTheme ] = useState(true)

    const toggleTheme = () => setDarkTheme(!darkTheme)

    const passedContext = {
        darkTheme,
        toggleTheme
    }

    return (
        <ThemeContext.Provider value={passedContext}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {
    ThemeContext,
    ThemeWrapper
}