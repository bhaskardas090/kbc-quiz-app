import React from 'react';
import styles from './prize.module.css';
import {prizeList} from '../../Prizelist';

export default function Prize({currentQuestion}) {
  return (
  <div className={styles.prizes}>
    {prizeList.map(prize => (
    <div className={(currentQuestion + 1 )=== prize.id ?(`${styles.prize} ${styles.active}`):(`${styles.prize}`)}>
      <div className={styles.amountLevel}>{prize.id}</div>
      <div className={styles.amount}>{prize.amount}</div>
    </div>
    ))}
  </div>
  );
}
