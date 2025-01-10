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
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg  my-8 text-red-500 bg-green-900 text-xl '>
        password
      </div>
    </>
  )
}

export default App
