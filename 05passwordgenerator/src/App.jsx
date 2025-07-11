import { useCallback, useState, useEffect, useRef } from "react";
import './App.css'

function App() {

    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const [password, setPassword] = useState('')

    const generatePassword = useCallback(() => {
        let pass = ""
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

        if(numberAllowed) str += "0123456789"
        if(charAllowed) str += "!@#$%^&*()"

        for(let i=1; i<length; i++) {
            const index = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(index)
        }

        setPassword(pass)
    }, [length, numberAllowed, charAllowed])

    useEffect(() => {
        generatePassword()
    }, [length, numberAllowed, charAllowed]) 

    const passwordRef = useRef(null)

    const copyPasswordToClipboard = () => {
        window.navigator.clipboard.writeText(password)
        passwordRef?.current.select()
    }

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900">
                <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8">
                    <h1 className="text-3xl font-bold text-white text-center mb-8 tracking-wide">Password Generator</h1>
                    <div className="flex items-center mb-6 bg-white/20 rounded-lg px-4 py-2">
                        <input
                            type="text"
                            readOnly
                            value={password}
                            placeholder="Password"
                            className="flex-1 bg-transparent text-lg text-white font-mono outline-none px-2"
                            ref={passwordRef}
                        />
                        <button
                            className="ml-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition"
                            onClick={copyPasswordToClipboard}
                        >
                            copy
                        </button>
                    </div>
                    <div className="mb-6">
                        <input
                            type="range"
                            value={length}
                            min={6}
                            max={100}
                            onChange={(e) => setLength(e.target.value)}
                            className="w-full accent-blue-500"
                        />
                        <label htmlFor="length" className="block text-white/80 mb-2 font-medium">
                            Length: <span className="text-blue-400 font-bold">{length}</span>
                        </label>
                    </div>
                    <div className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            defaultChecked={numberAllowed}
                            onChange={() => {
                                setNumberAllowed((prev) => !prev)
                            }}
                            className="accent-blue-500 w-5 h-5"
                        />
                        <label htmlFor="numberAllowed" className="ml-3 text-white/80 font-medium">Number</label>
                    </div>
                    <div className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            defaultChecked={charAllowed}
                            onChange={() => {
                                setCharAllowed((prev) => !prev)
                            }}
                            className="accent-purple-500 w-5 h-5"
                        />
                        <label htmlFor="char" className="ml-3 text-white/80 font-medium">Characters</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App