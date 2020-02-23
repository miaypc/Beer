import React from "react";
import FoodPairing from "../Components/FoodPairing.jsx";
import TipsCard from "../Components/TipsCard.jsx";

class OrderPage extends React.Component {
  render() {
    return (
      <div>
        <FoodPairing />
        <TipsCard />
      </div>
      // <React.Fragment>
      //   <FoodPairing />
      //   <TipsCard />
      // </React.Fragment>
    );
  }
}

export default OrderPage;
