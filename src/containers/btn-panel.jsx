import React from "react"
import { Link } from "react-router-dom"

const BtnPanel = ({ watch, chrono, timer, toggleWatch, toggleChrono, toggleTimer }) => {
  return (
        <div className="btn-panel">
          <Link to={"/"} className={watch ? "active-btn clock-btn" : "clock-btn btn hvr-underline-from-center"} onClick={toggleWatch}></Link>
          <Link to={"/chrono"} className={chrono ? "active-btn chrono-btn" : "btn chrono-btn hvr-underline-from-center"} onClick={toggleChrono}></Link>
          <Link to={"/timer"} className={timer ? "active-btn timer-btn" : "btn timer-btn hvr-underline-from-center"} onClick={toggleTimer}></Link>
        </div>
  )
}

export default BtnPanel
