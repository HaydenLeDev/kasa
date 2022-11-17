import { Link } from "react-router-dom";
import '../../style/components/erreur/page404.css'

function Page404() {
    return (
      <div className="Page404">
        <div className="Page404-Text">
          <h1 className="Page404-Text-Numero">404</h1>
          <h2 className="Page404-Text-p">Oups ! La page que vous demandez n'existe pas.</h2>
        </div>
        <Link to="/" className="Page404-Link">Retourner sur la page d'accueil</Link>
      </div>
    );
  }
  
  export default Page404;
  