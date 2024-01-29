import React, { useEffect, useState } from "react";

const HookEffectOne = () => {

  const [count, setCount] = useState(0);
  const [name, setName]  = useState(" ")
  const [x, setX] = useState(0);
  const [y, setY] = useState(0)


  useEffect(() => {
    console.log("Update the title")
    document.title = `Count = ${count}`
    
  }, [count])


  const logMousePosition = (e) => {
    console.log('mouse move');
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log(`UseEffect called`)
    window.addEventListener("mousemove", logMousePosition)

    
  }, [])


    return(
        <>
          <h1>Hello, useEffect</h1>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <button onClick={() => setCount(count + 1)}>Click {count}</button>

          <hr />
          <p> (x, y) = ({x}, {y})</p>

          
        </>
    )
}

export default HookEffectOne