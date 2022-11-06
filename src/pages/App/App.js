import './App.css';
import { Routes, Route } from 'react-router-dom'
//pages
import Home from '../Home/Home'
//components
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';


function App() {
  return (
    <main className="App">
      <>
        <div>
          <div className="backGroundI">
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />

            </Routes>
            <Footer />
          </div>
        </div>
      </>
    </main>
  );
}

export default App;
