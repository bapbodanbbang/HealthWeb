import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Patient from "./Page/Patient";
import MedicineExchange from "./Page/MedicineExchange";
import Management from "./Page/Management";

const App = props => {
  return (
  <Router>
    <Switch>
    <Route exact path="/">
      <Patient />
    </Route>
    <Route path="/MedicineExchange">
      <MedicineExchange />
    </Route>
    <Route path="/Management">
      <Management />
    </Route>
    </Switch>
  </Router>
  );
}

export default App;
