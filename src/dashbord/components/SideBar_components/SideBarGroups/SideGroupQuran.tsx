import {
  SidebarGroup,SidebarMenuButton,SidebarMenuSubButton,SidebarMenuSubItem,SidebarMenuSub,SidebarGroupLabel
} from "@/components/ui/sidebar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { GiBookmarklet  } from "react-icons/gi";
import { useTranslation } from "react-i18next";
const imStyle = 'transition-all duration-200 cursor-pointer'
import { ChevronRight   } from "lucide-react"
import { useState } from "react"
import { SBSobject } from "@/dashbord/components/SideBar_components/SideBarGroups/SBSobject"
import useDpIndex from "@/dashbord/components/SideBar_components/SideBarGroups/SBSobject"

export default function SideGroupQuran(){
const {changeDPI} = useDpIndex()
const {t} = useTranslation()
const [rotate,setRotat] = useState("0")
return(<SidebarGroup className={`md:direction-alternate-reverse`}>
  <SidebarGroupLabel className={`p-1`}>{t(`dashboard.quran`)} </SidebarGroupLabel>
  <Collapsible>
    <CollapsibleTrigger asChild>
      <SidebarMenuButton className={`hover:bg-accent hover:text-accent-foreground p-1 bg-transparent!`}>
        <GiBookmarklet  />
          {t(`dashboard.Al_Quran_Al_karim`)}
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
            SBSobject.quran.map((e,i)=>{
              
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