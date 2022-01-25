import styles from './questions.module.css';
import {questions} from '../../Questions';
import hint from '../../img/hint.png';
import doubledip from '../../img/doubledip.png';

export default function Questions({currentQuestion, setCurrentQuestion, setEndScreen, setTime}) {

  const handleClick = (index) => {
    const {correctIndex} = questions[currentQuestion];
    if(index === correctIndex) {
      setCurrentQuestion(prevCurrentQuestion => prevCurrentQuestion + 1);
      setTime(30);

    } else {
      setEndScreen(true);
    }
  }

  return (
    <div className={styles.questions}>
      <div className={styles.lifelines}>
        <img src={hint} alt="Hint" className={styles.hint} />
        <img src={doubledip} alt="Double Dip" className={styles.doubledip} />
      </div>
      <div className={styles.question}>{questions[currentQuestion].question}</div>
      <div className={styles.options}>
        {questions[currentQuestion].answers.map((ans,index) => (
          <div className={styles.answer} onClick={()=>handleClick(index)}>{ans}</div>
        ))}
      </div>
    </div>
  );
}
