import { createContext, useState } from "react";

export const LoginContext = createContext()

const LoginContextProvider = props => {
  const [isLogin, setIsLogin] = useState(false)
  
  const toggleIsLogin = () => {
    setIsLogin(!isLogin)
  }


  return (
    <LoginContext.Provider value={{ isLogin, toggleIsLogin }}>
      {props.children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider