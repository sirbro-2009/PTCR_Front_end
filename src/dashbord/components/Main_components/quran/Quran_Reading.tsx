import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReadSurah from "./components/quran_reading_components/readSurah";
import ReadAya from "./components/quran_reading_components/readAya";
export default function Quran_Reading() {
  
  return (
    <Tabs
      defaultValue={localStorage.getItem("lastTab")||"surah_reading"}
      className=" m-auto p-4 h-screen mt-5  w-full ">
      <TabsList className="w-full m-auto">
        <TabsTrigger value="surah_reading" className="cursor-pointer">
          Read surah
        </TabsTrigger>
        <TabsTrigger value="aya_reading" className="cursor-pointer">
          Find aya
        </TabsTrigger>
      </TabsList>
      <TabsContent value="surah_reading" className="overflow-y-scroll scrollbar-hide ">
        <ReadSurah />
      </TabsContent>
      <TabsContent value="aya_reading">
        <ReadAya/>
      </TabsContent>
    </Tabs>
  );
}
