import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Landing from './pages/LandingPage';
import ProductPage from './pages/ProductPage';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <Router basename="/" >
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path='/' element={  <Landing/>  } />
          <Route  path='/products' element={  <ProductPage/>  } />
        </Routes>
        <Footer />
      </div>        
    </Router>
  );
}

export default App;
