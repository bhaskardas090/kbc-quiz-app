import React, { useEffect } from 'react';
import styles from './timer.module.css';

export default function Timer({setEndScreen, time, setTime}) {

  useEffect(() => {
      const timer = time > 0 && setTimeout(()=>{
        setTime(prevTime => prevTime - 1);
      },1000);
      return () => clearTimeout(timer);
  }, [time, setTime]);
  
  if(time === 0) {
    setEndScreen(true);
  }
  
  return (
    <div className={styles.timer}>
      <button className={styles.timerButton}>{time}</button>
    </div>
  );
}
