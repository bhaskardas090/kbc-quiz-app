import React from 'react';
import styles from './timer.module.css';

export default function Timer() {
  return (
    <div className={styles.timer}>
      <button className={styles.timerButton}>30</button>
    </div>
  );
}
