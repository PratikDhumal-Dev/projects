import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{}, dispatch] = useStateValue();
  console.log(id, title, image, price, rating);

  const removeFRomBasket = () => {
    dispatch({
      type: "REMOVE-FROM-BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>

        <button onClick={removeFRomBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
