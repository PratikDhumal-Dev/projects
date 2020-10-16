import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./Reducer";

function Subtotal() {
  const [{ basket }] = useStateValue();

  return (
    <div>
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({basket.length} items :)
                <strong>{`${value}`}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          )}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹"}
        />

        <button>Proceed to checkout</button>
      </div>
    </div>
  );
}

export default Subtotal;
