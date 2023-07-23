import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Students from './components/Students';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='navbar'>
          <Link className='text' to='/'>Home</Link>
          <Link className='text' to="/students">Student</Link>
          <Link className='text' to="/contactus">Contact Us</Link>
        </div>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/contactus" element={<AboutUs />} />
          <Route path='/students' element={<Students />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
