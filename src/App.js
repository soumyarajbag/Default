import { Routes , Route , BrowserRouter , Link  } from 'react-router-dom'
import './App.css';
import Home from  './routes/Home' 
import Navbar from './components/Navbar';
import Main from './components/Main';
import Team from './components/Team';
import Footer from './components/Footer';
import SignState from './contexts/SignState';
function App() {
  return (
   <div>
    
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route exact path='/' element={<Home />} />
    <Route exact path='/main' element={<Main />} />
    <Route exact path='/about' element={<Team />} />
   </Routes>
    </BrowserRouter>
    
    
   
   </div>
  );
}

export default App;
