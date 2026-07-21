import { useTranslation } from "react-i18next"
import { Label } from "@/components/ui/label"
import { Avatar,AvatarImage,AvatarFallback } from "@/components/ui/avatar"
import { ProfileImage } from "./component_dialog/ProfileImage.js"
import {useAppDispatch,useAppSelector} from '@/hooks/Redux'
import { useEffect } from "react"
import { userData } from "@/features/crud_account_setting/crud_slice"
import Loader from "@/other/Loader."
import type { Data } from "@/dashbord/components/SideBar_components/SideBarFooter.js";

export default function ProfileEdit(){
const {t,i18n} = useTranslation()
const userInformations = useAppSelector(state=>state.user)
const dispatch = useAppDispatch()
const {profilePicture,fullName} = userInformations.data as Data

useEffect(()=>{
const data = dispatch(userData())
data
},[dispatch])
return (<div   dir={i18n.language === 'ar' ? 'rtl' : 'ltr'} className="md:p-4 h-screen "> 
        <Label className={`text-2xl`} >{t(`dashboard.Profile_image_edit`)}</Label>
                <div className="md:p-6 flex flex-col">
                        <div  className="md:p-6 flex flex-row items-center justify-between md:my-auto my-10">
                                <h1 className={`font-bold text-lg`}>{t(`dashboard.Profile_picture`)}</h1>
                                <div className="md:w-1/5 w-3/5 justify-between flex items-center ">
                                        <Avatar >
                                                <AvatarImage   src={profilePicture} alt="User image" className="scale-170  rounded-full"/>
                                                <AvatarFallback className="scale-170  rounded-full">{userInformations.done?fullName?fullName.split("")[0]:<Loader/>:<Loader/>}</AvatarFallback>
                                        </Avatar>
                                        <ProfileImage/>
                                </div>                                                                                                 
                        </div>
                </div>
        </div>) 
}