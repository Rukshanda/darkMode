import { createContext, useContext } from "react";

 

// here is our context
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

// here is our context provider

export const ThemeProvider = ThemeContext.Provider;


// and here is the function that will return the ThemeContext values 
export default function useTheme(){
    return useContext(ThemeContext)
}