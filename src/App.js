
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Header from  './components/Header.js';

import Home from  './pages/Home.js';
import Quiz from './pages/Quiz.js';
function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
      
      <Route path='/' element={<Home></Home>} ></Route>
      <Route path='quiz' element={<Quiz></Quiz>} ></Route>
     </Routes>
     

    </div>
  );
}

export default App;
