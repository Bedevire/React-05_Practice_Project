import logo_image from '../assets/investment-calculator-logo.png'

export default function Header(){
    return(
        <header id="header">
            <img src={logo_image} alt="Investment Calculator Logo"></img>
            <h1>Investment calculator</h1>
        </header>
    )
}