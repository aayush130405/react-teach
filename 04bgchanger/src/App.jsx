import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [colour, setColour] =useState('olive')

  // function changeColour (colour) {
  //     setColour(colour)
  // }

  return (
    <div className='w-full h-screen p-4' style={{ backgroundColor: colour, width: '100vw', height: '100vh' }}>
      <button onClick={() => setColour('red')}>Red</button>
      <button onClick={() => setColour('blue')}>Blue</button>
    </div>
  )
}

export default App
