import { useEffect } from "react";
import Button from "../Button/Button.jsx";
import Cookies from "js-cookie";

const Profil = () => {
  const handleProlfil = async () => {
    const response = await fetch('http://localhost:1337/api/users/me', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('token')}`
      }
    })
    const data = await response.json()
    return data
  }

  useEffect(() => {
    handleProlfil()
  }, [])

  const logoutClick = () => {
    Cookies.remove('token')
  }

  return (
    <>
    {console.log(data)}
      <Button logoutClick={logoutClick} value={'Se déconnecter'} />
      <h1>Profil : key={data.id} {data.username}</h1>
      {/* <p>username: {data.username} </p> */}
    </>
  )
}

export default Profil;