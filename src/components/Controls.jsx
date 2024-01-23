import { useState } from 'react'
import Control from './Control'

export default function Controls({inputs, onInputChangeApp}){
    
    function onInputChange(title, value){
        onInputChangeApp(title, value);
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <Control input={inputs[0]} onValueChangeParent={onInputChange} /> 
                <Control input={inputs[1]} onValueChangeParent={onInputChange} /> 
            </div>
            <div className="input-group">
                <Control input={inputs[2]} onValueChangeParent={onInputChange} /> 
                <Control input={inputs[3]} onValueChangeParent={onInputChange} /> 
            </div>
        </section>
    )
}