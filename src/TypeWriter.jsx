import React,{useState, useEffect, useRef} from 'react'

const TypeWriter = ({text}) => {
    const index = useRef(0)
    console.log(text.length)
    const [currentText, setCurrentText] = useState('')
    console.log(currentText)
    useEffect(()=>{
         const timerID = setTimeout(()=>{
            console.log(text.charAt(index.current))
            setCurrentText((value) => value+text.charAt(index.current))
            index.current +=1;
        },100)
        return () =>{
            clearTimeout(timerID)
        }
    },[currentText, text])
  return (
    <div>
        <h1>{currentText}</h1>
    </div>
  )
}

export default TypeWriter