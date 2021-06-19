import './App.css';
import veggieBowl from './images/veggie-bowl.jpg'
import About from './About.js'
import Menu from './Menu'

function App() {
  return (
    <div className="App">
      <h1>Healthy Harvest</h1>
      <div className="container">
        <img src={veggieBowl} />
          <div className="textBox">
            <p className="centered">Healthy grab and go options to fuel your mountain adventures</p>
            <a href='#menu' id="button">View Menu</a>
          </div>
      </div>
      <About />
      <Menu />
  </div>
  );
}

export default App;
