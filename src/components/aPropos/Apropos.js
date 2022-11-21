import DropDown from "./DropDown.js"
import backgroundApropos from "../../assets/backgroundApropos.png"
import '../../style/components/aPropos/aPropos.css';

function Apropos() {
    return (
      <div className="Apropos">
        <div className="apropos-background">
          <div className="apropos-background-opacity"></div>
          <img src={backgroundApropos} className="apropos-background-img" alt="background montagne"></img>
        </div>
        <DropDown nameClass="DropDownLarge" title="Fiabilité" description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
        <DropDown nameClass="DropDownLarge" title="Respect" description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
        <DropDown nameClass="DropDownLarge" title="Service" description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
        <DropDown nameClass="DropDownLarge" title="Sécurité" description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
      </div>
    );
  }
  
  export default Apropos;
  