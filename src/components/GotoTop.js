import React from 'react'
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from 'react'

function GotoTop() {

    const [gotoTop, setGotoTop] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll',()=>{
            if(window.scrollY>200){
                setGotoTop(true)
            }
            else{
                setGotoTop(false)
            }
        })
    }, []);

    const scrollUp = () =>{
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        })
    }

  return (
    <div>
      {
        gotoTop && (
            <FaArrowUp className='fixed bottom-10 right-6 font-bold text-4xl bg-primary text-white rounded-full p-1 hover:bg-secondary cursor-pointer' onClick={scrollUp} />
        )
      }
    </div>
  )
}

export default GotoTop
