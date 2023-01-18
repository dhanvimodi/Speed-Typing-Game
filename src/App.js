import React, { useEffect, useRef, useState } from "react"
import useWordGame from "./useWordGame"

function App() {

  const {
    isGameStarted,
     textRef,
     handleChange,
     text,
     timeRemaining,
     handleGameStart,
     wordCount} = useWordGame(10)

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
      <button disabled={isGameStarted} onClick={!isGameStarted ? handleGameStart : null}>Start game</button>
      <h1>Word count {wordCount}</h1>
    </div>
  )
}
export default App