import React, { useState } from 'react'
import LightButton from '../../assets/website/light-mode-button.png'
import DarkButton from '../../assets/website/dark-mode-button.png'
const DarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : "light")
    const element = document.documentElement
    console.log(element)

    React.useEffect(() => {
        localStorage.setItem("theme", theme);
        if(theme == "dark"){
            element.classList.add("dark")
            element.classList.add("dark")
        }else{
            element.classList.remove("light")
            element.classList.remove("dark")
        }
    })
    return (
        <div>
            <img onClick={() => setTheme(theme == "dark" ? "light" : "dark")} src={DarkButton} alt="" className={`w-12 cursor-pointer absolute top-7 right-5 z-10 ${theme == 'light' ? 'opacity-0' : 'opacity-100'} transition-all duration-300`}/>
            <img onClick={() => setTheme(theme == "dark" ? "light" : "dark")} src={LightButton} alt="" className={`w-12 cursor-pointer absolute top-7 right-5 z-10 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'} transition-all duration-300`}/>
        </div>
    )
}

export default DarkMode
