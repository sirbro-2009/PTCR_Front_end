import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronsUpDown,House ,LogOut,User } from "lucide-react"
import { useEffect } from "react";
import {sign_out } from "@/principal_page/components/bar_components/login/Yes_Login_fetch";
import { Link } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useTranslation } from 'react-i18next';
import { SkeletonBar } from "@/other/Skeleton";
import { Skeleton } from "@/components/ui/skeleton"
import { userData } from "@/features/crud_account_setting/crud_slice"
import {useAppDispatch,useAppSelector} from '@/hooks/Redux'

export default function SideBarFooter(){
  const theToken = localStorage.getItem("token");
const userInformations = useAppSelector(state=>state.user)

const dispatch = useAppDispatch()
useEffect(()=>{
dispatch(userData())

},[dispatch])
  const {t } = useTranslation();
   
const user = userInformations.data
return (<SidebarFooter >
  <hr />
  <SidebarMenu>
    <SidebarMenuItem>
      <DropdownMenu onOpenChange={(open) => {
            document.body.style.overflowY = open ? "hidden" : "auto"
          }}>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton className={`flex md:flex-row-reverse h-13 bg-transparent! overflow-visible`}>
            {
              !userInformations.done?
              <SkeletonBar/>:
                <>
                {
                  user.profilePicture?
                  <Avatar className={`flex  w-8 h-8  group-data-[collapsible=icon]:scale-75 `}>
                    <AvatarImage  src={user.profilePicture} alt="User image" className="h-8 w-8 rounded-full"/>
                    <AvatarFallback className={`h-auto w-auto`}>
                      {user.fullName.split("")[0].toUpperCase()||`F`}
                    </AvatarFallback>
                  </Avatar>:
                  <User className="scale-120 font-bold"/>
                }
              <div className="group-data-[collapsible=icon]:hidden">
                  <p>{user.fullName||`Full Name`}</p>
                  <p className="text-muted-foreground font-light text-sm">{t(`sideBar.${user.userType||`-_-`}`)} </p>
              </div>
            <ChevronsUpDown className="ml-auto group-data-[collapsible=icon]:hidden"/>
                </>
            }
          </SidebarMenuButton>
        </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-foreground text-background border-border" >
        
                {
                  !userInformations.done?
                  <>
                      <div className="space-y-2 p-2" >
                        <Skeleton className="h-4 w-full bg-background" />
                        <Skeleton className="h-4 ml-auto w-[100px]  bg-background" />
                      </div>
                  </>
                  :
                  <>
          <DropdownMenuGroup>
                {/*ACCOUNT NAME USER NAME */}
                <DropdownMenuLabel>
                        <h1 className="font-bold">{user.email||`email@example.com`}</h1>
                        <h1 className="font-medium">{user.userName||`user_1234`}</h1>
                </DropdownMenuLabel>
                  <DropdownMenuItem>
                        <Link to={`/`} className="w-full flex flex-row  items-center justify-start">
                        <House  className="mr-3" />
                            {t(`dashboard.principale_page`)}
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
                  </>
                }

      </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  </SidebarMenu>
</SidebarFooter>)
}