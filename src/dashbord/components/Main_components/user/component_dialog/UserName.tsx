
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useState ,useContext} from "react"
import Dialog_comp from "./Dialog_comp"
import { useTranslation } from "react-i18next"
import { Provider } from "@/hooks/Provide"
import type { IProvider } from "@/hooks/Provide"
import * as React from "react";

const userNameRegex = /^[a-zA-Z0-9_]{3,16}$/;
export function UserName() {
const {setReady} = useContext(Provider) as IProvider
  const {t} = useTranslation()
  const [un,setUn] = useState("") 
  const regEx = userNameRegex.test(un)
  const eventHandeler = (e: React.ChangeEvent<HTMLInputElement>)=>{
                setUn(e.target.value)
                setReady(userNameRegex.test(e.target.value))
  }
  return (
    <Dialog_comp edit_type="username_label">
            <Field>
              <h1 className=" text-xl" >{t(`auth.username_label`)}</h1>
              <Input  name="userName" aria-invalid={un.trim()?!regEx:false} value={un} onChange={e=>{
                eventHandeler(e)}} />
            </Field>
    </Dialog_comp>
  )
}
