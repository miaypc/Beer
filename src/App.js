import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "./App.css";
import OrderPage from "./Pages/OrderPage";
import MainPage from "./Pages/MainPage";
import SearchPage from "./Pages/SearchPage";
import ContactUsPage from "./Pages/ContactUsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/beers/:beerId" component={OrderPage}></Route>
          <Route path="/contact-us">
            <ContactUsPage />
          </Route>
          <Route path="/order">
            <OrderPage />
          </Route>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
