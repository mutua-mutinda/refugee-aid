import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import RefugeeInfo from "./RefugeeInfo";
import Register from "./Register";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/register">
            <Header />
            <Register />
          </Route>

          <Route path="/refugeeinfo">
            <Header />
            <RefugeeInfo />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
