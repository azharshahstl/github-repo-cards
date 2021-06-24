import './App.css';
import { Route } from 'react-router-dom'
import MainPage from './Components/MainPage/MainPage'
import Cards from './Components/Cards/Cards'
import Header from './Components/Header/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/input" component={MainPage} />
      <Route exact path="/cards" component={Cards} />
    </div>
  );
}

export default App;
