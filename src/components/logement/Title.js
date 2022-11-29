import "../../style/components/logement/title.css"

/**
 * Title of a dwelling
 * @param {*} props 
 * @returns Title of a dwelling
 */

function Title(props) {

    return (
      <div className="Title">
        <h1 className="Title-title">{props.title}</h1>
        <h2 className="Title-location">{props.location}</h2>
      </div>
    );
  }
  
  export default Title;
  