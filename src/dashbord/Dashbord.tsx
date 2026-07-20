import {  SidebarProvider, SidebarTrigger ,SidebarInset } from "@/components/ui/sidebar"
import { SideBar } from "./components/SideBar"
import { useNavigate } from "react-router"
import { useEffect,useContext } from "react";
import { Provider } from "@/hooks/Provide";
import type { IProvider } from "@/hooks/Provide";
export default function Dashbord({ children }:any) {
const navigate = useNavigate()
const {theScreen} = useContext(Provider) as IProvider
useEffect(()=>{
if(!localStorage.getItem("token")){
  navigate("/")
}  
},[navigate])

  return (
<>
    
    <SidebarProvider className={`flex w-full flex-col`}>
      <SidebarTrigger className={`md:hidden`}/>
      {/**side bar */}
      <SideBar  />
      {/*CONTENT */}
      <SidebarInset className={` overflow-hidden  ${theScreen?`md:w-7/10 lg:w-4/5`:`self-center w-9/10`}`}> 
        {children}
      </SidebarInset>


    </SidebarProvider>


</>
  )
}