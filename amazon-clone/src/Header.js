import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  const login = () => {
    if (user) {
      auth.signOut();
      history.push("/login");
    }
  };
  console.log(basket);

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://jitsvinger.co.za/wp-content/uploads/2018/04/Amazon-Logo-1024x373.png"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">Hello,{user?.email}</span>
            <span className="header__optionLineTwo">
              <strong>{user ? "Sign Out" : "Sign In"}</strong>
            </span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">
              <strong> & orders </strong>
            </span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">
              <strong> Prime</strong>
            </span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon className="header__shoppingIcon" />
            <span className="header__optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
