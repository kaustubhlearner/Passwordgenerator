import { useState, useCallback } from 'react'
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

    for (let i = 1; i < array.length; i++) {
      let charfirst = Math.floor(Math.random * str.length + 1)

      pass = str.charAt(charfirst)
    }
    setpassword(pass)

  }, [length, Number, char, setpassword])

  return ( 
<>
<div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-red-700 bg-white-500'>
  <div className='flex shadow rounded-lg overflow-hidden mb-4'>

    <input type="text"
    value={password}
    className='outline-none w-full py-1 px-3 '
    placeholder='Password'
    readOnly
    />
  </div>
  </div>

</>
)
}

        export default App
