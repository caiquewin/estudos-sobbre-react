import React, { useState } from 'react'
import Home from './components/Home/Home'
function App() {

  const [contador, setContado] = useState(1)
  const [items, setItems] = useState(['item1'])

  function handleClick() {
    setContado((contador) => {


      return contador + 1
    })
    setItems(() => [...items, `items${contador + 1}`])
  }
 
  return (
    <>
    <Home/> 
    </> 
  );
}

export default App;