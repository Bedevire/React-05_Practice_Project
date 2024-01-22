import { useState } from 'react'
import Control from './Control'

export default function Controls({inputs, onInputChangeApp}){
    
    function onInputChange(title, value){
        onInputChangeApp(title, value);
    }

    return (
        <div id="user-input">
            <Control input={inputs[0]} onValueChangeParent={onInputChange} /> 
            <Control input={inputs[1]} onValueChangeParent={onInputChange} /> 
            <Control input={inputs[2]} onValueChangeParent={onInputChange} /> 
            <Control input={inputs[3]} onValueChangeParent={onInputChange} /> 
        </div>
    )
}