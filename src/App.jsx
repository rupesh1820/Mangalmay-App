import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/mainlayout";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/Contact";
import Sandhya from "../pages/Sandhya";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="sandhya" element={<Sandhya />} />
        </Route>
      </Routes>
    </Router>
  );
}
