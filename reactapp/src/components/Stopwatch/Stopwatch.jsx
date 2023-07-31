import React from 'react'

const Stopwatch = (props) => {
  return (
    <div>
        <div>
            <p data-testid="time">
            {(props.time.h >= 10)? props.time.h : "0"+props.time.h}:{(props.time.m >= 10)? props.time.m : "0"+props.time.m}
             :{(props.time.s >= 10)? props.time.s : "0"+props.time.s}
            </p>
        </div>
        <div>
            {(props.status===0)?
            <div>
                 <button data-testid="start" onClick={props.start}>start</button>
                 <button data-testid="reset" disabled={true}>reset</button>
            </div>:""
            }
            {(props.status===1)?
            <div>
                 <button data-testid="pause" onClick={props.pause}>pause</button>
                 <button data-testid="reset" onClick={props.reset}>reset</button>
            </div>:""
            }
            {(props.status===2)?
            <div>
                 <button data-testid='resume' onClick={props.resume}>resume</button>
                 <button data-testid='reset' onClick={props.reset}>reset</button>
            </div>:""
            }
           
        </div>
    </div>
  )
} 

export default Stopwatch 