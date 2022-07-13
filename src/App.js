import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greetings="Guitars Market Place" />
    </div>
  );
}

export default App;
