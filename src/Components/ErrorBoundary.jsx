import React from "react";
import { Redirect } from "react-router-dom";
import Footer from "../Components/Footer";
import "./ErrorBoundary.scss";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, redirect: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.log("error");
  }

  componentDidUpdate() {
    this.state.hasError &&
      setTimeout(() => {
        console.log("redirect");
        this.setState({ redirect: true });
      }, 5000);
  }

  render() {
    const { redirect, hasError } = this.state;
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (hasError) {
      return (
        <div className="background">
          <h1 className="error-message">Something went wrong...</h1>
          <Footer />
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
