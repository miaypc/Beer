import React from "react";
import "./TipsCard.scss";

function TipsCard({ oneTip }) {
  return (
    <div className="tipsCard">
      <h3>Tips</h3>
      <div className="alignTextCenter">
        <p className="tipText">"{oneTip}"</p>
      </div>
    </div>
  );
}

export default TipsCard;
