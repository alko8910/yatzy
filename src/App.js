import './App.css';
import Game from './components/Game';


    /*
  const [frozen, setFrozen] = useState([false, false, false, false, false]);
    const [values, setValues] = useState ([Math.floor(Math.random() * 6),
                                            Math.floor(Math.random() * 6), 
                                             Math.floor(Math.random() * 6),
                                             Math.floor(Math.random() * 6), 
                                             Math.floor(Math.random() * 6)])
    console.log(values) */

function App() {
  return (
    <div className="App">
      <div>
        <Game />
      </div>
    </div>
  );
}

export default App;
