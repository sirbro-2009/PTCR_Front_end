import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { Provider } from "@/hooks/Provide"
import type { IProvider } from "@/hooks/Provide";

import { serverHost } from "@/other/data";
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
export default function LoginFunction(){
    const {  login, setLogin } = useContext(Provider) as IProvider
    const navigate = useNavigate()
    const alertShowFunction = ()=>{
    let isValid = true
    if(!login.email.match(emailRegex)){
      isValid = false
    }
    else if(login.email.match(emailRegex)){
      isValid = true
    }
    setLogin({...login,isValid_email:isValid})
    }
    const Login = async()=>{
    const array = Object.keys(login).filter((e)=>{
      return !login[e]
    })
    if((array.length === 0 ||!login.show_error) && !login.isValid_email  && !login.isValid_password){
      try{
    //start fetch
    const sendReq = await fetch(`${serverHost}auth/login-in`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
          },
        body:JSON.stringify(login)
          })
        const res = await sendReq.json()
        if(res.done){
        
          await setLogin({...login})
        localStorage.setItem("token",res.token)
        navigate('/dashboard')          
        }
        else if(!res.done ){
          const cause = res.cause
          await setLogin({...login,cause:cause})
          alertShowFunction()
        }
      }
      catch{
      alertShowFunction()
      }
    }
    else{
    alertShowFunction()
    }

  }
return {Login}
}