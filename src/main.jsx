import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CarritoApp } from './CarritoApp'
import { BrowserRouter } from 'react-router-dom'
import './index.css'


createRoot(document.getElementById('root')).render(
  //BrowserRouter es un componente del paquete react-router-dom que se usa para habilitar la navegación en aplicaciones de una sola página (SPA). Su función principal es administrar el historial de navegación y renderizar diferentes componentes según la URL actual.
  <BrowserRouter>
    <StrictMode>
      <CarritoApp/>
    </StrictMode>
  </BrowserRouter>
)
