import React, { useState } from 'react';

const AddTimer = (props) => {
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

  const handleHoursChange = (event) => {
    setHours(parseInt(event.target.value));
  };

  const handleMinsChange = (event) => {
    setMins(parseInt(event.target.value));
  };

  const handleSecsChange = (event) => {
    setSecs(parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(hours, mins, secs);
  };

  return (
    <form onSubmit={handleSubmit}>
    <div className='row'>
    <div className='column'>
        <label htmlFor="hours"><span>Hours</span></label>
        <input
        className='input-form'
          type="number"
          id="hours"
          name="hours"
          value={hours}
          onChange={handleHoursChange}
        />
        </div>
        <div className='column'>
        <label htmlFor="mins"><span>Minutes</span></label>
        <input
            className='input-form'
          type="number"
          id="mins"
          name="mins"
          value={mins}
          onChange={handleMinsChange}
        />
        </div>
        <div className='column'>
        <label htmlFor="secs"><span>Seconds</span></label>
        <input
            className='input-form'
          type="number"
          id="secs"
          name="secs"
          value={secs}
          onChange={handleSecsChange}
        />
        </div>
        </div>
        <div className='column'>
    <button className="stop-btn" type="submit">Add Timer</button>
    </div>
    </form>
  );
};

export default AddTimer;
