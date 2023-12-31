import { useState, useEffect } from 'react';

import {Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import Home from './pages/Home';
import Menu from './components/Menu';
import Footer from './components/Footer';
import TechnoAdd from './pages/TechnoAdd';
import TechnoList from './pages/TechnoList';
import { useLocalStorage } from "./hooks/useLocalStorage";
import './css/app.css';

function App() {
  
  const [technos, setTechnos] = useState([]);

  const STORAGE_KEY = "technos";
  const [storedTechnos, setStoredTechnos] = useLocalStorage(STORAGE_KEY, []);

  // On first App component mount
  useEffect(() => {
    setTechnos(storedTechnos);
  }, []);

  // On every TechnoList component render
  useEffect(() => {
    setStoredTechnos(technos);
  }, [technos]);

  function handleAddTechno(techno) {
    setTechnos([...technos, { ...techno, technoid: uuidv4() }]);
  }

  function handleDeleteTechno(technoId) {
    setTechnos(technos.filter((techno) => techno.technoid !== technoId));
  }



  return (
    <>
    <Menu />
      <Routes>
        <Route path="/" element= {<Home /> } />
        <Route path="/add" element={<TechnoAdd handleAddTechno={handleAddTechno} />} />
        <Route path="/list" element= {<TechnoList technos={technos} handleDeleteTechno={handleDeleteTechno} /> } />
      </Routes>
      <Footer />
   </>
  );
}

export default App;
