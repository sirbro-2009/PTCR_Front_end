import { Card } from "@/components/ui/card";
import SelectLang from "./bar_components/SelectLang";
import SelectTheme from "./bar_components/SelectTheme";
import Login from "./bar_components/Login";
import Icon from "./bar_components/Icon";
export default function Bar() {
  return (
    <Card
      className={`flex justify-between  w-full 
      my-2  overflow-scroll lg:overflow-hidden scrollbar-hide p-8 h-10 flex-row  items-center`}>
      <SelectLang />
      <SelectTheme />
      <Icon className={``} />
      <Login />
    </Card>
  );
}
