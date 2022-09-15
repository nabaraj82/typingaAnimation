import React from 'react'
import Typewriter from 'typewriter-effect';
const App = () => {
  return (
    <div>
      <Typewriter
      onInit={(typewriter) =>{
        typewriter.typeString("Hello Nabaraj!")
        .callFunction(() => {
          console.log('String typed out!');
        })
        .pauseFor(4000)
        .deleteAll()
        .start()
      }}
      options={{
        loop:true,
        delay: 5,
      }}
      />
    </div>
  )
}

export default App