import React from 'react'

const ButtonModal = ({ setAtivo }) => {
    return (
        <div>
            <button onClick={() => setAtivo(true)}>Abrir Modal</button>
        </div>
    )
}


export default ButtonModal
