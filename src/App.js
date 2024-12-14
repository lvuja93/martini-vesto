import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Navbar from './components/Other Components/Navbar';
import Footer from './components/Other Components/Footer';
import Gallery from './pages/Gallery';
import Location from './pages/Location';
import Kontakt from './pages/Kontakt';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClassicsGalleryContent from './components/Gallery Components/ClassicsGalleryContent';


function App() {
  return (
    <div className="App font-sans bg-white overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='galerija' element={<Gallery />} />
          <Route path='lokacija' element={<Location />} />
          <Route path='kontakt' element={<Kontakt />} />
          <Route path='classic galerija' element={<ClassicsGalleryContent />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
