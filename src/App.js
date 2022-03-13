import "./App.css";
import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import LoginScreen from "./Screens/LoginScreen";
import { Component } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { getAllPilots } from "./api/sw-api";
import PilotScreen from "./Screens/PilotScreen";

// function App() {
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   state = {
//     pilots: [],
//   };

//   getPilot = (idx) => {
//     return this.state.pilots[idx];
//   };

// async componentDidMount() {
//   const pilots = await getAllPilots();
//   this.setState({ pilots: pilots.results });
// };
class App extends Component {
  state = {
    pilots: [],
    loading: true,
    errorMessage: "",
  };

  async componentDidMount() {
    try {
      const pilotData = await getAllPilots();
      this.setState({
        pilots: pilotData.results,
        loading: false,
      });
    } catch (err) {
      this.setState({ errorMessage: "Uh oh error!", loading: false });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">STAR WARS PILOTS</header>
        <Routes>
          <Route exact path="/">
            {this.state.pilots.map((pilot, id) => (
              <Link to={`/pilot/${id}`}>
                <button>{pilot.name}</button>
              </Link>
            ))}
          </Route>

          <Route
            path="/pilot/:id"
            render={(props) => (
              <PilotScreen {...props} ships={this.state.pilots} />
            )}
          />
        </Routes>
      </div>
    );
  }
}

export default App;
