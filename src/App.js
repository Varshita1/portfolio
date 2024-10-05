import { Routes, BrowserRouter, Route, useLocation } from 'react-router-dom';
import './App.css';
import BackIm from './components/BackIm/BackIm';
import Navbar from './components/Navbar';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Content />
    </BrowserRouter>
  );
}

function Content() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path='/' element={<h1>Welcome to the Homepage</h1>} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>

      {/* Render BackIm only on the homepage */}
      {location.pathname === '/' && <BackIm />}
    </>
  );
}

export default App;
