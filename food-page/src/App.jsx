import './App.css';
// import Mainpage from './assets/p';
import Header from './components/Header';
import Card from './components/card/card';
import Mainpage from './pages/Mainpage';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Mainpage />
    </div>
  );
}

export default App;
