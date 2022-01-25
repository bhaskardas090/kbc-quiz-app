import './App.css';
import React, { useState } from 'react';
import Prize from './components/prize/Prize';
import Questions from './components/questions/Questions';
import Timer from './components/timer/Timer';
import Endscreen from './components/endscreen/Endscreen';
import Welcome from './components/welcomescreen/Welcome';

function App() {
  const [name, setName] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [endScreen, setEndScreen] = useState(false);
  const [time, setTime] = useState(30);
  return (
    <div className="App">
      {name ? (
        <div className="trivia">
          <div className="quiz-app">
            <div className="quizPart">
              {!endScreen ? (
                <>
                  <Timer
                    setEndScreen={setEndScreen}
                    time={time}
                    setTime={setTime}
                  />
                  <Questions
                    currentQuestion={currentQuestion}
                    setCurrentQuestion={setCurrentQuestion}
                    setEndScreen={setEndScreen}
                    setTime={setTime}
                  />
                </>
              ) : (
                <Endscreen name={name} currentQuestion={currentQuestion} />
              )}
            </div>
            <div className="prizePart">
              <Prize currentQuestion={currentQuestion} />
            </div>
          </div>
        </div>
      ) : (
        <Welcome setName={setName} />
      )}
    </div>
  );
}

export default App;
