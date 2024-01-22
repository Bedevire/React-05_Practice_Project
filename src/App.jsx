import Header from './components/Header'
import Controls from './components/Controls'
import ResultTable from './components/ResultTable'

import { useState } from 'react'

function App() {

  const [inputs, setInputs] = useState([
    {title:"Initial Investment", initialValue:10000}, 
    {title:"Annual Investment", initialValue:1200}, 
    {title:"Return Expected", initialValue:6}, 
    {title:"Duration", initialValue:10}
  ]);


  return (
    <>
      <Header />
      <Controls inputs={inputs} />
      <ResultTable inuts={inputs} />
    </>

  )
}

export default App
