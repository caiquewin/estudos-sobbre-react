 import React from 'react'
import Button from './Button'
import Input from './Input'
 
 const Form = () => {
     return (
         <form>
              <p>
             <lable htmlFor="nome">Nome</lable>
             <Input/>
             </p>
             <p>
             <lable htmlFor="mail">Email</lable>
             <Input/>
             </p>
             <Button/>
         </form>
     )
 }
 
 export default Form
 