import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register'
import Login from "./pages/Login"
import Dashboard from './pages/Dashboard';
import RouterLayout from './components/RouterLayout';
import Profile from './pages/Profile';
import Logout from './pages/Logout';
import See_All_Users from './pages/See_All_Users';

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
        <Route path='/all-users' element={<RouterLayout children={<See_All_Users />}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
