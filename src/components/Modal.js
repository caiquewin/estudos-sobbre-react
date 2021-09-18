import React from 'react'

function Modal(props) {
 console.log('verificando props',props)
 if(props.ativo){
    return (
        <>
        <p>esse é o modal</p>
           <button onClick={()=>props.setAtivo(false)}>Fechar modal</button>
        </>
    );
 }
 return null
    
}

export default Modal;