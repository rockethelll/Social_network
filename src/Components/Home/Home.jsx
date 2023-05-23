import { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

import { LoginContext } from "../Context/Context.jsx";
import { Navigate } from "react-router-dom";
import Button from "../Button/Button.jsx";


const Home = () => {
  const [postData, setPostData] = useState({})

  const getData = async() => {
    const response = await fetch('http://localhost:1337/api/posts', {
      method: 'get',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('token')}`
      }
    })
    let temp = await response.json()
    // console.log('data', temp.data)
    setPostData(temp.data)
  }

  useEffect(() => {
    getData()
  },[])

  const { isLogin } = useContext(LoginContext)

  return (
    <div>
      {isLogin ? 
        <>
          <h1>Liste des posts</h1>
          <input type="text" />
          <Button value={'Poster'} />
          {/* <ul>
          {postData.map((post) => (
              <li key={post.id}>{post.id}</li>
            ))}
          </ul> */}

        </>
      : <Navigate to='/login' />}
    </div>
  );
};

export default Home;