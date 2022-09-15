import React,{useState, useEffect, useRef} from 'react'

const TypeWriter = ({text}) => {
    const index = useRef(0)
    const [currentText, setCurrentText] = useState('')
    useEffect(()=>{
         const timerID = setTimeout(()=>{
            setCurrentText((value) => value+text.charAt(index.current))
            index.current +=1;
        },100)
        return () =>{
            clearTimeout(timerID)
        }
    },[currentText])
  return (
    <div>
        <h1>{currentText}</h1>
    </div>
  )
}

export default TypeWriter