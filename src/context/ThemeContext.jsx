import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext()

// eslint-disable-next-line react/prop-types
const ThemeProvider = ({ children }) => {

    let [theme, setTheme] = useState("light")

    let handleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme, handleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
