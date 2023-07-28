
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import { Alert } from './components/Alert';
import { AlertState } from './context/alert/AlertState';
import {FirebaseState} from './context/alert/firebase/FirebaseState';


function App() {
  return (
    <FirebaseState>
      {/*  люб компонент имеет доступ до AlertState */}
        <AlertState> 
          <BrowserRouter>
            <NavBar/>
            <div className="container pt-4">
              <Alert/>
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
              </Routes>
            </div>
          </BrowserRouter>
        </AlertState>
      </FirebaseState>
    
  );
}

export default App;
