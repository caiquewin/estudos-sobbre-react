import React from 'react'

const Produtos = () => {
    const ListProduto=()=>{
        const arrayProtudos = [ 
            { nome:"Notebook",propriedades:['16gb ram','512gb'] },
           {nome:"Smarthphone",propriedades:['2gb ram','128gb']} 
           
        ]

        return(
            <>
            {arrayProtudos.map((data,index)=>{ 
                return(
                    <div style={{borderStyle: "solid",borderColor: "black",padding:"15px",marginTop:"5px"}}>
            <h3 style={{marginLeft:"5px"}}>{data.nome}</h3> 
            {data.propriedades.map((e , indexArry)=>{
                return(
                      <li key={indexArry} style={{marginLeft:"10px"}}>{e}</li>
                )
            } )}
        </div>
            )
        })}
        </>
        )
    }
    return (
        <div>
                   <div style={{marginLeft:"10px"}}>
            <h1 style={{color:"green"}}>Produtos</h1>
            {ListProduto()}
        </div>
        </div>
    )
}

export default Produtos
