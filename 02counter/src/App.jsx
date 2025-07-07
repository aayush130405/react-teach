import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15) //the useState() returns an array. the first element is variable and second is a method

  // let counter = 15
  
  const addValue = () => {
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  /*
      THE NEED TO USE STATE: when i am updating the value of counter, it is updating in the console, BUT it is not showing in the UI, that is where react comes in
      the picture, react provides STATE, with the help of which, if i am updating something, it is updated EVERYWHERE... 

      IN SHORT: with react, if i change state, the whole UI is re rendered
  */

  return (
    <>
      <h1>Learning react with Aayush</h1>
      <h2>Counter value: {counter} </h2>
      <button 
      onClick={addValue}>Add value</button>{" "}
      <button
      onClick={removeValue}>Remove value</button>
      <p>Footer: {counter} </p>
    </>
  )
}

export default App
