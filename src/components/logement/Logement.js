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
  
  Data.map(data => {
    if (data.id === id) {
      logement = data
    }
    return null
  })
  console.log(logement)
  
  if (logement === undefined){
    let url = "/error"
    this.props.history.push(url)
  }

  const pictures = logement.pictures
  const equipments = logement.equipments.map((equipment) =>
    <span key={equipment}>{equipment}</span>
  )

  console.log(logement.description)
  return (
    <div className="Logement">
      <Carousel pictures={pictures} />
      <div className="Logement-layout-information">
        <div className="Logement-layout-title">
          <Title title={logement.title} location={logement.location} />
          <Tag tags={logement.tags} />
        </div>
        <div className="Logement-layout-mid">
          <Star rating={logement.rating} />
          <Profil host={logement.host} />
        </div>
      </div>
      <div className="Logement-layout-dropDown">
        <DropDown nameClass="DropDownLarge" title="Description" description={logement.description} />
        <DropDown nameClass="DropDownLarge DropDownLarge-List" title="Equipments" description={equipments} />
      </div>
    </div>
  );
}

export default Logement;
