import React from "react";
import FoodPairing from "../Components/FoodPairing.jsx";
import TipsCard from "../Components/TipsCard.jsx";
import Navbar from "../Components/Navbar";

class OrderPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar theme="light" />
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
