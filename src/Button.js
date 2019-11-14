import React, { useState, useEffect } from "react";

export function Button() {

  // In order to reproduce the issue, try commenting out one of these
  // hooks, or changing their order.

  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log("Effect start!");
    return () => console.log("Effect end!");
  }, ["hello"])
  
  return <button onClick={() => setCount(c => c + 1)}>Clicked {count} times</button>
}