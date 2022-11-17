import Data from '../../data/Data.json'
import GallerieItems from './GallerieItems'
import '../../style/components/home/Gallerie.css';
import Titre from './Titre';

function Gallerie() {

  return (
    <div className="Gallerie">
      <Titre />
      {
        Data.map( data => {
          return(
            <GallerieItems id={data.id} title={data.title} image={data.pictures[0]}/>
          )
        })
      }

    </div>
  );
}

export default Gallerie;
