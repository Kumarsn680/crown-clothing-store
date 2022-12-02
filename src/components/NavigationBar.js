import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as CrownLogo } from "../assets/crown-simple-thin.svg";
import "./category.styles.scss";

const NavigationBar = () => {
  return (
    <>
      <div className="navigationbar">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/shop">
            CONTACT
          </Link>
          <Link className="nav-link" to="/signin">
            SIGN IN
          </Link>
          <Link className="nav-link" to="/signup">
            SIGN UP
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default NavigationBar