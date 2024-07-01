import { useEffect, useState } from 'react';

function Clock({ delay }) {
  // console.log('Clock renders');
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    // console.log('setInterval');
    const interval = setInterval(() => {
      setNow(new Date());
    }, delay);

    return () => {
      // console.log('clearInterval');
      clearInterval(interval);
    };
  }, [delay]);

  return <div className="Clock">{now.toLocaleTimeString()}</div>;
}

export default Clock;
