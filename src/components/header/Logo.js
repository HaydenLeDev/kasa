import logoLink from "../../assets/logo.png"
import { Link } from "react-router-dom"

function Logo() {
    return (
      <div className="Logo">
        <Link to="/" className="Menu-Items">
        <img src={logoLink} alt="Logo kasa"></img>
        </Link>
      </div>
    );
  }
  
  export default Logo;
  