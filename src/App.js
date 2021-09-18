import React from 'react'

function App() {
  const ativoHook = React.useState(false)
  const valor = ativoHook[0]
  const funcao = ativoHook[1]
  console.log('valor',valor,
  '\nfuncao:',funcao)
// function handleClick(){  // jeito mais "antigo de chamar a função"
  
//   funcao(!valor) 
// }
  return (
    <>
      {/* <button onClick={handleClick}>{valor ? "ativo" : "desativo"}</button> jeito antigo de chamar a funcao*/} 
    <button onClick={()=>funcao(!valor)}>{valor?"Ativo":"Desativado"}</button>
    </>
  );
}

export default App;