import logo_image from '../assets/investment-calculator-logo.png'

export default function Header(){
    return(
        <div id="header">
            <img src={logo_image}></img>
            <h1>Investment calculator</h1>
        </div>
    )
}