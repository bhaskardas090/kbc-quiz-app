import './App.css';
import React, { useState } from 'react';
import Prize from './components/prize/Prize';
import Questions from './components/questions/Questions';
import Timer from './components/timer/Timer';
import Endscreen from './components/endscreen/Endscreen';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [endScreen, setEndScreen] = useState(false);
  return (
    <div className="App">
      <div className="trivia">
        <div className="quiz-app">
          <div className="quizPart">
            {!endScreen ? (
              <>
                <Timer />
                <Questions
                  currentQuestion={currentQuestion}
                  setCurrentQuestion={setCurrentQuestion}
                  setEndScreen={setEndScreen}
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
