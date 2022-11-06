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
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
        <Footer />
      </>
    </main>
  );
}

export default App;
