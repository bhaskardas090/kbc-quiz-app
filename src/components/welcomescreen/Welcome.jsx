import React, {useState} from 'react';
import styles from './welcome.module.css';
import logo from '../../img/logo.png'

export default function Welcome({setName}) {
  const [inputName, setInputName] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(inputName);
  }

  return (
    <div className={styles.welcome}>
      <img src={logo} alt="logo" className={styles.welcomeHeader} />
      <form className={styles.nameInputForm} onClick={handleSubmit}>
        <input onChange={(e) => setInputName(e.target.value)} className={styles.input} type="text" name="username" id="username" placeholder="Enter your name..." />
        <button className={styles.inputButton} >PLAY GAME</button>
      </form>
    </div>
  );
}
