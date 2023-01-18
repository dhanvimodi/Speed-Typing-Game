import { useState, useRef, useEffect } from "react"

export default function useWordGame(startingTime=10) {

    const [timeRemaining, setTimeRemaining] = useState()
    const [text, setText] = useState("")
    const [wordCount, setWordCount] = useState()
    const [isGameStarted, setIsGameStarted] = useState(false)

    const textRef = useRef()

    useEffect(() => {
        if (timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
        }
        else {
            handleEndGame()
        }
    }, [timeRemaining])

    function handleChange(e) {
        const { value } = e.target
        if (isGameStarted) {
            setText(value)
        }
    }

    function handleGameStart(event) {

        setIsGameStarted(true)
        setText("")
        setTimeRemaining(startingTime)
        setWordCount()
        textRef.current.disabled = false
        textRef.current.focus()
    }

    function handleEndGame() {
        setIsGameStarted(false)
        countWords()
    }
    function countWords() {
        setWordCount(text.trim().split(" ")
            .filter(w => w !== '')
            .length)
    }

    return {
        textRef,handleChange,text,timeRemaining,isGameStarted,handleGameStart,wordCount
    }
}