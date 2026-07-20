import {
  SidebarGroup,SidebarMenuButton,SidebarMenuSubButton,SidebarMenuSubItem,SidebarMenuSub,SidebarGroupLabel
} from "@/components/ui/sidebar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { useTranslation } from "react-i18next"
const imStyle = 'transition-all duration-200 cursor-pointer'
import { Settings2 ,ChevronRight  } from "lucide-react"
import { useState } from "react"
import { SBSobject } from "@/dashbord/components/SideBar_components/SideBarGroups/SBSobject"
import useDpIndex from "@/dashbord/components/SideBar_components/SideBarGroups/SBSobject"

export default function SideGroupUS(){
const {changeDPI} = useDpIndex()
const {t} = useTranslation()
const [rotate,setRotat] = useState("0")
return(<SidebarGroup className={`md:direction-alternate-reverse`}>
  <SidebarGroupLabel className={`p-1`}>{t(`dashboard.user`)}</SidebarGroupLabel>
  <Collapsible>
    <CollapsibleTrigger asChild>
      <SidebarMenuButton className={`hover:bg-accent hover:text-accent-foreground p-1 bg-transparent!`}>
        <Settings2 />
        {t(`dashboard.user_setting`)}
        <ChevronRight 
          onClick={() => { rotate === "0" ? setRotat("90") : setRotat("0") }}  
          className={`ml-auto rotate-${rotate} ${imStyle}`}
        />
      </SidebarMenuButton>
    </CollapsibleTrigger>
    
    <CollapsibleContent>
      <SidebarMenuSub>
        <SidebarMenuSubItem>
          {
            SBSobject.user.map((e:any,i:number)=>{
              const text = e.style?<span className={e.style}>{t(`dashboard.${e.text}`)}</span>:t(`dashboard.${e.text}`)
              return (<SidebarMenuSubButton key={i} className={SBSobject.style} onClick={()=>{
              changeDPI(e.id)
              }}>
                      {e.icon}
                      {text}
                    </SidebarMenuSubButton>)
            })
          }
        </SidebarMenuSubItem>
      </SidebarMenuSub>
    </CollapsibleContent>
  </Collapsible>        
</SidebarGroup>)
}
