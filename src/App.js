import logo from './logo.svg';
import './App.css';
import Fitness from './components/Fitness/Fitness';
import Header from './components/Fitness/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Fitness></Fitness>
    </div>
  );
}

export default App;
