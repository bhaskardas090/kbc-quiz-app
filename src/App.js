import './App.css';
import React, { useState } from 'react';
import Prize from './components/prize/Prize';
import Questions from './components/questions/Questions';
import Timer from './components/timer/Timer';
import Endscreen from './components/endscreen/Endscreen';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [endScreen, setEndScreen] = useState(false);
  const [time, setTime] = useState(30);
  return (
    <div className="App">
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
              <Endscreen />
            )}
          </div>
          <div className="prizePart">
            <Prize currentQuestion={currentQuestion} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
