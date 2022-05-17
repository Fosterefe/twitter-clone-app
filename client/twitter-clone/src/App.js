import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register'
import Login from "./pages/Login"
import Dashboard from './pages/Dashboard';
import RouterLayout from './components/RouterLayout';
import Profile from './pages/Profile';
import Logout from './pages/Logout';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />  }  /> 
        <Route path='/login' element={<Login />}/>
        <Route path='/home' element={<RouterLayout children={<Dashboard />}/>} />
        <Route path='/user/:user' element={<RouterLayout children={<Profile />} />} />
        <Route path='/logout' element={<Logout />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
