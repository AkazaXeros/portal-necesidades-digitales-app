import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './pages/HomePage';

import { Router, Route, Routes } from 'react-router-dom';
import NewEntry from './components/Entries/NewEntry';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  Router;
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users/register" element={<Register />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/entries" element={<NewEntry />} />
          {/* <Route path="/entries" element={<NewEntry />} /> */}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
