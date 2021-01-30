import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import FoodDist from "./FoodDist";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import RefugeeInfo from "./RefugeeInfo";
import RefugeesFed from "./RefugeesFed";
import RefugeesHealth from "./RefugeesHealth";
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

          <Route path="/fed-refugees">
            <Header />
            <RefugeesFed />
          </Route>

          <Route path="/food-dist">
            <Header />
            <FoodDist />
          </Route>

          <Route path="/refugeehealth">
            <Header />
            <RefugeesHealth />
          </Route>

          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
