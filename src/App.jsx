import { useState, useCallback, useEffect } from 'react'
import './App.css'

function App() {

  const [length, setlength] = useState(8)
  const [Number, setNumber] = useState(false)
  const [char, setchar] = useState(false)
  const [password, setpassword] = useState("")
  const passwordgenerator = useCallback(() => {


    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (Number) str += "0123456789"
    if (char) str += "!@#$%^&*(){}[]"

    for (let i = 1; i < length; i++) {
      let charfirst = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(charfirst)
    }
    setpassword(pass)

  }, [length, Number, char, setpassword])

  useEffect(() => {
    passwordgenerator()
  }, [length, Number, char, passwordgenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-red-700 bg-white-500'>
        <h1 className='text-black text-center my-5'>Password Generator </h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3 '
            placeholder='Password'
            readOnly
          />
          <button className='text-white cursor-pointer bg-blue-700 w-15 '>copy</button>
        </div>
        <div className='flex  text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={3}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }}
            />
            <label className='text-blue-700' > Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input type="checkbox"
              defaultChecked={Number}
              id='numberinput'
              onChange={() => {
                setNumber((prev) => !prev)
              }}
            />
            <label>Number</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input type="checkbox"
              defaultChecked={char}
              id='charinput'
              onChange={() => {
                setchar((prev) => !prev)
              }}
            />
            <label>Character</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
