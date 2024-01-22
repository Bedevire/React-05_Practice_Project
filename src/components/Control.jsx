import { useState } from 'react'

export default function Control({input, onValueChangeParent}){
    function onValueChange(event){
        setCurrentValue(event.target.value);
        onValueChangeParent(input.title, event.target.value);
    }

    const [currentValue, setCurrentValue] = useState(input.initialValue);

    return(
        <>
            <label>{input.title}</label>
            <input type="number" value={currentValue} onChange={onValueChange}></input>
        </>
    )
}