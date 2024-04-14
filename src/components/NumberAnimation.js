import React, { useState, useEffect } from 'react';

const NumberAnimation = ({ number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval;
    if (number > 0) {
      interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < number) {
            return prevCount + 1;
          } else {
            clearInterval(interval);
            return prevCount;
          }
        });
      }, 5); // Adjust the interval as needed for smoother/faster animation
    }

    return () => clearInterval(interval);
  }, [number]);

  return <div>{count}</div>;
};

export default NumberAnimation;
