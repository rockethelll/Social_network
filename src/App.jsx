import { Routes, Route } from 'react-router-dom'
import Navbar from "./Components/Navbar/Navbar.jsx";
import Register from './Components/Register/Register.jsx'
import Login from './Components/Login/Login.jsx'
import Profil from './Components/Profil/Profil.jsx';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Register /> }></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/users/me" element={<Profil />}></Route>
        <Route path="*" element={<Register />}></Route>
      </Routes>
    </>
  )
}

export default App
