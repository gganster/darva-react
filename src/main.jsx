import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import { Provider } from 'react-redux'

import './index.css'

import store from './store'

import Index from './routes/index.jsx'
import Ticket from './routes/ticket.jsx'
import Main from './components/Layout/Main.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />}>
            <Route exact path="/ticket/:id" element={<Ticket />} />
            <Route exact path="/" element={<Index />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)