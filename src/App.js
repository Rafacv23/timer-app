import './App.css';
import { useState, useEffect } from "react"
import Clock from './containers/clock';
import BtnPanel from './containers/btn-panel';
import Chronometer from './containers/chronometer';
import Timer from './containers/timer';

function App() {

  const [clock, setClock] = useState("");
  const [watch, setWatch] = useState(true);
  const [chrono, setChrono] = useState(false);
  const [timer, setTimer] = useState(false);

  const getDate = () => {
    const time = new Date()
    const hours = time.getHours().toString().padStart(2, "0");
    const mins = time.getMinutes().toString().padStart(2, "0");
    const secs = time.getSeconds().toString().padStart(2, "0");
    setClock(`${hours}:${mins}:${secs}`)
  }

  useEffect(() => {
    getDate()

    setInterval(() => {
      getDate()
    }, 1000)
  })
  
  const toggleWatch = () => {
    setWatch(true);
    setChrono(false);
    setTimer(false);
  }

  const toggleChrono = () => {
    setWatch(false);
    setChrono(true);
    setTimer(false);
  }

  const toggleTimer = () => {
    setWatch(false);
    setChrono(false);
    setTimer(true);
  }

  return (
    <div className="">
      {watch ? <Clock clock={clock} /> : chrono ? <Chronometer /> : <Timer />}
      <BtnPanel watch={watch} timer={timer} chrono={chrono} toggleWatch={toggleWatch} toggleChrono={toggleChrono} toggleTimer={toggleTimer}></BtnPanel>
    </div>
  );
}

export default App;
