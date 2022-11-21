import { useParams } from 'react-router-dom'
import Data from '../../data/Data.json'

function Logement(props) {

    const { id } = useParams()
    var logement

    Data.map( data => {
      if (data.id === id){
        logement = data
      }
      return null
    })
    
    const title = logement.title
    const cover = logement.cover
    const pictures = logement.pictures
    const description = logement.description
    //const host = logement.host
    const rating = logement.rating
    const location = logement.location
    const equipments = logement.equipments
    const tags = logement.tags
    

    return (
      <div className="Logement">
        <p>Logement { id }</p>
        <p>title = {title}</p>
        <p>cover = {cover}</p>
        <p>pictures = {pictures}</p>
        <p>description = {description}</p>
        <p>rating = {rating}</p>
        <p>location = {location}</p>
        <p>equipments = {equipments}</p>
        <p>tags = {tags}</p>
      </div>
    );
  }
  
  export default Logement;
  