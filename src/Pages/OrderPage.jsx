import React from "react";
import FoodPairing from "../Components/FoodPairing.jsx";
import TipsCard from "../Components/TipsCard.jsx";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer.js";
import BeerOrder from "../Components/BeerOrder";
import BeerExample from "../Components/Images/BeerExample.png";
import "./OrderPage.scss";

class OrderPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar theme="light" />
        <div className="order-page-container">
          <BeerOrder
            img={BeerExample}
            name="Imperial Black Belgian Ale"
            abv="6%"
            ibu="40"
            srm="Pale"
            description="A widely available, sessionable craft beer style that showcases both malt and hops. Amber lagers are a medium-bodied lager with a toasty or caramel-like malt character."
          />
          <FoodPairing />
          <TipsCard />
        </div>
        <Footer />
      </div>
    );
  }
}

export default OrderPage;
