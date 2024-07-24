import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from 'react-router-dom'
import PokemonDetails from "./components/PokemonDetails"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router >
      <Routes>
      <Route path="/" element={<App />} target="_blank"/>
      <Route path="/pokemon/:pokemonName" element={<PokemonDetails />} target="_blank"/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
