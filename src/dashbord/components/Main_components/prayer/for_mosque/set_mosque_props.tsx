import {
  Card,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { useTranslation } from "react-i18next";
import PlacePicker from "./set_mosque_props_components_tap/map";
const condetion = [
  "Your mosque must be exist in google map",
  "If is exist we well get mosque data and we use it",
  "You can edit mosque calc method,offset,time display,madhab from setting",
  "From here you can set your mosque location,background display,and adkar show,and icama times"
]
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Set_icama_times from "./set_mosque_props_components_tap/set_icama_times";
import Set_mosque_style from "./set_mosque_props_components_tap/set_mosque_style";
function Set_place(){
    const {t,i18n} = useTranslation()
localStorage.setItem("lastIndexMP","set_mosque_place")
return (    <Card className="p-2 my-2" dir={i18n.dir()}>
      <CardTitle className="mx-auto text-xl font-bold">
        {t(`dashboard.prayer_page.mosqueSetup.addMosqueTitle`)}
      </CardTitle>
      <CardDescription className="p-2">
        {t(`dashboard.prayer_page.mosqueSetup.conditionsTitle`)}
      </CardDescription>
      <FieldGroup className="mx-auto p-2">
        {condetion.map((e, i) => {
          return (
            <Field orientation="horizontal" key={i}>
              <FieldLabel htmlFor="terms-checkbox-basic">
                {i+1} - {t(`dashboard.prayer_page.mosqueSetup.condition${i+1}`)} .
              </FieldLabel>
            </Field>
          );
        })}
      </FieldGroup>
      <Card>
        <PlacePicker/>
      </Card>
    </Card>)
}
export default function Set_mosque_props() {
    const {t,i18n} = useTranslation()
  return (
<Tabs dir={i18n.dir()} defaultValue={localStorage.getItem("lastIndexMP") as string} className="w-full p-2">
  <TabsList className="w-full">
    <TabsTrigger value="set_mosque_place">{t(`dashboard.prayer_page.tabs.setMosquePlace`)}</TabsTrigger>
    <TabsTrigger value="set_Icama">{t(`dashboard.prayer_page.tabs.setIcama`)}</TabsTrigger>
    <TabsTrigger value="set_mosque_style">{t(`dashboard.prayer_page.tabs.mosqueStyling`)}</TabsTrigger>
  </TabsList>
  <TabsContent value="set_mosque_place"><Set_place/></TabsContent>
  <TabsContent value="set_Icama"><Set_icama_times/></TabsContent>
  <TabsContent value="set_mosque_style"><Set_mosque_style/></TabsContent>
</Tabs>
  );
}
