import React from 'react'

const Input = ({lable,id, ...props}) => {
    console.log(props)
    return (
        <div style={{margin:'1rem 0'}}>
        <label htmlFor="id">{lable}</label>
        <input id={id} type="text" {...props}/>
          </div>  
    )
}

export default Input
