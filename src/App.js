import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Patient from "./Page/Patient";
import MedicineExchange from "./Page/MedicineExchange";

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
      </Switch>
    </Router>
  );
}

export default App;
