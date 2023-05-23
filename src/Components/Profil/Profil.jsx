import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Button from "../Button/Button.jsx";

const Profil = () => {
  const [datas, setDatas] = useState({})
  const [isEditing, setIsEditing] = useState(false)
  const [editUsername, setEditUsername] = useState('')
  const [editDescritpion, setEditContent] = useState('')

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

  const editProfile = () => {
    const data = {
      username : editUsername ? editUsername : datas.username,
      description: editDescritpion ? editDescritpion : datas.description,
      update: Date.now()
    }
    fetch(`http://localhost:1337/api/users/${datas.id}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('token')}`
      },
      body: JSON.stringify(data)
    })
    setIsEditing(false)
  }

  return (
    <div className="edit_profil">
      <h1 key={datas.id}>Profil :  {datas.username}</h1>
      <p>Email: {datas.email} </p>
      <p>Descritpion: {datas.description} </p>
      <form onSubmit={editProfile}>
        {isEditing ? (
          <>
            <input
              type="text"
              defaultValue={editUsername ? editUsername : datas.username}
              autoFocus
              onChange={(e) => setEditUsername(e.target.value)} />
            <input
              type="text"
              defaultValue={editDescritpion ? editDescritpion : datas.description}
              autoFocus
              onChange={(e) => setEditContent(e.target.value)}
            />
          </>
        ) : null}
      </form>
      {isEditing ? (
        <Button onClick={() => editProfile()} value={'Valider'} />
      ) : (
        <Button onClick={() => setIsEditing(true)} value={'Editer'} className='edit'/>
      )}
    </div>
  )
}

export default Profil;