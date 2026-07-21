import { Button } from "@/components/ui/button";
import { User ,LayoutDashboard,LogOut  } from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import {sign_out} from "./Yes_Login_fetch.js";
import { Link } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { userData } from "@/features/crud_account_setting/crud_slice"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {useAppDispatch,useAppSelector} from '@/hooks/Redux'
import Loader from "@/other/Loader.";
import type { Data } from "@/dashbord/components/SideBar_components/SideBarFooter.js";
export default function Yes_Login() {
  //const [user, setUser] = useState({});

  const {t } = useTranslation();
  const userInformations = useAppSelector(state=>state.user) 
  const dispatch = useAppDispatch()
useEffect(()=>{
dispatch(userData())
},[dispatch])
const user = userInformations.data
const {profilePicture,fullName,userName} = user as Data
  return (
    <DropdownMenu onOpenChange={(open) => {
  document.body.style.overflowY = open ? "hidden" : "auto"
}}>
      <DropdownMenuTrigger asChild >
        <Button variant="outline" className={`rounded-full w-8 h-8 bg-transparent cursor-pointer`} >
                {
                  profilePicture?
                  
                  <Avatar >
                    <AvatarImage   src={profilePicture} alt="User image" className="scale-170  rounded-full"/>
                    <AvatarFallback className="scale-170  rounded-full">
                      { fullName ?fullName.charAt(0).toUpperCase() :`F`}
                    </AvatarFallback>
                  </Avatar>:!userInformations.done?
                  <Loader/>
                  :
                  <User className="size-5"/>
                }
                
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-foreground text-background border-border">
        <DropdownMenuGroup>
                {/*ACCOUNT NAME USER NAME */}
                  {userInformations.done?
                    <DropdownMenuLabel>
                          <h1 className="font-bold">{fullName||`Full Name`}</h1>
                          <h1 className="font-medium">{userName||`user_1234`}</h1>
                    </DropdownMenuLabel>:
                    <Loader/>
                    }
                  <DropdownMenuItem>
                        <Link to={`/dashboard`} className="w-full flex flex-row  items-center justify-start">
                        <LayoutDashboard className="mr-3" />
                            {t(`navbar.Dashboard`)}
                        </Link>
                  </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <a className="w-full flex flex-row  items-center justify-start" onClick={()=>{sign_out()}}>
              <LogOut className="mr-3"/>
              {t(`navbar.logOut`)}
            </a>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}