import './App.css';
import {Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./routes/Home";
import Footer from './components/Footer';
import AllProduct from './routes/AllProduct';
import Intro from './routes/Intro';
import Store from './routes/Store';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<AllProduct/>} />
          <Route path='/store' element={<Store/>} />
          <Route path='/intro' element={<Intro/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
