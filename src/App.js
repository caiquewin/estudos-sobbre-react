import Header from './components/Header'
import Footer from './components/Footer'
import Form from './components/Form/Form'
import React, {Fragment} from 'react'

const Teste = () => {

  const carregando = true
  if (carregando) {
    return (
      <Fragment>
      <p>carregando</p>
      </Fragment>)
  } else {
    return(
      <>
      <p>não foi possivel carregar</p>
      </>
    )
  }
}


function App() {
  return (
    <React.Fragment>
     <Teste/>
      <Header />
      <Form />
      <Footer />
    </React.Fragment>
  );
}

export default App;