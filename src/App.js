import React from 'react'

function App() {
  let ativo = true
  function handleClick() {
    ativo = !ativo
    console.log("ativo:",ativo)
  }
  return (
    <>
      <button onClick={handleClick}>{ativo ? "ativo" : "desativo"}</button>
    </>
  );
}

export default App;