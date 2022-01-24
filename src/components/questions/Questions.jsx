import React from 'react';
import styles from './questions.module.css';
import {questions} from '../../Questions';
import hint from '../../img/hint.png';
import doubledip from '../../img/doubledip.png';

export default function Questions() {
  return (
    <div className={styles.questions}>
      <div className={styles.lifelines}>
        <img src={hint} alt="Hint" className={styles.hint} />
        <img src={doubledip} alt="Double Dip" className={styles.doubledip} />
      </div>
      <div className={styles.question}>{questions[0].question}</div>
      <div className={styles.options}>
        {questions[0].answers.map(ans => (
          <div className={styles.answer}>{ans}</div>
        ))}
      </div>
    </div>
  );
}
