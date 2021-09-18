import React from 'react'

function App() {
  const [ativo, setAtivo] = React.useState(false) 
  console.log('valor',ativo,
  '\nfuncao:',setAtivo) 
  return (
    <>
    <button onClick={()=>setAtivo(!ativo)}>{ativo?"Ativo":"Desativado"}</button>
    </>
  );
}

export default App;