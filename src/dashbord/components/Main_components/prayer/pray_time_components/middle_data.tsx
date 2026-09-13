import { Card } from "@/components/ui/card";
import PTB from "./multi_use_comps/prayer_time_box";
import CBD from "./multi_use_comps/Center_Box_data";
import { useAppSelector } from "@/hooks/Redux";
import Loader from "@/other/Loader.";
import type { WeatherAndPrayerState } from "@/mosque_props_display_page/Display_mosque";
import { useTranslation } from "react-i18next";

export default function Middle_Screen_data({object}:{object?:WeatherAndPrayerState|undefined}) {
  const data = object??useAppSelector((state) => {
    return state.prayer;
  });
  const {i18n,t} = useTranslation()
  return (
    <Card className={`flex md:flex-row flex-col p-4 bg-card ${object?'bg-transparent border-transparent ':'bg-card/50 '} mx-auto justify-between`}>
      {data.sunrise_midnight.length !== 0? (
        <>
          <PTB
            title={t(`dashboard.prayer_page.titles.${data.sunrise_midnight[0]?.title}`)}
            time={data.sunrise_midnight[0]?.time ?? ""}
            is12={data.prayer_prefrence_data.is_12}
          />
          <CBD  data={object}/>
          <PTB
            title={t(`dashboard.prayer_page.titles.${data.sunrise_midnight[1]?.title}`)}
            time={data.sunrise_midnight[1]?.time ?? ""}
            is12={data.prayer_prefrence_data.is_12}
          />
        </>
      ) : (
        <Loader/>
      )}
    </Card>
  );
}
