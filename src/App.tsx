import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { NotFoundPage } from './pages/NotFound'
import { RestaurantPage } from './pages/Restaurant'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/restaurante/:id" element={<RestaurantPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
