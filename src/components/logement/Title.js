import "../../style/components/logement/title.css"

function Title(props) {

    return (
      <div className="Title">
        <h1 className="Title-title">{props.title}</h1>
        <h2 className="Title-location">{props.location}</h2>
      </div>
    );
  }
  
  export default Title;
  