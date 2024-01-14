import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Editar from '../Pages/Editar'

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editar/:id" element={<Editar />} />
      </Routes>
    </BrowserRouter>
  )
}
