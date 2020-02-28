import React from "react";
import FoodPairing from "../Components/FoodPairing.jsx";
import TipsCard from "../Components/TipsCard.jsx";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer.js";
import BeerOrder from "../Components/BeerOrder";
import "./OrderPage.scss";
import axios from "axios";

class OrderPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beerDetails: {
        id: "",
        img: "",
        name: "",
        abv: "",
        ibu: "",
        srm: "Pale",
        description: "",
        brewers_tips: "",
        food_pairing: []
      }
    };
  }

  componentDidUpdate(prevProps) {
    const {
      match: {
        params: { beerId }
      }
    } = this.props;
    console.log(beerId);
    const prevBeerId = prevProps.match.params.beerId;
    if (prevBeerId !== beerId) {
      this.loadBeerDetails(beerId);
    }
  }

  componentDidMount() {
    const beerId = this.props.match.params.beerId;
    this.loadBeerDetails(beerId);
    console.log(beerId);
  }

  loadBeerDetails(beerId) {
    const url = `https://api.punkapi.com/v2/beers/${beerId}`;
    // Use axios to get data from the url
    axios.get(url).then(res => {
      this.setState({ beerDetails: res.data[0] });
      console.log(res.data[0]);
    });
  }

  render() {
    console.log(this.props);
    const beerDetails = this.state.beerDetails;
    return (
      <div>
        <Navbar theme="light" />
        <div className="order-page-container">
          <BeerOrder
            img={beerDetails.image_url}
            name={beerDetails.name}
            abv={beerDetails.abv}
            ibu={beerDetails.ibu}
            srm={beerDetails.srm}
            description={beerDetails.description}
          />
          <FoodPairing foodPairings={beerDetails.food_pairing} />
          <TipsCard oneTip={beerDetails.brewers_tips} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default OrderPage;
