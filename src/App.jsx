import React from 'react'
import { useState } from 'react'
import TypeWriter from './TypeWriter'

const App = () => {
  const[text, setText] = useState("sunda World")
  return (
    <div>
      <TypeWriter text={text} />
    </div>
  )
}

export default App