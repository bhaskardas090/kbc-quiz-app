import React from 'react';
import styles from './endscreen.module.css';
import {prizeList} from '../../Prizelist';

export default function Endscreen({name, currentQuestion}) {
  return (
    <div className={styles.endscreen}>
      {currentQuestion === 0 ? (
         <div>
          {name && (
          <div>
            <div className={styles.endscreenTitle}>Sorry!{name}.</div>
            <div className={styles.endscreenSub}>You have won $0</div>
          </div>
          )}
        </div>
      ) : (
        <div>
          {name && (
          <div>
            <div className={styles.endscreenTitle}>Congratulations!{name}.</div>
            <div className={styles.endscreenSub}>You have won {prizeList[prizeList.length - currentQuestion].amount}</div>
          </div>
        )}
        </div>
      )}
    </div>
  );
}
