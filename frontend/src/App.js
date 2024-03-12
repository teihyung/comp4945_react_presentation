import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Landing} from "./pages/Landing";
import {Main} from "./pages/Main";
import {Navbar} from "./component/Navbar";

function App() {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
