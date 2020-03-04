import * as React from "react";
import Lottie from "react-lottie";
import * as Duck from "./Duck.json";

export default class DuckAnimation extends React.Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: Duck.default,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "#F2F2F2"
        }}
      >
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    );
  }
}
