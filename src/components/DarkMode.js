import React, {useEffect,useState} from 'react'
import { MdDarkMode, MdLightMode } from "react-icons/md";

function DarkMode() {

    const [theme,setTheme] = useState(localStorage.getItem("theme")|| 'light')

    useEffect(()=>{
        if(theme === 'dark'){
            document.documentElement.classList.add("dark")
            localStorage.setItem('theme','dark')
        }
        else{
            document.documentElement.classList.remove("dark")
            localStorage.setItem('theme','light')
        }
    },[theme])

  return (
    <div>
      <div className='relative'>
        <MdDarkMode className={`text-2xl cursor-pointer transition-all duration-300 absolute left-0 z-10 ${theme === 'dark'?'opacity-0':'opacity-100'}`} onClick={()=>setTheme(theme==='dark'?'light':'dark')} />
        <MdLightMode className={`text-2xl cursor-pointer transition-all duration-300 ${theme === 'light'?'opacity-0':'opacity-100'} `} onClick={()=>setTheme(theme==='dark'?'light':'dark')} />
      </div>
    </div>
  )
}

export default DarkMode
