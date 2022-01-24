import './App.css';
import Questions from './components/questions/Questions';

function App() {
  return (
    <div className="App">
      <div className="quiz-app">
        <div className="quizPart">
          <Questions />
        </div>
        <div className="prizePart">Prize Part</div>
      </div>
    </div>
  );
}

export default App;
