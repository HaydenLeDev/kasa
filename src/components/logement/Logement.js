import "../../style/components/logement/logement.css"
import { useParams } from 'react-router-dom'
import Data from '../../data/Data.json'
import Carousel from './Carousel'
import Tag from "./Tag"
import Title from "./Title"
import DropDown from "../aPropos/DropDown"
import Star from "./Star"
import Profil from "./Profil"


function Logement(props) {

    const { id } = useParams()
    var logement

    Data.map( data => {
      if (data.id === id){
        logement = data
      }
      return null
    })

    const pictures = logement.pictures

    return (
      <div className="Logement">
        <Carousel pictures={pictures} />
        <Title title={logement.title} location={logement.location}/>
        <Tag tags={logement.tags}/>
        <div className="Logement-layout-mid">
          <Star rating={logement.rating}/>
          <Profil host={logement.host}/>
        </div>
        <DropDown nameClass="DropDownLarge" title="Description" description={logement.description}/>
        <DropDown nameClass="DropDownLarge DropDownLarge-List" title="Equipments" description={logement.equipments}/>
      </div>
    );
  }
  
  export default Logement;
  