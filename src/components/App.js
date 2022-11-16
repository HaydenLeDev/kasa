import '../style/App.css';
import {Routes, Route} from "react-router-dom";
import Header from './header/Header';
import Logement from './logement/Logement';
import Page404 from './erreur/Page404';
import Apropos from './aPropos/Apropos';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/logements/:id" element={<Logement />}></Route>
        <Route path="/apropos" element={<Apropos />}></Route>
        <Route path="/*" element={<Page404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
