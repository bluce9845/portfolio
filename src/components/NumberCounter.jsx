/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const NumberCounter = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil((end / duration) * 50);
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(start);
    }, 50);

    return () => clearInterval(interval);
  }, [end, duration]);

  return <div className="numbr-cnt">{count.toLocaleString()}</div>;
};

export default NumberCounter;
