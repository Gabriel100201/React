import React, { useState, useRef, useMemo } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const prevCount = useRef();

  const prevCountValue = useMemo(() => prevCount.current, [count]);

  prevCount.current = count;

  return (
    <div>
      <h1>Contador Actual: {count}</h1>
      <h2>Contador Anterior: {prevCountValue}</h2>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
    </div>
  );
};
