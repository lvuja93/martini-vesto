import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Navbar from './components/Other Components/Navbar';
import Footer from './components/Other Components/Footer';
import Gallery from './pages/Gallery';


function App() {
  return (
    <div className="App font-sans bg-white overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='galerija' element={<Gallery />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
