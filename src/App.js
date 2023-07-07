import { Routes , Route , BrowserRouter  } from 'react-router-dom'
import './App.css';

import Navbar from './components/Navbar';
import Main from './components/Main';
import Team from './components/Team';
import Video from './components/Video';
function App() {
  
  return (
   <div>
    
    <BrowserRouter>
    <Navbar />
    
    <Routes>
    <Route exact path='/' element={<Video />} />
    <Route exact path='/main' element={<Main />} />
    <Route exact path='/about' element={<Team />} />
   </Routes>
    </BrowserRouter>
    
    
   
   </div>
  );
}

export default App;
