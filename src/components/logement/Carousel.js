import { useState } from 'react'
import "../../style/components/logement/carousel.css"

function Carousel(props) {   
    const imagesTab = props.pictures; 
    const [index, nextImage] = useState(0)
    console.log(imagesTab.length)
    console.log(index)




    return (
      <div className="Carousel">
        <button className="Carousel-button Carousel-previous" onClick={() => nextImage(index - 1)}></button>
        <img src={imagesTab[index]} alt="Présentation de l'appartement" className="Carousel-img"></img>
        <button className="Carousel-button Carousel-next" onClick={() => nextImage(index + 1)}></button>
        <p className="Carousel-index">{index + 1} / {imagesTab.length}</p>
      </div>
    );
  }
  
  export default Carousel;
  