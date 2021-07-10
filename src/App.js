import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import Header from "./components/UI/Header";
import Article from "./components/UI/Article";
import Footer from "./components/UI/Footer";

import Topics from "./pages/Topics";

function App() {
  return (
    <div className="App">
      {/* <div> */}
        <Header />
      {/* </div> */}
      {/* <div> */}
        <Article />
      {/* </div> */}
      {/* <div> */}
        <Footer />
      {/* </div> */}
      <Route path="/topics">
        <Topics />
      </Route>
    </div>
  );
}

export default App;
