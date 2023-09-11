import React from 'react';
import Button from '../components/button';

const BtnPanel = ({watch, chrono, timer, toggleWatch, toggleChrono, toggleTimer}) => {
    return (
        <div className="btn-panel">
            <Button className={watch ? "active-btn clock-btn" : "clock-btn btn hvr-underline-from-center"} onClick={toggleWatch}></Button>
            <Button className={chrono ? "active-btn chrono-btn" : "btn chrono-btn hvr-underline-from-center"} onClick={toggleChrono}></Button>
            <Button className={timer ? "active-btn timer-btn" : "btn timer-btn hvr-underline-from-center"} onClick={toggleTimer}></Button>
        </div>
    );
}

export default BtnPanel;
