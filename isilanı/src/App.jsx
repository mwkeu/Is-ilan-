
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import IlanList from './components/IlanList';
import DetaySayfasi from './DetaySayfasi';

function App() {
  return (
    <Router>
      <div className='App'>
        <h1>İş İlan Portalı</h1>
        <div className='header'>
          <div className='arama_kutusu'>
            {/* <input id='searchInput' type='text' placeholder='İş İlanı Arayın' /> */}
            <button id='arama_butonu'>Ara</button>
          </div>
        </div>
        <Routes>
          <Route path='/' element={<IlanList />} />
          <Route path='/detay/:ilanId' element={<DetaySayfasi />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
