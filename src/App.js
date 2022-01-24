import './App.css';
import Prize from './components/prize/Prize';
import Questions from './components/questions/Questions';

function App() {
  return (
    <div className="App">
      <div className="quiz-app">
        <div className="quizPart">
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
