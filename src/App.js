import './App.css';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import InputComponent from './Components/MainPage/InputComponent';
import Cards from './Components/Cards/Cards';
import Header from './Components/Header/Header';
import Button from './Components/Button/Button'

function App() {

  const [typing, setTyping] = useState(false);
  const [gitName, setGitName] = useState("");
  const [require, setRequire] = useState("");
  const [actionDisplay, setActionDisplay] = useState("default");
  const [disable, setDisable] = useState(true);
  const [githubInfo, setGithubInfo] = useState([])

  const handleOnBlur = () => {
    if (gitName.length === 0) {
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
    if (gitName.length > 0) {
      setDisable(false);
    }
  }

  const handleOnChange = (event) => {
    setGitName(event.target.value);
    if (event.target.value.length > 0) {
      setDisable(false);
    } else {
      setDisable(true);
      setRequire("Required");
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(`https://api.github.com/users/${gitName}`)
      .then((response) => response.json())
      .then((userName) => {
        if (userName.message === "Not Found") {
          setActionDisplay("failure");
          // setMenuItems([]);
        } else {
          fetch(`https://api.github.com/users/${userName.login}/repos`)
            .then((response) => response.json())
            .then((data) => {
              console.log(data)
              debugger
              const urls = data.map((d) => d.html_url);
              // setMenuItems([...urls]);
              // setMessage("");
            });
        }
      })
  }





  return (
    <div className="App">
      <form>
        <Header />
        <Route exact path="/">
          <InputComponent
            gitName={gitName}
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
      </form>
    </div>
  );
}

export default App;
