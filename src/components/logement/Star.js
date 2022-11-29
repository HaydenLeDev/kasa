import "../../style/components/logement/star.css"
import starImage from "../../assets/StarFull.svg"
import starNotFullImage from "../../assets/StarNotFull.svg"

/**
 * Depending on its rating, we return a number of full and notfull stars.
 * @param {*} props 
 * @returns Returns the DOM of its rating
 */

function Star(props) {
    const rating = props.rating;

    if (rating === "1"){
        return (<div className="Star">
                    <img src={starImage} alt="Etoile pleine"></img>
                    <img src={starNotFullImage} alt="Etoile pleine"></img>
                    <img src={starNotFullImage} alt="Etoile pleine"></img>
                    <img src={starNotFullImage} alt="Etoile pleine"></img>
                    <img src={starNotFullImage} alt="Etoile pleine"></img>
                </div>)
    }

    if (rating === "2"){
        return (<div className="Star">
                    <img src={starImage} alt="Etoile pleine"></img>
                    <img src={starImage} alt="Etoile pleine"></img>
                    <img src={starNotFullImage} alt="Etoile pleine"></img>
                    <img src={starNotFullImage} alt="Etoile pleine"></img>
                    <img src={starNotFullImage} alt="Etoile pleine"></img>
                </div>)
    }

    if (rating === "3"){
        return (<div className="Star">
                    <img src={starImage} alt="Etoile pleine"></img>
                    <img src={starImage} alt="Etoile pleine"></img>
                    <img src={starImage} alt="Etoile pleine"></img>
                    <img src={starNotFullImage} alt="Etoile pleine"></img>
                    <img src={starNotFullImage} alt="Etoile pleine"></img>
                </div>)
    }

    if (rating === "4"){
        return (<div className="Star">
                    <img src={starImage} alt="Etoile pleine"></img>
                    <img src={starImage} alt="Etoile pleine"></img>
                    <img src={starImage} alt="Etoile pleine"></img>
                    <img src={starImage} alt="Etoile pleine"></img>
                    <img src={starNotFullImage} alt="Etoile pleine"></img>

                </div>)
    }

    if (rating === "5"){
        return (<div className="Star">
                    <img src={starImage} alt="Etoile pleine"></img>
                    <img src={starImage} alt="Etoile pleine"></img>
                    <img src={starImage} alt="Etoile pleine"></img>
                    <img src={starImage} alt="Etoile pleine"></img>
                    <img src={starImage} alt="Etoile pleine"></img>
                </div>)
    }

}

export default Star;
