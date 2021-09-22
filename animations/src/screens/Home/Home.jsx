import { useState, useEffect } from "react"

import "./Home.css"

function Home(){
  const [animate, setAnimate] = useState(false)
  useEffect(()=> {
    setAnimate(false)
  }, [])
  return(
    <div className="home">
      <div className={ animate ? "box grow" : "box"}></div>
      <div className="circle"></div>
    </div>
  )
}

export default Home