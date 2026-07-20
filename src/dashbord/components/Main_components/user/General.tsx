import { Label } from "@/components/ui/label"
import { UserName } from "./component_dialog/UserName.js"
import { FullName } from "./component_dialog/FullName.js"
import { GenderComp } from "./component_dialog/Gender.js"
import { TheDate } from "./component_dialog/Date.js"
import { useTranslation } from "react-i18next"
import {useAppDispatch,useAppSelector} from '@/hooks/Redux'
import { useEffect } from "react"
import Loader from "@/other/Loader."
import { userData } from "@/features/crud_account_setting/crud_slice"
export default function General(){
//localStorage.setItem("lastDPindex","0")
const userInformations = useAppSelector(state=>state.user)
const dispatch = useAppDispatch()
useEffect(()=>{
dispatch(userData())
},[dispatch])
const {i18n,t} = useTranslation()

const {userName,fullName,dateOfborn,Gender} = userInformations.data
const options = [
        {
                text:"username_label",
                currentValue:userName,
                dialogElement:<UserName/>,
        },
        {
                text:"fullname_label",
                currentValue:fullName,
                dialogElement:<FullName/>,
        },
        {
                text:"gender",
                currentValue:Gender,
                dialogElement:<GenderComp/>,
        },
        {
                text:"date",
                currentValue:dateOfborn,
                dialogElement:<TheDate/>,
        }
]
const option_html = options.map((e,i)=>{
                                return (<div key={i} className="md:p-6 p-2 flex flex-row items-center justify-between md:my-auto my-10">
                                                <Label className={`font-bold text-lg`}>{t(`auth.${e.text}`)}</Label>
                                                <div className=" justify-between flex items-center w-50 m-2 ">
                                                        {e.text === 'gender'?
                                                        <span className="">{t(`auth.${e.currentValue}`)}</span>:
                                                        <span className="text-[13px]">{e.currentValue}</span>
                                                                }
                                                        {e.dialogElement}
                                                </div>                                                                                                 
                                        </div>)
                        })
return (<div dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}   className="md:p-4 h-screen "> 
        <Label className={`text-2xl`} >{t(`dashboard.General`)}</Label>
                <Label className={`md:p-6`} >{t(`dashboard.Account_informations`)}</Label>
                <div className="md:p-6 flex flex-col">
                {
                userInformations.done ?
                option_html:
                <Loader/>
                }
                </div>
        </div>) 
}