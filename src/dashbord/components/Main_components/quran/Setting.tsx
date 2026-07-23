import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LAR from "./components/setting_components/LAR";
import Theme from "./components/setting_components/theme";
export interface  QDS {
    font: "Tajweed" | "Indopak" | "quranFont";
    theme: "dark" | "";
    lang: "en" | "ar";
    readMode: boolean;
  };
export default function Setting(){
return (<Tabs defaultValue={localStorage.getItem("lt")||"theme"} className="m-auto p-4 h-screen mt-5  w-full">
  <TabsList className="w-full m-auto">
    <TabsTrigger value="theme">
        Theme
    </TabsTrigger>
    <TabsTrigger value="LAR">Language and reading setting</TabsTrigger>
  </TabsList>
  <TabsContent value="theme"><Theme/></TabsContent>
  <TabsContent value="LAR"><LAR/></TabsContent>
</Tabs>)
}