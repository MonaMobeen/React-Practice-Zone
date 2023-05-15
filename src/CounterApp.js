import React, {useState} from 'react'

const CounterApp = () => {
    const [count, setCount] = useState(0);
  return (
    <div style={{display: "flex", justifyContent:  "space-evenly", fontsi
    : 66}}>
      <button onClick={()=>setCount(count+1)} >+</button>
      <div>{count}</div>
      <button onClick={()=>setCount(count-1)}>-</button>
    </div>
  )
}

export default CounterApp;
