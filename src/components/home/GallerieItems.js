import '../../style/components/home/GallerieItems.css';

function Gallerie(props) {
    //const id = props.id
    const title = props.title
    const image = props.image

    return (
      <div className="Gallerie-Item">
        <img src={image} alt="Presentation du Logement" className='Gallerie-Item-background-image'></img>
        <div className="Gallerie-Item-background"></div>
        <h2 className="Gallerie-Item-title">{title}</h2>
      </div>
    );
  }
  
  export default Gallerie;
  