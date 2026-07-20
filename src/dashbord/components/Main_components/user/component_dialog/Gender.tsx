import { Field } from "@/components/ui/field"
import Dialog_comp from "./Dialog_comp"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useTranslation } from "react-i18next"
import { useState,useContext } from "react"
import { Provider } from "@/hooks/Provide"
import type { IProvider } from "@/hooks/Provide"

export function GenderComp() {
const [gender,setGender] = useState("male")
const {setReady} = useContext(Provider) as IProvider
const {t} = useTranslation()
    return (
    <Dialog_comp edit_type="gender">
            <Field>
              <h1 className=" text-xl" >{t(`auth.gender`)}</h1>
                    <Select  onValueChange={(e)=>{
                      setGender(e)
                      setReady(true)
                    }} name="gender"> 
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={t(`auth.gender`)} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>                        
                          <SelectItem value="male">{t(`auth.male`)}</SelectItem>
                          <SelectItem value="fammle">{t(`auth.fammle`)}</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
            </Field>
    </Dialog_comp>
  )
}
