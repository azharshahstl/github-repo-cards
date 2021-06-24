import './App.css';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import MainPage from './Components/MainPage/MainPage';
import Cards from './Components/Cards/Cards';
import Header from './Components/Header/Header';
import Button from './Components/Button/Button'

function App() {

  const [typing, setTyping] = useState(false);
  const [value, setValue] = useState("");
  const [require, setRequire] = useState("");
  const [actionDisplay, setActionDisplay] = useState("default")

  const handleOnBlur = () => {
    if (value.length === 0) {
      setRequire("Required")
    } else {
      setTyping(true)
    }
  }

  const handleOnChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = () => {

  }


  return (
    <div className="App">
      <Header />
      <Route exact path="/input">
        <MainPage value={value} typing={typing} require={require} actionDisplay={actionDisplay} blur={handleOnBlur} change={handleOnChange} />
      </Route>
      <Route exact path="/cards">
        <Cards />
      </Route>
      <Button submit={handleSubmit} />
    </div>
  );
}

export default App;
