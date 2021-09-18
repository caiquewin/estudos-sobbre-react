import React, {useState}from 'react'

function App() {
  const [ativo, setAtivo] = useState(false) 
  const [contar, setContar] = useState(0) 
  const [pessoa, setPessoa] = useState({nome:'',idade:0}) 

  console.log('valor',ativo,
  '\nContar:',contar,
  '\nPessoa:',pessoa) 
  return (
    <>
    <div>
    <p>mudar o stado do botão</p>
    <button onClick={()=>setAtivo(!ativo)}>{ativo?"Ativo":"Desativado"}</button>
    </div>
    <div>
      <p>Somatória com react hook</p>
      <button onClick={()=>setContar(contar+1)}>{contar}</button>
    </div>
    <div>
      <form>
        <lable>Nome</lable>
        <input onChange={(e)=>setPessoa({...pessoa,nome:e.target.value})}/>
        <lable>Idade</lable>
        <input type="number" onChange={(e)=>setPessoa({
         ...pessoa,idade:e.target.value 
        })}/>
      </form>
    </div>
    <br/>
    <p>{pessoa.nome}</p>
    <p>{pessoa.idade}</p>
    </>
  );
}

export default App;