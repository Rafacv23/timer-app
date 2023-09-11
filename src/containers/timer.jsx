import React, { useState, useEffect } from "react"
import TimeText from "../components/time-text"
import Title from "../components/title"
import Button from "../components/button"
import AddTimer from "./add-timer"

const Timer = () => {
  const [form, setForm] = useState(false)
  const [secs, setSecs] = useState(0)
  const [mins, setMins] = useState(0)
  const [hours, setHours] = useState(0)
  const [running, setRunning] = useState(false)

  const toggleForm = () => {
    setForm(!form)
  }

  const handleAddTimer = (hours, mins, secs) => {
    setHours(hours)
    setMins(mins)
    setSecs(secs)
    setForm(false)
  }

  const formatTime = (time) => {
    return time.toString().padStart(2, "0")
  }

  useEffect(() => {
    let interval
    if (running) {
      interval = setInterval(() => {
        if (secs > 0) {
          setSecs((prevSecs) => prevSecs - 1)
        } else if (mins > 0) {
          setMins((prevMins) => prevMins - 1)
          setSecs(59)
        } else if (hours > 0) {
          setHours((prevHours) => prevHours - 1)
          setMins(59)
          setSecs(59)
        } else {
          setRunning(false)
        }
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [running, hours, mins, secs])

  const handleRunClick = () => {
    setRunning(true)
  }

  const stopTimer = () => {
    setRunning(false)
  }

  return (
        <>
            <Title className="title" text={"Timer"}></Title>
            <div className='timer'>
                {form ? <AddTimer onSubmit={handleAddTimer}></AddTimer> : <TimeText text={`${formatTime(hours)}:${formatTime(mins)}:${formatTime(secs)}`}></TimeText>}
                {form ? null : <div className='row'>
                    <Button className="run-btn hvr-shutter-out-horizontal" onClick={toggleForm} text={"New"}></Button>
                    {hours || mins || secs !== 0 ? <Button className={running ? "stop-btn hvr-shutter-out-horizontal" : "run-btn hvr-shutter-out-horizontal"} onClick={running ? stopTimer : handleRunClick} text={running ? "Stop" : "Run"}></Button> : null}
                </div>}

            </div>
        </>
  )
}

export default Timer
