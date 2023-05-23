import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../Context/Context.jsx";
import Button from "../Button/Button.jsx";
import Cookies from "js-cookie";

const Navbar = () => {
  const { isLogin, toggleIsLogin } = useContext(LoginContext)

  const logoutClick = () => {
    Cookies.remove('token')
    toggleIsLogin()
  }

  console.log('test login', isLogin)
  return (
    <nav>
      <Link to='/'>Accueil</Link>
      <Link to='/signup'>Inscription</Link>
      <Link to='/login'>Login</Link>
      {isLogin ?
        <>
          <Link to='/users/me'>Profil</Link>
          <Button onClick={logoutClick} value={'Se déconnecter'} /> 
        </>
        : null  }
    </nav>
  )
}

export default Navbar;