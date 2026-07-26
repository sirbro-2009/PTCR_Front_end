import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LAR from "./components/setting_components/LAR";
import Theme from "./components/setting_components/theme";
import { useTranslation } from "react-i18next";
export interface  QDS {
    font: "Tajweed" | "Indopak" | "quranFont";
    theme: "dark" | "";
    lang: "en" | "ar";
    readMode: boolean;
  };
export default function Setting(){
const {t} = useTranslation()

return (<Tabs defaultValue={localStorage.getItem("lt")||"theme"} className="m-auto p-4 h-screen mt-5  w-full">
  <TabsList className="w-full m-auto">
    <TabsTrigger value="theme">
        {t(`dashboard.quran_page.theme.title`)}
    </TabsTrigger>
    <TabsTrigger value="LAR"> {t(`dashboard.quran_page.reading_settings.title`)}</TabsTrigger>
  </TabsList>
  <TabsContent value="theme"><Theme/></TabsContent>
  <TabsContent value="LAR"><LAR/></TabsContent>
</Tabs>)
}