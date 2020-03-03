import React from "react";
import { Redirect } from "react-router-dom";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error) {
    this.setState({ hasError: true });
  }

setTimeout(error() => {this.setState({ hasError: false}),3000)};


  render() {
    if (this.state.hasError) {
      return <Redirect to="/" onClick={handleClose} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
