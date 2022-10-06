//components
import Home from './pages/Home';
import Loja from './pages/Loja';
import Destribuidora from './pages/Destribuidora';
//hooks

//
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
//
import './App.css';

function App() {

  return (

    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Loja" element={<Loja />} />
          <Route path="/Destribuidora" element={<Destribuidora />} />
      </Routes>
    </Router>


  );
}

export default App;
