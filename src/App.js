import React, { useEffect, useRef, useState } from "react"

function App() {

  const  STARTING_TIME=5

  const [timeRemaining, setTimeRemaining] = useState()
  const [text, setText] = useState("")
  const [wordCount, setWordCount] = useState()
  const [isGameStarted,setIsGameStarted]=useState(false)

  const textRef=useRef()

useEffect(() => {
  if(timeRemaining > 0) {
      setTimeout(() => {
          setTimeRemaining(time => time - 1)
      }, 1000)
  }
  else{
    handleEndGame()
  }
}, [timeRemaining])

  function handleChange(e) {
    const { value } = e.target
    if(isGameStarted){
      setText(value)
    }
  }

  function handleGameStart(event){
    
    setIsGameStarted(true)
    setText("")
    setTimeRemaining(STARTING_TIME)
    setWordCount()
    textRef.current.disabled=false
    textRef.current.focus()
  }

  function handleEndGame(){
    setIsGameStarted(false)
    countWords()
  }
  function countWords() {
    setWordCount(text.trim().split(" ")
                    .filter(w=>w!=='')
                    .length)
  }

  return (
    <div>
      <h1>Speed Typing Game</h1>
      <textarea
        disabled={!isGameStarted}
        ref={textRef}
        onChange={handleChange}
        value={text}
      />
      <h4>Time Remaining {timeRemaining}</h4>
      <button disabled={isGameStarted} onClick={!isGameStarted?handleGameStart:null}>Start game</button>
      <h1>Word count {wordCount}</h1>
    </div>
  )
}
export default App