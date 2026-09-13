import { useAppSelector } from "@/hooks/Redux";
import PTB from "./multi_use_comps/prayer_time_box";
import type { WeatherAndPrayerState } from "@/mosque_props_display_page/Display_mosque";
import { useTranslation } from "react-i18next";

export default function Five_Prayer_data({object}:{object?:WeatherAndPrayerState|undefined}) {
  const data = object ?? useAppSelector((state) => {
    return state.prayer;
  });
  const mosqueIcama = data.mosqueProps?.MosqueIcama ?? {};
  const keys = ['Fajr','Dhuhr','Asr','Maghrib','Isha']
  const {t,i18n} = useTranslation()
  return (
    <div className="mx-auto flex md:flex-row flex-col md:justify-between p-2" dir={i18n.dir()}>
      {data.prayers.map((e, i) => {

        return (
          <PTB
            title={t(`dashboard.prayer_page.prayers.${e.title}`)}
            key={i}
            time={e.time}
            icama={mosqueIcama[keys[i] as keyof typeof mosqueIcama] ?? ``}
            is12={data.prayer_prefrence_data.is_12}
            isCurrent={!!e.isCurrent}></PTB>
        );
      })}
    </div>
  );
}
