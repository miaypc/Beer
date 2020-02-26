import React from "react";
import "./TipsCard.scss";

class TipsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      items: []
    };
  }

  render() {
    return (
      <div className="tipsCard">
        <h3>Tips</h3>
        <div className="alignTextCenter">
          <p className="tipText">
            "Don't worry too much about controlling the temperature with the
            Belgian yeast strain - just make sure it doesn't rise above 30°C!"
          </p>
        </div>
      </div>
    );
  }
}

export default TipsCard;
