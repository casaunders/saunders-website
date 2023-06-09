import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} />
      </Routes>
    </>
  )
}

export default App
