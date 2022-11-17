import backgroundLink from '../../assets/backgroundHome.png'
import '../../style/components/home/titre.css';
function Titre() {

    return (
        <div className="Titre">
            <img src={backgroundLink} alt='background' className="Titre-image"></img>
            <span className="Titre-background"></span>
            <div className="Titre-text-layout">
                <h1 className="Titre-text">Chez vous,</h1>
                <h1 className="Titre-text">partout et ailleurs</h1>
            </div>
            
        </div>
    );
}

export default Titre;
