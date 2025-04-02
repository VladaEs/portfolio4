import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/Pages/MainPage/MainPage';
import AboutPage from './components/Pages/AboutPage/AboutPage';
import Contacts from './components/Pages/Contacts/Contacts';
import Portfolio from './components/Pages/Portfolio/Portfolio';
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/contacts" element={<Contacts/>} />
      <Route path="/portfolio" element={<Portfolio/>} />
    </Routes>
  );
}

export default App;