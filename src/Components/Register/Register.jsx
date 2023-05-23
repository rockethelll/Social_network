import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom';

const FormAuth = () => {

  const data = {
    username: "",
    email: "",
    password: ""
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const elements = e.currentTarget.elements
    data.username = elements.name.value
    data.email = elements.email.value
    data.password = elements.password.value

    handleFetch(data)
  }

  const handleFetch = async (data) => {

    const response = await fetch('http://localhost:1337/api/auth/local/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const responseData = await response.json()

    Cookies.set('token', responseData.jwt)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Inscription</h2>
      <label>Name</label>
      <input type="text" name="name" placeholder='username' />
      <label>Email</label>
      <input type="text" name="email" placeholder='email' />
      <label>Password</label>
      <input type="password" name="password" placeholder='Mot de passe' />
      <input type="submit" />
    </form>
  );
};

export default FormAuth;