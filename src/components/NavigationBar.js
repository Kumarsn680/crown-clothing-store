import {React,useContext} from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as CrownLogo } from "../assets/crown-simple-thin.svg";
import "./category.styles.scss";
import { UserContext } from '../context/User_context';
import { signOutUser } from './SignIn';

const NavigationBar = () => {
  const {currentUser} = useContext(UserContext)
  
  
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
          {currentUser ? (
            <Link className="nav-link" to="/" onClick={signOutUser}>
              SIGN OUT
            </Link>
          ) : (
            <>
              <Link className="nav-link" to="/signin">
                SIGN IN
              </Link>
              <Link className="nav-link" to="/signup">
                SIGN UP
              </Link>
            </>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default NavigationBar