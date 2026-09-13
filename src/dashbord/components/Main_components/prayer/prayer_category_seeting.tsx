import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Pray_method from "./pcs_components/pray_method";
import Prayer_time_offset from "./pcs_components/prayer_time_offsest";
import Madhab_calc_method from "./pcs_components/Madhab_calc_method";
import Time_display from "./pcs_components/time_display";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/Redux";
import { get_user_prayer_prefrence_data } from "@/features/prayer/prayer_slice";
import Loader from "@/other/Loader.";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";

export default function Prayer_Category_setting() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.prayer);
  useEffect(() => {
    dispatch(get_user_prayer_prefrence_data());
  }, []);
  const {t} = useTranslation()
  return (
    <>
      {data.All_done.done3 ? (
        <Tabs
          dir={i18n.dir()}
          defaultValue={
            localStorage.getItem("last_tab_name") ?? "prayer_method"
          }
          className="w-full mx-auto p-2">
          <TabsList className="w-full flex justify-between flex-row">
            <TabsTrigger value="prayer_method">{t(`dashboard.prayer_page.tabs.prayerMethod`)}</TabsTrigger>
            <TabsTrigger value="Prayer_time_offset">
              {t(`dashboard.prayer_page.tabs.prayerTimeEdit`)}
            </TabsTrigger>
            <TabsTrigger value="Madhab_calc_method">
              {t(`dashboard.prayer_page.tabs.madhabCalcMethod`)}
            </TabsTrigger>
            <TabsTrigger value="is_12">{t(`dashboard.prayer_page.tabs.timeDisplay`)}</TabsTrigger>
          </TabsList>
          <TabsContent value="prayer_method">
            <Pray_method />
          </TabsContent>
          <TabsContent value="Prayer_time_offset">
            <Prayer_time_offset />
          </TabsContent>
          <TabsContent value="Madhab_calc_method">
            <Madhab_calc_method />
          </TabsContent>
          <TabsContent value="is_12">
            <Time_display />
          </TabsContent>
        </Tabs>
      ) : (
        <Loader />
      )}
    </>
  );
}
