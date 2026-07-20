import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Dialog_comp from "./Dialog_comp"
import { useState ,useContext} from "react"
import { useTranslation } from "react-i18next"
import { Provider } from "@/hooks/Provide"
import type { IProvider } from "@/hooks/Provide"

export function FullName() {

const [fn,setFn] = useState("")
const {t} = useTranslation()
const {setReady,ready} = useContext(Provider) as IProvider
  return (
    <Dialog_comp edit_type="fullname_label">
            <Field>
              <h1 className=" text-xl">{t(`auth.fullname_label`)}</h1>
              <Input name="fullName"  aria-invalid={!ready} value={fn}  onChange={e=>{
                setFn(e.target.value)
                setReady(e.target.value.trim()?true:false)
              }}/>
            </Field>
    </Dialog_comp>
  )
}
