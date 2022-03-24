import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './Pages/About';
import Services from './Pages/Services';
import Managementboard from './Pages/Managementboard';
import Contact from './Pages/Contact';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/Management' element={<Managementboard />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
