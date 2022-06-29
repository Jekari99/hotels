import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Help from './pages/Help';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rooms' element={<Rooms />} />
        <Route path='/help' element={<Help />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
