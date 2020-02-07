import React from "react";
import "./MainPage.css";
import Navbar from "./Navbar";

function MainPage() {
  return (
    <div>
      <Navbar />
      <section>
        <h1>Find the perfect Beer.</h1>
        <button>Start now</button>
      </section>
      <section>
        <h2>Beer of the Month</h2>
        <div>
          <div>
            <img />
          </div>
          <h3>Imperial Black Belgian Ale</h3>
          <ul>
            <li>frtty</li>
            <li></li>
            <li></li>
          </ul>
          <div>
            <p>Lorem ipsum </p>
          </div>
          <button>Order</button>
        </div>
      </section>
    </div>
  );
}

export default MainPage;
