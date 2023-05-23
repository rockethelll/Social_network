import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Button from "../Button/Button.jsx";

const Profil = () => {
  const [datas, setDatas] = useState({})

  const handleProfil = async () => {
    const response = await fetch('http://localhost:1337/api/users/me', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('token')}`
      }
    })
    setDatas(await response.json())
  }

  useEffect(() => {
    handleProfil()
  }, [])

  let data = {}

  const editProfile = (e) => {
    e.preventDefault()
    console.log('edit')
    data.username = e.target[0].value
    console.log(data.username)
    data.description = e.target[1].value
    console.log(data.description)
    console.log(datas.id)
    console.log(data)
    fetch(`http://localhost:1337/api/users/${datas.id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('token')}`
      },
      body: JSON.stringify(data)
    })
  }

  return (
    <>
    {console.log(datas)}
      <h1 key={datas.id}>Profil :  {datas.username}</h1>
      <p>Email: {datas.email} </p>
      <form onSubmit={editProfile}>
        <input type="text" />
        <input type="text" />
        <input type="submit" />
      </form>
      <Button onClick={editProfile} value={'Modifier'} />
    </>
  )
}

export default Profil;