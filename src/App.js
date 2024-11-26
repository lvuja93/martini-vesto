import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Navbar from './components/Other Components/Navbar';
import Footer from './components/Other Components/Footer';


function App() {
  return (
    <div className="App font-serif">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />


        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
