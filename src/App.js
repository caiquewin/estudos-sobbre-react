import React, { useState } from 'react' 
function App() {

  const [contador, setContado] = useState(1)  
  const [items ,setItems]=useState(['item1'])

  function handleClick() {
 setContado((contador)=>{

   
   return contador +1
  })
  setItems(()=>[...items,`items${contador+1}`])
  }
 
console.log('verificando array',items)
  return (
    <> 
    {items.map(e=>  <li key={e}>{e}</li>)}
    <button onClick={()=>handleClick()}>{contador}</button>
    </>
  );
}

export default App;