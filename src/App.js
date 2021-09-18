import React from 'react'

function App() {
  const [ativo ,setAtivo] = React.useState()

  return (
    <>
      <button onClick={()=>  setAtivo(!ativo)}>{ativo ? "ativo" : "desativo"}</button>
    </>
  );
}

export default App;