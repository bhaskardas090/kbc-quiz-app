import './App.css';
import Prize from './components/prize/Prize';
import Questions from './components/questions/Questions';
import Timer from './components/timer/Timer';

function App() {
  return (
    <div className="App">
      <div className="quiz-app">
        <div className="quizPart">
          <Timer />
          <Questions />
        </div>
        <div className="prizePart">
          <Prize />
        </div>
      </div>
    </div>
  );
}

export default App;
