import React, { useEffect } from "react";
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
import ErrorBoundary from "./Components/ErrorBoundary";
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <ErrorBoundary>
          <Switch>
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route path="/beers/:beerId" component={OrderPage}></Route>
            <Route path="/error" component={MainPage}></Route>
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
        </ErrorBoundary>
      </Router>
    </div>
  );
}

export default App;
