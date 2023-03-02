import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/Home" element={<Content/>}></Route>

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
