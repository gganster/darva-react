import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";

import App from './App.jsx'
import Main from './components/Layout/Main.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Main />}>
          <Route exact path="/" element={<App />} />
          <Route path="*" element={<p>Not found</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
