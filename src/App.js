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
  const [gitInfo, setGitInfo] = useState([])

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

  const createsInfoArray = (data) => {
    const githubInfo = data.map((d) => {
      let info = {
        description: "",
        Author: "",
        Title: "",
        forks: 0,
        stars: 0,
        open_issues: 0
      };
      info.description = d.description;
      info.Author = d.owner.login;
      info.Title = d.name;
      info.forks = d.forks;
      info.stars = d.stargazers_count;
      info.open_issues = d.open_issues;
      return info
    })
    setGitInfo(githubInfo)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(`https://api.github.com/users/${gitName}`)
      .then((response) => response.json())
      .then((userName) => {
        if (userName.message === "Not Found") {
          setActionDisplay("failure");
        } else {
          fetch(`https://api.github.com/users/${userName.login}/repos`)
            .then((response) => response.json())
            .then((data) => {
              createsInfoArray(data);
            });
        }
      })
  }





  return (
    <div className="App">
      <form>
        <Header />
        <Route exact path="/welcome">
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
          <Cards gitInfo={gitInfo} />
        </Route>




      </form>
    </div>
  );
}

export default App;
