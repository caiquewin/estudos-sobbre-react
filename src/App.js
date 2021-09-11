 import React, {Fragment} from 'react'

// const Titulo =  (props) => { // jeito sem desestruturar

//   return(
//     <>
//     <h1 style={{color:`${props.corLetera}`}}>{props.texto}</h1>
//     </>
//   )
// }

const Titulo =  ({corLetera,texto}) => { // desistruturando

  return(
    <>
    <h1 style={{color:`${corLetera}`}}>{texto}</h1>
    </>
  )
}


function App() {
  return (
    <>
  <Titulo corLetera="red" texto="Olá prezado0"/>
  <Titulo corLetera="blue" texto="Olá prezado1"/>
  <Titulo corLetera="pink" texto="Olá prezado2"/>

    </>
  );
}

export default App;