
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import { Alert } from './components/Alert';
import { AlertState } from './context/alert/AlertState';
import { FirebaseContext } from './context/alert/firebase/firebaseReducer';

function App() {
  return (
    <FirebaseContext.Provider>
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
    </FirebaseContext.Provider>
    
  );
}

export default App;
