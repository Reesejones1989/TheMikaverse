import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home.jsx';
import './App.css'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav/>
      <h1>The MikaVerse</h1>
      <Home />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Footer />
    </>
  )
}

export default App
