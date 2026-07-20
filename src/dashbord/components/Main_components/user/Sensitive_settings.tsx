import { useTranslation } from "react-i18next"
import { Label } from "@/components/ui/label"
import { Email } from "./component_dialog/Email"
import { Password } from "./component_dialog/Password"
import { Delet_account } from "./component_dialog/Delet_account"
import Loader from "@/other/Loader."
import {useAppSelector} from '@/hooks/Redux'
export default function Sensitive_settings(){
const {t,i18n} = useTranslation()
const userImformations = useAppSelector(state=>state.user)
const options = [
        {
                text:"email_label",
                dialogElement:<Email/>,
        },
        {
                text:"password_label",
                dialogElement:<Password/>,
        },
        {
                text:"Delete_account",
                dialogElement:<Delet_account/>,
        }
]
const optionsHtml = 
        
                <div className="md:p-6 flex flex-col">
                {options.map((e,i)=>{
                                return (<div key={i} className="md:p-6 flex flex-row w-11/12 self-center items-center justify-between md:my-auto my-10">
                                            <Label className={`font-bold text-lg`}>{t(`auth.${e.text}`)}</Label>{e.dialogElement}                                                     
                                        </div>)})}
                </div>

return (
<div   dir={i18n.language === 'ar' ? 'rtl' : 'ltr'} className="md:p-4 h-screen "> 
<Label className={`text-2xl`} >{t(`dashboard.Sensitive_settings`)}</Label>
{userImformations.done?optionsHtml:<Loader/>}
</div>
) 
}