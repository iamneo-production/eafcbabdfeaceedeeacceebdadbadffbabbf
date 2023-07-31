
import { useState } from 'react';
import Stopwatch from './components/Stopwatch/Stopwatch';

function App() {
  const [time, setTime] = useState({s:0, m:0, h:0});
  const [interv,setInterv] = useState();
  const[status,setStatus] = useState(0)

  const start =() =>{
    run();
    setStatus(1);
    setInterv(setInterval(run,1000));
  }
  const pause = ()=>{
    clearInterval(interv);
    setStatus(2);
  }
  const reset=()=>{
    clearInterval(interv);
    setStatus(0);
    setTime({s:0, m:0, h:0});
  }
  const resume = () => start();
  
  var uS = time.s, uM = time.m, uH = time.h;

  const run = () =>{
    if(uM===60){
      uH++;
      uM=0;
    }
    if(uS===60){
      uM++;
      uS=0;
    }
    uS++;
    return setTime({s:uS, m:uM, h:uH})
  }

  return (
    <div className="App">
     <Stopwatch time={time} start={start} pause={pause} reset={reset} resume={resume} status={status}/>
    </div>
  );
}

export default App;
