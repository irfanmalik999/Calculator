import Container from './components/Container'
import ButtonContainer from "./components/ButtonContainer"
import './App.css'
import { useState } from 'react'
import Display from './components/Display'
import Todo from './components/Todo'
 
function App() {
  const [calVal, setCalVal] = useState("")
  const onButtonClick = (buttonText) => {
    console.log("Button Clicked" , buttonText)

    if(buttonText === "C"){
      setCalVal("")
    } else if( buttonText === "="){
      const result = eval(calVal);
      setCalVal(result);
    } else{
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  } 

  return (
    <>
      <div style={{display:"flex", justifyContent:"center"}}>
        <Container>
          <div className=''>
            <h1  >Calculator</h1>
            <Display displayValue={calVal} />
            <ButtonContainer  onButtonClick={onButtonClick} />
          </div>
        </Container>
      </div>

      <Todo/>

    </>
    
    
  )
}

export default App
