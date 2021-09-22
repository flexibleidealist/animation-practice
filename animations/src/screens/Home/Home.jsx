import { useState, useEffect } from "react"

import "./Home.css"

function Home(){
  const [animate, setAnimate] = useState(false)
  useEffect(()=> {
    setAnimate(true)
  }, [])
  return(
    <div className="home">
      <h2>this is the homepage</h2>
      <div className={ animate ? "box grow" : "box"}></div>
    </div>
  )
}

export default Home