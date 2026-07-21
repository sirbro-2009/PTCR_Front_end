import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { userData } from "@/features/crud_account_setting/crud_slice"
import { useAppDispatch, useAppSelector } from "@/hooks/Redux"
import Loader from "@/other/Loader."
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
export default function FirstPage(){
const {t,i18n} = useTranslation()
const dispatch = useAppDispatch()
const userInformations = useAppSelector(state=>state.user)

useEffect(()=>{
dispatch(userData())
},[dispatch])
const {fullName,profilePicture} = userInformations.data
const isDone = userInformations.done
if(!isDone){
    location.reload()
}
    return (isDone?
        <Card className="m-auto w-full md:w-1/2 p-2 " dir={i18n.language==='ar'?'rtl':`ltr`}>
            <h1 className="font-bold text-xl text-center">{t(`navbar.greeting`)}</h1>
            <div className="flex flex-row justify-between">
                <img src={`https://media.tenor.com/CnP64S7lszwAAAAj/meme-cat-cat-meme.gif`} alt="happ cat" className="" />
                <Avatar className="mx-auto   my-10 ">
                    <AvatarImage   src={profilePicture} alt="User image" className="scale-400 "/>
                    <AvatarFallback className="scale-400  rounded-full">
                      {fullName?.split("")[0].toUpperCase()||`F`}
                    </AvatarFallback>
                  </Avatar>
                <img src={`https://media.tenor.com/CnP64S7lszwAAAAj/meme-cat-cat-meme.gif`} alt="happ cat" className="" />            
            </div>

            <p className="text-center text-3xl">{fullName}</p>
        </Card>
        :<Loader />)
}