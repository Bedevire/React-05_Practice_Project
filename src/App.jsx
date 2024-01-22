import Header from './components/Header'
import Controls from './components/Controls'
import ResultTable from './components/ResultTable'
import { calculateInvestmentResults } from './util/investment'

import { useState } from 'react'

function App() {

  const [inputs, setInputs] = useState([
    {title:"Initial Investment", initialValue:10000}, 
    {title:"Annual Investment", initialValue:1201}, 
    {title:"Return Expected", initialValue:6}, 
    {title:"Duration", initialValue:10}
  ]);

  function onInputChangeApp(title, value){
    let newInputs = [...inputs];
    let inputParam = newInputs.find(item => item.title == title);
    inputParam.initialValue = parseInt(value);
    setInputs(items => newInputs);
  }

  const initialInvestment = inputs.find(item => item.title == 'Initial Investment').initialValue;
  const annualInvestment = inputs.find(item => item.title == 'Annual Investment').initialValue;
  const expectedReturn = inputs.find(item => item.title == 'Return Expected').initialValue;
  const duration = inputs.find(item => item.title == 'Duration').initialValue;

  let annualData = calculateInvestmentResults({initialInvestment, annualInvestment, expectedReturn, duration});
  console.log(annualData);

  return (
    <>
      <Header />
      <Controls inputs={inputs} onInputChangeApp={onInputChangeApp} />
      <ResultTable data={annualData} />
    </>

  )
}

export default App
