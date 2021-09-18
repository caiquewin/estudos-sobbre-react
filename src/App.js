import React, { useState } from 'react'
import Modal from './components/Modal'
import ButtonModal from './components/ButtonModal' 

function App() {
  const [ativo, setAtivo] = useState(false) 
  return (
    <>
    {/* aqui estou compartilhando o meu hook entre os componentes abixo  */}
    {/* compartilhando tbm as funções */}
    <Modal ativo={ativo } setAtivo={setAtivo}/> 
    <ButtonModal setAtivo={setAtivo}/>
    </>
  );
}

export default App;