import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="sidebar">
      <Navbar />
    </div>
    <div className="main-content">
      <Home />
    </div>
  </div>
  );
}

export default App;
