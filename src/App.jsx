import Header from './components/Header'
import Controls from './components/Controls'
import ResultTable from './components/ResultTable'
import { calculateInvestmentResults } from './util/investment'

import { useState } from 'react'

function App() {

  const [userUnput, setUserInput] = useState([
    {title:"Initial Investment", initialValue:15000}, 
    {title:"Annual Investment", initialValue:1200}, 
    {title:"Return Expected", initialValue:6}, 
    {title:"Duration", initialValue:10}
  ]);

  
  function onInputChangeApp(title, value){
    let newInputs = [...userUnput];
    let inputParam = newInputs.find(item => item.title == title);
    inputParam.initialValue = parseInt(value);
    setUserInput(items => newInputs);
  }
  
  const initialInvestment = userUnput.find(item => item.title == 'Initial Investment').initialValue;
  const annualInvestment = userUnput.find(item => item.title == 'Annual Investment').initialValue;
  const expectedReturn = userUnput.find(item => item.title == 'Return Expected').initialValue;
  const duration = userUnput.find(item => item.title == 'Duration').initialValue;
  
  const inputIsValid = duration >= 1;

  let annualData = calculateInvestmentResults({initialInvestment, annualInvestment, expectedReturn, duration});
  console.log(annualData);

  return (
    <>
      <Header />
      <Controls inputs={userUnput} onInputChangeApp={onInputChangeApp} />
      {inputIsValid && (<ResultTable data={annualData} />)}
      {!inputIsValid && <p className="center">Please enter a positive duration</p>}
    </>

  )
}

export default App
