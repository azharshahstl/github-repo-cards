import './App.css';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import InputComponent from './Components/MainPage/InputComponent';
import Cards from './Components/Cards/Cards';
import Header from './Components/Header/Header';
import Button from './Components/Button/Button'

function App() {

  const [typing, setTyping] = useState(false);
  const [value, setValue] = useState("");
  const [require, setRequire] = useState("");
  const [actionDisplay, setActionDisplay] = useState("default");
  const [disable, setDisable] = useState(true);

  const handleOnBlur = () => {
    if (value.length === 0) {
      setRequire("Required");
      setDisable(true);
    } else {
      setTyping(true);
      setDisable(false)
    }
  }

  const handleOnFocus = () => {
    setActionDisplay("default");
    setRequire("");
    if (value.length > 0) {
      setDisable(false);
    }
  }

  const handleOnChange = (event) => {
    setValue(event.target.value);
    if (event.target.value.length > 0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }

  const handleSubmit = () => {

  }


  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        <InputComponent
          value={value}
          typing={typing}
          require={require}
          actionDisplay={actionDisplay}
          blur={handleOnBlur}
          change={handleOnChange}
          focus={handleOnFocus} />
        <Button submit={handleSubmit} disable={disable} />
      </Route>
      <Route exact path="/cards">
        <Cards />
      </Route>

    </div>
  );
}

export default App;
