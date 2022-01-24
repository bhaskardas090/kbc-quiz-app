import React, { useEffect, useState } from 'react';
import styles from './timer.module.css';

export default function Timer() {
  const [time, setTime] = useState(30);

  useEffect(() => {
      const timer = time > 0 && setTimeout(()=>{
        setTime(prevTime => prevTime - 1);
      },1000);
      return () => clearTimeout(timer);
  }, [time]);
  
  
  return (
    <div className={styles.timer}>
      <button className={styles.timerButton}>{time}</button>
    </div>
  );
}
