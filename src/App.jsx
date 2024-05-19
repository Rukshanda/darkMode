
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
 
function App() {

  // getting the themeMode becuase on the basis of that we are going to change the theme of the component
  const [themeMode, setThemeMode] = useState("light")

  // if the lightTheme then set the ThemeMode to light
  const lightTheme = () => {
    setThemeMode("light")
  }
  // if the darkTheme then set the ThemeMode to dark

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    // first remove the classes conaing the light and dark
    document.querySelector('html').classList.remove("light", "dark")
    // then add according to the state
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  

  return (
    // wrapping our context in the provider ThemeProvider IMPORTED from the context file
    // remeber in Provider we pass our value
    // as in the components we are going to use them
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App