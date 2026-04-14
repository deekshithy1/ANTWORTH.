import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomeScreen from './pages/HomeScreen'
import Footer from './components/Footer'

const Layout = () => {
  return (
     <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomeScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App