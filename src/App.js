import react from 'react'
import React from 'react'
const App = () => {

  //ciclos de vida hooks useEffect

  // ciclos de vida 

  // momento  que ele é renderizado na tela primeiramente

  // momento que ele é alterado (atualizado)

  //momento que ele some da tela

  const [contar, setCount] = React.useState(0)
  const [data, setData] = React.useState(null)
  console.log('execultou fora')
  React.useEffect(() => {

    console.log('execultou')
  }, []) //se eu colocar um array ele vai execultar somente uma vez

  //podemos ter varios efeitos no nosso componente

  React.useEffect(() => { // efeito que sla muda o titulo do site

    document.title = " Mudando " + contar
  }, [contar])//colocado um dependencia

  // React.useEffect(()=>{ // JEITO ERRADO POIS O STADO VAI MUDAR MAIS O TITLE DO TITULO NÃO

  //   document.title=" Mudando "+contar
  // },[ ]) 


  //nesse exemplo iremos chamar um evento para carregar somente uma vez alguns dados vindo de uma api(ou poderia ser servidor ...)

  React.useEffect(async () => {
    console.log(data)
    try {
      const response = await fetch(" https://ranekapi.origamid.dev/json/api/produto/notebook")
      const data = await response.json()
      setData(data)

    } catch (error) {
      setData('erro')
    }
    return()=>{ // se caso o useEffect tiver algum return significa que quando o cara desmontar o componente 
      //ele sempre vai ser execultado sempre usar uma função
      
      setData()
      console.log('data',data)
    }
  }, [])

  const renderApi=()=> {

    if (data!==null && data!=="erro") {
      return (
        <>
        <div>
          Produto:{data.nome}
        </div>
        <div>
          Preço:{data.preco*contar}
        </div>
        </>
      )
      }else if(data==="erro"){
        return(
          <>
          erro na requisição
          </>
        )
      }
  }

  return (
    <>
      {renderApi()}
      <button onClick={() => setCount(contar + 1)}>{contar}</button>
    </>
  )
}

export default App;