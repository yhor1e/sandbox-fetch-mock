import fetchMock from "fetch-mock";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={goodFetch}>goodFetch</button>
        <button onClick={badFetch}>badFetch</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function goodFetch() {
  fetchMock.get("/good", { body: "This is good response", status: 201 });
  fetch("/good")
    .then((res) => {
      console.log(res);
      return res.text();
    })
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  fetchMock.reset();
}

function badFetch() {
  fetch("/bad")
    .then((res) => {
      console.log(res);
      return res.text();
    })
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

//fetchMock.get("/good", { body: "This is good response", status: 201 });
//  .get("/bad", 500);

export default App;
