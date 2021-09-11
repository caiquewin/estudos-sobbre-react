import React from 'react'
import Button from './Button'
import Input from './Input'

const Form = () => {
    const array = ['item1','item2']
    return (
        <div>
            <Input id="email" lable="Email" required/>
            <Input id="password" type="password" lable="Password"/>
            <Button items={array}/>
        </div>
    )
}

export default Form
