import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import FedRefugees from "./FedRefugees";
import FoodDist from "./FoodDist";
import Header from "./Header";
import Home from "./Home";
import RefugeeInfo from "./RefugeeInfo";
import RefugeesFed from "./RefugeesFed";
import Register from "./Register";
import Shelter from "./Shelter";
import ShelterAlloc from "./ShelterAlloc";

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

          <Route path="/refugeehse">
            <Header />
            <ShelterAlloc />
          </Route>

          <Route path="/refugeeshelter">
            <Header />
            <Shelter />
          </Route>

          <Route path="/fedrefugees">
            <Header />
            <RefugeesFed />
          </Route>

          <Route path="/food-dist">
            <Header />
            <FoodDist />
          </Route>

          <Route path="/refugeehealth">
            <Header />
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
