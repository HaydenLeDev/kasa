import backgroundLink from '../../assets/backgroundHome.png'
import '../../style/components/home/titre.css';
function Titre() {

    return (
        <div className="Titre">
            <img src={backgroundLink} alt='background' className="Titre-image"></img>
            <span className="Titre-background"></span>
            <h1 className="Titre-text">Chez vous, partout et ailleurs</h1>
        </div>
    );
}

export default Titre;
