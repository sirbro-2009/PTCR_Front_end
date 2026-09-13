import {
  SidebarGroup,SidebarMenuButton,SidebarMenuSubButton,SidebarMenuSubItem,SidebarMenuSub,SidebarGroupLabel
} from "@/components/ui/sidebar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { FaMosque } from "react-icons/fa";
import { useTranslation } from "react-i18next";
const imStyle = 'transition-all duration-200 cursor-pointer'
import { ChevronRight   } from "lucide-react"
import { useState } from "react"
import useDpIndex from "@/dashbord/components/SideBar_components/SideBarGroups/SBSobject"
import { useAppSelector } from "@/hooks/Redux"

export default function SideGroupPray(){

const {changeDPI,SBSobject} = useDpIndex()
const {t} = useTranslation()
const [rotate,setRotat] = useState("0")
return(<SidebarGroup className={`md:direction-alternate-reverse`}>
  <SidebarGroupLabel className={`p-1`}>{t(`dashboard.Prayer`)} </SidebarGroupLabel>
  <Collapsible>
    <CollapsibleTrigger asChild>
      <SidebarMenuButton className={`hover:bg-accent hover:text-accent-foreground p-1 bg-transparent!`}>
        <FaMosque />
            {t(`dashboard.The_prayer`)}
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
            SBSobject.prayer.map((e,i)=>{
              const type = useAppSelector(state=>state.user.data.userType) === 'mosque'

              return (<SidebarMenuSubButton key={i} className={SBSobject.style} onClick={()=>{
              changeDPI(e.id)
              }}>
                      {e.icon}
                      {t(`dashboard.${e.text}`)}
                    </SidebarMenuSubButton>)
            })
          }
        </SidebarMenuSubItem>
      </SidebarMenuSub>

    </CollapsibleContent>
  </Collapsible>        
</SidebarGroup>)
}