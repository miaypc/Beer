import React from "react";
import FoodPairing from "../Components/FoodPairing.jsx";
import TipsCard from "../Components/TipsCard.jsx";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer.js";

class OrderPage extends React.Component {
  render() {
    return (
      <>
        <Navbar theme="light" />
        <FoodPairing />
        <TipsCard />
        <Footer />
      </>
    );
  }
}

export default OrderPage;
