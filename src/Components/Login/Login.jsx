import Cookies from 'js-cookie'
import Button from '../Button/Button.jsx';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from '../Context/Context.jsx';

const Login = () => {
  const data = {
    identifier: '',
    password: ''
  }
  const {isLogin, toggleIsLogin} = useContext(LoginContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    const elements = e.currentTarget.elements
    data.identifier = elements.name.value
    data.password = elements.password.value

    handleFetch(data)
  }
  let responseData = {}
  const handleFetch = async (data) => {

    const response = await fetch('http://localhost:1337/api/auth/local', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    responseData = await response.json()
    
    if (response.ok) {
      toggleIsLogin()
      console.log(!isLogin)
    }

    Cookies.set('token', responseData.jwt)
  }


  return (
  <>
    { isLogin ? <Navigate to = '/' /> : (
    <>
      <Button onClick={handleSubmit} value={'Se connecter'} />
      <h1>username: {responseData.username}</h1>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>Name</label>
        <input type="text" name="name" placeholder='username' />
        <label>Password</label>
        <input type="password" name="password" placeholder='Mot de passe' />
        <input type="submit" />
      </form>
      </>
      )}
    </>
  );
};

export default Login;