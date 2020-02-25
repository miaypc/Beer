import React from "react";

// const tipsCard = {
//   backgroundStyle: {
//     backgroundImage: `url(${tipsCard})`,
//     backgroundRepeat: `no-repeat`,
//     backgroundSize: "contain"
//   }
// };

class TipsCard extends React.Component {
  render() {
    return (
      <div className="TipsCard" style={{ color: "black", padding: "1em" }}>
        <h3 style={{ margin: "0" }}>Tips</h3>
        <p>
          "Don't worry too much about controlling the temperature with the
          Belgian yeast strain - just make sure it doesn't rise above 30°C!"
        </p>
      </div>
    );
  }
}

export default TipsCard;
