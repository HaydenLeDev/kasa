import '../style/App.css';
import {Routes, Route} from "react-router-dom";
import Home from './home/Home';
import Logement from './logement/Logement';
import Page404 from './erreur/Page404';
import Apropos from './aPropos/Apropos';
import Header from './header/Header';
import Footer from './footer/Footer';

/**
 * Do application routing. Always show Header and Footer.
 * @returns the right element depending on the route
 */

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/logements/:id" element={<Logement />}></Route>
        <Route path="/apropos" element={<Apropos />}></Route>
        <Route path="/*" element={<Page404 />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
