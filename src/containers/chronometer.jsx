import React, { useState, useRef } from "react"
import TimeText from "../components/time-text"
import Title from "../components/title"
import Button from "../components/button"

const Chronometer = () => {
  const [run, setRun] = useState(false)
  const [secs, setSecs] = useState(0)
  const timerRef = useRef(null)

  const toggleRun = () => {
    if (run) {
      clearInterval(timerRef.current)
    } else {
      timerRef.current = setInterval(() => {
        setSecs((prevSeconds) => prevSeconds + 1)
      }, 1000)
    }
    setRun(!run)
  }

  const reset = () => {
    clearInterval(timerRef.current)
    setSecs(0)
    setRun(false)
  }

  const displayTime = () => {
    const minutes = Math.floor(secs / 60)
    const remainerSecs = secs % 60
    return `${minutes.toString().padStart(2, "0")}:${remainerSecs.toString().padStart(2, "0")}`
  }

  return (
        <>
            <Title className="title" text={"Chronometer"}></Title>
            <div className="chronometer">
                <TimeText className="clock-text" text={displayTime()}></TimeText>
                <div className="row">
                    {secs === 0 ? null : <Button className="stop-btn" onClick={reset} text={run ? "Reset" : "Reset"}></Button> }
                    <Button className={run ? "stop-btn hvr-shutter-out-horizontal" : "run-btn hvr-shutter-out-horizontal"} onClick={toggleRun} text={run ? "Stop" : "Run"}></Button>
                </div>
            </div>
        </>
  )
}

export default Chronometer
