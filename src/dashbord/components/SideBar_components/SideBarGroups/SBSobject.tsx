import { Settings ,User ,TriangleAlert } from "lucide-react"
import { MdHeadphones } from "react-icons/md";
import { FaBookOpenReader } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { useContext } from "react";
import { Provider } from "@/hooks/Provide";
import type { IProvider } from "@/hooks/Provide";
const SidebarMenuSubButtonStyle = `hover:bg-accent hover:text-accent-foreground bg-transparent! transition-all duration-200 cursor-pointer`
export const SBSobject = {
    user:[
    {
        icon:<Settings />,
        text:`General`,
        id:0
    },
    {
        icon:<User  />,
        text:"Edit_profile_image",
        id:1
    },
        {
        icon:<TriangleAlert color="red"/>,
        text:"Sensitive_settings",
        style:"text-red-500! text-shadow-2xs text-shadow-amber-800",
        id:2
    },
    ],
    quran:[
        {
        icon:<MdHeadphones  />,
        text:"Quran_recitations",
        id:3
    },
        {
        icon:<FaBookOpenReader  />,
        text:"Quran_Reading",
        id:4
    },
        {
        icon:<Settings/>,
        text:"Setting",
        id:5
    },
    ],
    adkar:[
    {
        icon:<FaBookOpenReader/>,
        text:"Adkar_Reading",
        id:6
    },
    {
        icon:<Settings />,
        text:"Setting",
        id:7
    },
    ],
    prayer:[
        {
        icon:<IoTimeSharp />,
        text:"Pray_times",
        id:8
    },
        {
        icon:<FaSearch />,
        text:"Searching_for_mosques",
        id:9
    },
        {
        icon:<Settings />,
        text:"Setting",
        id:10
    }
    ],
    style:SidebarMenuSubButtonStyle
}
export default function useDpIndex(){
const {setDpindex} = useContext(Provider) as IProvider

const changeDPI = (index:number)=>{
setDpindex(index+1)
localStorage.setItem("lastDPindex",(index+1).toString())
}
return {changeDPI}
}