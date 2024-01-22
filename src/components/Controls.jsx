import Control from './Control'

export default function Controls({inputs}){
    console.log('Contols: inputs')
    console.log(inputs)
    return (
        <div id="user-input">
            <Control title={inputs[0].title} defaultValue={inputs[0].initialValue}  /> 
            <Control title={inputs[1].title} defaultValue={inputs[1].initialValue}  /> 
            <Control title={inputs[2].title} defaultValue={inputs[2].initialValue}  /> 
            <Control title={inputs[3].title} defaultValue={inputs[3].initialValue}  /> 
        </div>
    )
}