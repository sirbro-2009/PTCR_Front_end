import {
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
} from "@/components/ui/context-menu";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useUiChanges from "@/principal_page/components/bar_components/login/useUIchanges";
import { Home, ArrowLeft, LayoutDashboardIcon, Paintbrush,Languages } from "lucide-react";
import { IoRefreshCircleSharp } from "react-icons/io5";
import Loader from "./Loader.";
import { Github, TranslateIcon } from "@hugeicons/core-free-icons";

export default function ContextMenuContentComp() {
  const navigate = useNavigate();
    const {handleTheme,theme,handleLanguageChange,i18n}= useUiChanges()
  
  const current_patch = location.pathname !== "/dashboard";
  const object = {
    firstGroup: [
      {
        text: "Back",
        icon: <ArrowLeft />,
        handelChange: () => {
          navigate(-1);
        },
      },
      {
        text: current_patch ? "Dashboard" : "Home",
        icon: current_patch ? <LayoutDashboardIcon /> : <Home />,
        handelChange: () => {
          navigate(current_patch ? "/dashboard" : "/");
        },
      },
      {
        text: "Reload",
        icon: <IoRefreshCircleSharp />,
        handelChange: () => {
          location.reload();
        },
      },
    ],
    SecondGroup: [
      {
        text: "theme",
        icon: <Paintbrush />,
        isContextMenuSub: true,
        ContextMenuSubItems:[
          {
            text:"dark",
            check:theme === 'dark',
            function:handleTheme
          },
          {
            text:"light",
            check:theme !== 'dark',
            function:handleTheme            
          }
        ],
        handelChange: () => {},
      },
      {
        text:"languages",
        icon:<Languages/>,
        isContextMenuSub: true,
        ContextMenuSubItems:[
          {
            text:"arabic",
            check:i18n.language === 'ar',
            lng:true,
            function:handleLanguageChange
          },
          {
            text:"english",
            check:i18n.language !== 'ar',
            lng:true,
            function:handleLanguageChange            
          }
        ],
      }
    ],
    thirdGroup: [
      {
        isContextMenuSub: true,
        text: "links",
        icon: <Loader long={true} />,
        ContextMenuSubItems:[
          {
            text:"Github",
            icon:<FaGithub />,
            function:()=>{
              location.href = ('https://github.com/sirbro-2009')
            }            
          },
          {
            text:"Linked In",
            icon:<FaLinkedin />,
            function:()=>{
              location.href = ('https://www.linkedin.com/in/zernikh-mouhamed-8a91a4408')
            }            
          }             
        ],
        handelChange: () => {},
      },
    ],
  };

  return (
    <ContextMenuContent className="w-48 bg-foreground text-background">
      {(Object.keys(object) as Array<keyof typeof object>).map((ele, index) => {
        const key = object[ele];
        return (
          <div key={index+1}>
            <ContextMenuGroup key={index}>
              {key.map((e, i) => {
                return "isContextMenuSub" in e ? (
                  <ContextMenuSub key={i}>
                    <ContextMenuSubTrigger>{e.text}</ContextMenuSubTrigger>
                    <ContextMenuSubContent className="w-44 bg-foreground text-background">
                      <ContextMenuGroup>
                        {
                          e.ContextMenuSubItems.map((ele, i) => {
                            if ("check" in ele) {
                              return (
                                <ContextMenuCheckboxItem 
                                  checked={ele.check}
                                  onClick={() => {
                                    if ('lng' in ele){
                                     ele.function(ele.text.substring(0,2)); 
                                    }
                                    else{
                                    ele.function()  
                                    }
                                    
                                  }}
                                  key={i}
                                >
                                  {ele.text}
                                </ContextMenuCheckboxItem>
                              );
                            }

                            return (
                              <ContextMenuItem key={i} onClick={() => ele.function()}>
                                {ele.text}
                                <ContextMenuShortcut>{ele.icon}</ContextMenuShortcut>
                              </ContextMenuItem>
                            );
                          })
                        }
                      </ContextMenuGroup>
                    </ContextMenuSubContent>
                  </ContextMenuSub>
                ) : (
                  <ContextMenuItem
                    key={i}
                    disabled={false}
                    onClick={e.handelChange}>
                    {e.text}
                    <ContextMenuShortcut>{e.icon}</ContextMenuShortcut>
                  </ContextMenuItem>
                );
              })}
            </ContextMenuGroup>
            {index !== 2 ? <ContextMenuSeparator key={index+2}/> : ``}
          </div>
        );
      })}
    </ContextMenuContent>
  );
}
/**
         <ContextMenuSub>
          <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-44 bg-foreground text-background">
            <ContextMenuGroup>
              <ContextMenuItem>Save Page...</ContextMenuItem>
              <ContextMenuItem>Create Shortcut...</ContextMenuItem>
              <ContextMenuItem>Name Window...</ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem>Developer Tools</ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuSubContent>
        </ContextMenuSub>
      <ContextMenuSeparator /> 
      {/**ContextMenuSub 
      <ContextMenuGroup>
        <ContextMenuCheckboxItem checked>
          Show Bookmarks
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
      </ContextMenuGroup>
      <ContextMenuSeparator />
      <ContextMenuGroup>
        <ContextMenuRadioGroup value="pedro">
          <ContextMenuLabel>People</ContextMenuLabel>
          <ContextMenuRadioItem value="pedro">
            Pedro Duarte
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuGroup>
 */
