import {Select,SelectContent,SelectGroup,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select"
import useUiChanges from "./login/useUIchanges"
if(!localStorage.getItem("i18nextLng") || localStorage.getItem("i18nextLng")==='en-US'){
  localStorage.setItem("i18nextLng","en")
}
const select_style = `  w-full lg:p-4  max-w-48 text-xl duration-750 cursor-pointer transition-all`
export default function SelectLang(){
    const {handleLanguageChange,i18n}= useUiChanges()
    return (<div >
            <Select   value={i18n.language}  onValueChange={handleLanguageChange}>
                <SelectTrigger className={select_style}  onChange={()=>{handleLanguageChange}}>
                    <SelectValue  placeholder="Select a langage" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup >
                        <SelectItem  value='ar' className={``} dir='rtl'> العربية </SelectItem>
                        <SelectItem  value='en' className={``} dir='ltr'> English </SelectItem>                        
                    </SelectGroup>
                </SelectContent>
            </Select>
            </div>
            )
}