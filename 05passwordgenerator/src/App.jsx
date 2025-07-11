import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8) //password length
  const [numberAllowed, setNumberAllowed] = useState(false) //boolean value to tell if number is allowed in password
  const [charAllowed, setCharAllowed] = useState(false) //boolean value to tell if char is allowed in password
  const [password, setPassword] = useState('')  //state to set the password (empty by default)

  const passwordRef = useRef(null)

  const generatePass = useCallback(() => {
    let pass = ""
    let str = "ASDSADASFIFHGBFAKHSBDFAJHFGVAJHSDGKHJASGFKJFHVAJHVFAJSHFajhsdfgbkasjhdfvkfjhsvjhklasvrlawhvd"

    if(numberAllowed) str += "1234567890"
    if(charAllowed) str += "#$&*@#^$!*&^"

    for (let i=1; i<length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

   useEffect(() => {   //useEffect use case => whenever dependencies are changed, re run the code inside
    generatePass()
   }, [length, numberAllowed, charAllowed])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-black'>
        <h1 className='text-center text-white my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
          <input 
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 bg-white'
            placeholder='Password'
            readOnly 
            ref={passwordRef}
          />
          <button 
            className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 cursor-pointer'
            onClick={copyPasswordToClipboard}
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => setLength(e.target.value)}/>
            <label htmlFor="length" className='text-orange-500'>Length: {length}</label>
          </div>
          <div className='flex text-sm gap-x-2 text-white'>
            <input type="checkbox" defaultChecked={numberAllowed} onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}/>
            <label htmlFor="number">Number</label>
          </div>
          <div className='flex text-sm gap-x-2 text-white'>
            <input type="checkbox" defaultChecked={charAllowed} onChange={() => {
              setCharAllowed((prev) => !prev)
            }}/>
            <label htmlFor="char">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
