import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register'
import Login from "./pages/Login"
import Dashboard from './pages/Dashboard';
import RouterLayout from './components/RouterLayout';

function App() {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />  }  /> 
        <Route path='/login' element={<Login />}/>
        <Route path='/home' element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
