import { Route, Routes } from 'react-router-dom'
import { DefaulLayout } from './layouts/DefaultLayout/index'
import { ThreeD } from './pages/ThreeD'
import { Home } from './pages/Home'
// import { Ceeds } from './pages/Ceeds'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaulLayout />}>
        <Route path="/3d" element={<Home />} />
        {/* <Route path="/ceeds" element={<Ceeds />} /> */}
        <Route path="/" element={<ThreeD />} />
      </Route>
    </Routes>
  )
}
