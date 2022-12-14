import '../../style/components/home/GallerieItems.css';
import { Link } from "react-router-dom"

/**
 * A dwelling links to the page assigned to it. Each menu has an image and a title.
 * @param {*} props 
 * @returns an item from the gallery
 */

function GallerieItems(props) {
    const id = props.id
    const title = props.title
    const cover = props.cover
    
    const link = "/logements/" + id

    return (
      <div className="Gallerie-Item">
        <Link className="Gallerie-Item-link" to={link} ></Link>
        <img src={cover} alt="Presentation du Logement" className='Gallerie-Item-background-image'></img>
        <div className="Gallerie-Item-background"></div>
        <h2 className="Gallerie-Item-title">{title}</h2>
      </div>
    );
  }
  
  export default GallerieItems;
  