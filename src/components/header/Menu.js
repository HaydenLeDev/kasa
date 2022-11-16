import { Link, useLocation } from "react-router-dom";

function Menu() {
    const location = useLocation();
    
    if(location.pathname === "/"){
        return (
            <nav className="Menu">
                <Link to="/" className="Menu-Items Menu-Items-Actif">Accueil</Link>
                <Link to="/apropos" className="Menu-Items">A Propos</Link>
            </nav>
        );
    }

    return (
        <nav className="Menu">
            <Link to="/" className="Menu-Items">Accueil</Link>
            <Link to="/apropos" className="Menu-Items Menu-Items-Actif">A Propos</Link>
        </nav>
    );
    
  }
  
  export default Menu;
  