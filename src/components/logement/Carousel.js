import { useState } from 'react'
import "../../style/components/logement/carousel.css"

/**
 * Image carousel, when it's at the end it comes back to the start and if it's at the start, it doesn't go to the end.
 * @param {*} props 
 * @returns the carousel
 */

function Carousel(props) {   
    const imagesTab = props.pictures; 
    const [index, nextImage] = useState(0)
    const isOverMax = index >= imagesTab.length-1
    const isLessMin = index <= 0
    const isOnePhoto = imagesTab.length === 1

    return isOnePhoto ?(
      <div className="Carousel">
        <img src={imagesTab[index]} alt="Présentation de l'appartement" className="Carousel-img"></img>
        <p className="Carousel-index">{index + 1} / {imagesTab.length}</p>
      </div>
    ) : (
      <div className="Carousel">
        <button className="Carousel-button Carousel-previous" onClick={() => isLessMin ? nextImage(index + imagesTab.length-1) : nextImage(index - 1)}></button>
        <img src={imagesTab[index]} alt="Présentation de l'appartement" className="Carousel-img"></img>
        <button className="Carousel-button Carousel-next" onClick={() => isOverMax ? nextImage(index - imagesTab.length+1) : nextImage(index + 1)}></button>
        <p className="Carousel-index">{index + 1} / {imagesTab.length}</p>
      </div>
    )
  }
  
  export default Carousel;
  