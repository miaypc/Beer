import React from "react";
import {
  HashRouter as Router,
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

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <ErrorBoundary>
              <SearchPage />
            </ErrorBoundary>
          </Route>
          <Route path="/beers/:beerId" component={OrderPage}></Route>
          <Route path="/contact-us">
            <ErrorBoundary>
              <ContactUsPage />
            </ErrorBoundary>
          </Route>
          <Route path="/order">
            <ErrorBoundary>
              <OrderPage />
            </ErrorBoundary>
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
