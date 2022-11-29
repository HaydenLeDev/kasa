import Data from '../../data/Data.json'
import GallerieItems from './GallerieItems'
import '../../style/components/home/Gallerie.css';
import Titre from './Titre';

/**
 * The gallery has a title and a housing collection.
 * @returns the gallery
 */

function Gallerie() {

  return (
    <main className="Main-Home">
      <Titre />
      <div className="Gallerie">
      {
        Data.map( data => {
          return(
            <GallerieItems key={data.id} id={data.id} title={data.title} cover={data.cover} />
          )
        })
      }
      </div>
    </main>
  );
}

export default Gallerie;
