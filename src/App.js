
import './App.css';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import  {BrowserRouter,Routes, Route} from 'react-router-dom';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Blogs from './Components/Blogs/Blogs';
import Contact from './Components/Contact/Contact';
import Hero from './Components/Hero/Hero';
import Footers from './Components/Footers/Footers';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/'  element ={<Hero/>}/>
        <Route path='/About'  element ={<About/>}/>
        <Route path='/Skills'  element ={<Skills/>}/>
        <Route path='/Projects'  element ={<Projects/>}/>
        <Route path='/Blogs'  element ={<Blogs/>}/>
        <Route path='/Contact'  element ={<Contact/>}/>
      </Routes>
      <Footers/>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
