/**
 * Challenge: build the basic structure of our game
 * 
 * 1. <h1> title at the top
 * 2. <textarea> for the box to type in 
 *      (tip: React normalizes <textarea /> to be more like <input />, 
 *      so it can be used as a self-closing element and uses the `value` property
 *      to set its contents)
 * 3. <h4> ti display the amount of time remaining
 * 4. <button> to start the game
 * 5. Another <h1> to display the word count
 * 
 */
import React from "react"

function App(){
     const [text,setText]=React.useState("")
     const [timeRemaining,setTimeRemaining]=React.useState(5)
    
    function handleChange(event){
        const {name,value}=event.target
        setText(value)
    }
   console.log(text)
    return(
        <div>
            <h1>Speed Typing Game</h1>
             <textarea
            value={text}
             placeholder="You can start typing here"
             type="text"
             onChange={handleChange}
            />
            <h4>Time Remaining {timeRemaining}</h4>
            <button>Start game</button>
            <h1>Word count</h1>
        </div>
    )
}
export default App