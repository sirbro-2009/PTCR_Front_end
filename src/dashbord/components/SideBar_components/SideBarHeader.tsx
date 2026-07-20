import { SidebarHeader, SidebarTrigger } from "@/components/ui/sidebar";
import { Provider } from "@/hooks/Provide";
import type { IProvider } from "@/hooks/Provide";
import { useContext } from "react";
export default function SideBarHeader() {
  const { theScreen, setScreen } = useContext(Provider) as IProvider;

  return (
    <SidebarHeader>
      <div
        className={`flex h-15 w-[15rem] cursor-pointer flex-row items-center justify-between `}>
        <SidebarTrigger
          onClick={() => {
            setScreen(!theScreen);
          }}
          className={`md:block hidden  font-bold p-1.5`}
        />
        <p className=" font-['Rubik'] text-xl font-bold">PTCR</p>
      </div>
    </SidebarHeader>
  );
}
