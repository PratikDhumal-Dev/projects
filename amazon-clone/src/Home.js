import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/jupiter20/GW-FInal/FinaleDesktop-Hero_3000x1200_Live-now_1x_NP._CB419052847_.jpg"
      />
      <div className="home__row">
        <Product
          id="0553592791"
          title="Samsung Galaxy M31s (Mirage Blue, 6GB RAM, 128GB Storage)"
          price={19499.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61d-phh4GfL._SL1500_.jpg"
        />
        <Product
          id="5187528652"
          title="Apple MacBook Air (13-inch, 8GB RAM, 128GB Storage, 1.8GHz Intel Core i5) - Silver"
          price={72490.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51TdkJSqeQL._SL1000_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="3692863101"
          title="Mi Notebook 14 Intel Core i5-10210U 10th Gen Thin and Light Laptop(8GB/256GB SSD/Windows 10/Intel UHD Graphics/Silver/1.5Kg), XMA1901-FC+Webcam"
          price={43999.0}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71mYRzElTAL._SL1500_.jpg"
        />
        <Product
          id="8518644142"
          title="Echo Dot (3rd Gen) – Smart speaker with Alexa"
          price={3499.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"
        />
        <Product
          id="3523244345"
          title="OnePlus Y Series 108 cm (43 inches) Full HD LED Smart Android TV 43Y1 (Black) (2020 Model)"
          price={19499.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81kmtB1326L._SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="2917840445"
          title="ASUS ROG Swift PG348Q 34-inch (86.36 cm) Curved Gaming Monitor - 90LM02A0-B01370 (Black)"
          price={129999.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81UTBqxeyFL._SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="4211532282"
          title="Sceptre 35 Inch Curved UltraWide 21: 9 LED Creative Monitor QHD 3440x1440 Frameless AMD Freesync HDMI DisplayPort Up to 100Hz, Machine Black 2020 (C355W-3440UN)"
          price={27902.91}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81g7DoCjFyL._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
