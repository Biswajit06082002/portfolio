import Navbar from './components/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'; 
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Page404 from './components/Page404';
function App() {
  return (
    <div>
     
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/*" element={<Page404/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
