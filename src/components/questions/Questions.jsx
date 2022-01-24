import React from 'react';
import styles from './questions.module.css';
import {questions} from '../../Questions';

export default function Questions() {
  return (
    <div className={styles.questions}>
      <div className={styles.question}>{questions[0].question}</div>
      <div className={styles.options}>
        {questions[0].answers.map(ans => (
          <div className={styles.answer}>{ans}</div>
        ))}
      </div>
    </div>
  );
}
