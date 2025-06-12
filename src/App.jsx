import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Stars from './components/Stars.jsx';
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <Stars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Add more routes as needed */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
