import logoLink from "../../assets/logo.png"
import { Link } from "react-router-dom"

/**
 * The logo referring to the home page
 * @returns the logo
 */


function Logo() {
    return (
      <div className="Logo">
        <Link to="/">
        <img src={logoLink} alt="Logo kasa" className="Logo-image"></img>
        </Link>
      </div>
    );
  }
  
  export default Logo;
  