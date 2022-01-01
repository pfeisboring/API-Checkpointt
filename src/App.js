import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import UserList from "./Components/UserList";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={UserList} />
      </Switch>
    </div>
  );
}

export default App;
