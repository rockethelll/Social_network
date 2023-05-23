import { Routes, Route } from 'react-router-dom'
import Navbar from "./Components/Navbar/Navbar.jsx";
import Register from './Components/Register/Register.jsx'
import Login from './Components/Login/Login.jsx'
import Profil from './Components/Profil/Profil.jsx';
import Home from './Components/Home/Home.jsx';
import LoginContextProvider from './Components/Context/Context.jsx';

function App() {

  return (
    <>
      <LoginContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/users/me" element={<Profil />}></Route>
        <Route path="*" element={<Register />}></Route>
      </Routes>
      </LoginContextProvider>
    </>
  )
}

export default App
