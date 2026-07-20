import {
  Sidebar,
  SidebarContent,
} from "@/components/ui/sidebar"
import SideBarHeader from "./SideBar_components/SideBarHeader"
import SideBarFooter from "./SideBar_components/SideBarFooter"
import SideGroupUS from "./SideBar_components/SideBarGroups/SideGroupUS"
import SideGroupQuran from "./SideBar_components/SideBarGroups/SideGroupQuran"
import SideGroupAdkar from "./SideBar_components/SideBarGroups/SideGroupAdkar"
import SideGroupPray from "./SideBar_components/SideBarGroups/SideGroupPray"
import { useTranslation } from "react-i18next"

export function SideBar() {
const {i18n} = useTranslation()
const dir = i18n.language === 'ar' ? 'rtl' : 'ltr'

return (
    <Sidebar collapsible="icon">
        <SideBarHeader/>
    <SidebarContent dir={dir}>
        <SideGroupUS/>
        <SideGroupQuran/>
        <SideGroupAdkar/>
        <SideGroupPray/>
    </SidebarContent>
    <SideBarFooter />
    </Sidebar>
)
}