import React from 'react'
import Home from './opcaoes/Home'
import Produtos from './opcaoes/Produtos'

const HomeIndex = () => {
    const renderCondicao = () => {
        const UrlProdutos = window.location.href
        console.log(window.location)
        console.log(UrlProdutos)
        
        if (UrlProdutos === window.location.origin+"/") {
            return             <Home />
        } else { 
                return<Produtos />
        }
    }
    return (
        <div>
            <div>
                <li><a href={window.location.origin}>Home</a></li>
            </div>
            <div>
                <li><a href={window.location.origin + "/protudos"}>Produtos</a></li>
            </div>
            {renderCondicao()}
        </div>
    )
}

export default HomeIndex
