import "../../style/components/logement/profil.css"

/**
 * The profile has a photo and the name of the person.
 * @param {*} props 
 * @returns the profile
 */

function Profil(props) {
    const host = props.host;

    return (
        <div className="Profil">
            <p className="Profil-name">{host.name}</p>
            <img className="Profil-photo" src={host.picture} alt={host.name}></img>
        </div>
    );
}

export default Profil;
