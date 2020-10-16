import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://i.ibb.co/ZS7y9xB/checkout-ad1.jpg"
          alt=""
        />

        {basket?.length === 0 ? (
          <div className="checkout__empty">
            <img
              className="checkout__emptyImage"
              src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"
            />
            <div className="checkout__emptyText">
              <h2>Shopping Cart</h2>
              <h2>Your Shopping Basket is empty</h2>

              <p>
                You have items saved to buy later. To buy one or more now, click
                "Move to cart" next to the item
              </p>
            </div>

            <hr></hr>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            <hr></hr>
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
