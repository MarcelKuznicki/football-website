import { BrowserRouter, Routes, Route} from 'react-router-dom';
import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/home';
import History from './pages/history';
import CardGenerator from './pages/cardGenerator';
import Leagues from './pages/Leagues';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/history' element={<History/>}/>
          <Route path='/cardgenerator' element={<CardGenerator/>}/>
          <Route path='/leagues' element={<Leagues/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
