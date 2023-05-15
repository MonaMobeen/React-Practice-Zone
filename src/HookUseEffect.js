 
//  import React, { useState, useEffect } from 'react';
//  const HookUseEffect = () => {
//   const [count, setCount] = useState(0); 
//    // Similar to componentDidMount and componentDidUpdate:
//    useEffect(() => {
//     // Update the document title using the browser API
//     document.title = `You clicked ${count} times`;
//   });
//   return (
//      <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button> 
//      </div>
//    )
//  }
 
//  export default HookUseEffect
 import React, {useEffect, useState} from 'react'
 
 const HookUseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    document.title = `I clicked ${count} times`;
  })
   return (
     <div>
      <p>I click {count} times </p>
       <button onClick={()=>{
        setCount(count+1)
       }}>Click Me</button>
     </div>
   )
 }
 
 export default HookUseEffect
 