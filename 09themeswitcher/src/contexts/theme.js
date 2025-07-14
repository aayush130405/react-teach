import {createContext, useContext} from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider      //make the theme context available to all components

export default function useTheme() {
    return useContext(ThemeContext)
}