import React from "react"
import TimeText from "../components/time-text"
import Title from "../components/title"

const Clock = ({ clock }) => {
  return (
        <>
            <Title className="title" text={"Watch"}></Title>
            <div className="clock">
                <TimeText className="clock-text" text={clock}></TimeText>
            </div>
        </>
  )
}

export default Clock
