import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Background from './components/Background'

const Home = lazy(() => import('./pages/Home'))
const ViewProject = lazy(() => import('./pages/ViewProject'))

function App() {
  return (
    <>
      <Background />
      <Navbar />
      <Suspense fallback={
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-muted)'
        }}>
          Loading...
        </div>
      }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view-project/:id" element={<ViewProject />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}

export default App
