export default function Control({title, defaultValue}){
    return(
        <>
            <label>{title}</label>
            <input type="number" value={defaultValue}></input>
        </>
    )
}