import React, { useState } from 'react'
import { getOrigamid } from '../services/index'

function Home() {

  const [data, setData] = useState({ loading: false, data: null })
  const [items, setItems] = useState(['Tablet', 'Smartphone', 'Notebook'])


  const renderData = () => {

    if (data.loading) {

      return (
        <>
          <img style={{ width: "250px" }} src="https://img.pikbest.com/58pic/35/39/61/62K58PICb88i68HEwVnm5_PIC2018.gif!c1024wm0/compress/true/progressive/true/format/webp/fw/1024" />
        </>
      )
    } else {
      if (data.data === 'erro') {
        {
          return (<>
          <img style={{ width: "250px" }} src="https://www.ativasoft.com.br/blog/wp-content/uploads/2017/08/omg_where.gif" />

          
            <h1>ocororreu um erro </h1>
          </>)
        }
      } else if (data.data) {
        let response = data.data
        console.log(data.data);
        let preco = parseInt(response.preco).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        return (
          <div>
            {response.nome}
            <li>Descrição: {response.descricao}'</li>
            {response.nome}
            <div>
              Preço {preco}
            </div>
          </div>
        )

      } else if (data.data === null) {
        return (
          <>
            <img style={{ width: "300px" }} src="https://c.tenor.com/Cml6XhVelmoAAAAC/worried-waiting.gif" />
          </>
        )
      }
    }
  }

  async function LoadingApi(name) {
    try {
      setData({ loading: true, data: '' })
      let response = await getOrigamid(name)
      response = await response.json()
      setData({ loading: false, data: response })
    } catch (error) {
      console.error("ocorreu um erro ao fazer a requição do ", name);
      setData({ loading: false, data: 'erro' })
    }
  }

  const renderButton = () => {
    return (
      <div>
        {items.map((e, index) => {
          return (
            <button key={index} onClick={() => LoadingApi(e)}>{e}</button>
          )
        })}
      </div>
    )
  }

  return (
    <>

      {renderButton()}
      <br />
      {renderData()}
    </>
  );
}

export default Home;