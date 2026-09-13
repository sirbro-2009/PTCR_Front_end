import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { editZero, EditTime, editHour12 } from "./prayer_time_box";
import { useAppSelector } from "@/hooks/Redux";
import { useTranslation } from "react-i18next";
import type { WeatherAndPrayerState } from "@/mosque_props_display_page/Display_mosque";
import Time_remaining from "./Time_remaining";
const months_keys = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export default function CBD({
  data,
}: {
  data: WeatherAndPrayerState | undefined;
}) {
  const hijri =
    data?.hijrid_date ?? useAppSelector((state) => state.prayer.hijrid_date);
  const used_data = data ?? useAppSelector((state) => state.prayer);
  const [fullTimeData, setFullTimeData] = useState({
    hour: "00",
    mins: "00",
    second: "00",
    am_pm: "AM",
    fullDate: "",
  });
  const [visible, setVisible] = useState(false);
  const [blur, setBlur] = useState(false);
  window.onblur = () => {
    setBlur(true);
  };
  window.onfocus = () => {
    setBlur(false);
  };
  useEffect(() => {
    if (!blur) {
      setInterval(() => {
        setVisible(!visible);
      }, 8000);
    }
  }, [visible, blur]);
  const is12 = useAppSelector(
    (state) => state.prayer.prayer_prefrence_data.is_12,
  );
  const usetType = useAppSelector((state)=>state.user.data.userType) 

  useEffect(()=>{
  setInterval(async () => {
    const data = new Date();
    const hour = data.getHours().toString();
    setFullTimeData({
      hour: String(editZero(is12 ? editHour12(Number(hour)).newHour : hour)),
      mins: String(editZero(data.getMinutes().toString())),
      second: String(editZero(data.getSeconds().toString())),
      am_pm: editHour12(Number(hour)).timeString,
      fullDate: `${editZero(data.getDate().toString())} 
 ${t(`dashboard.prayer_page.gregorianMonths.${months_keys[data.getMonth()]}`)} 
 ${data.getFullYear()}`,
    });
  }, 1000);
  },[])

  const fullDay = {
    hijri,
    greogore: fullTimeData.fullDate,
  };
  const { t, i18n } = useTranslation();
  const fadeIn = "opacity-100 transition-opacity duration-1000 ease-linear ";
  const fadeOut = "opacity-0 transition-opacity duration-1000 ease-linear ";
  return (
    <Card className="h-70   md:w-1/3 border-10">
      <Label
        className={`${!usetType?`md:text-6xl`:``} text-5xl m-auto text-shadow-2xs shadow-accent-foreground`}
        dir="ltr">
        {fullTimeData.hour} : {fullTimeData.mins} : {fullTimeData.second} {is12 ? fullTimeData.am_pm : ``}
      </Label>
      <Label className="m-auto text-xl flex-col">
        <div className={visible ? fadeOut : fadeIn} dir={i18n.dir()}>
          {visible ? `` : fullDay.hijri}
        </div>
        <div className={visible ? fadeIn : fadeOut} dir={i18n.dir()}>
          {visible ? fullDay.greogore : ``}
        </div>
      </Label>
      <Time_remaining
        icama={used_data.mosqueProps?.MosqueIcama}
        prayer_time={
          used_data.prayers.filter((e) => e.isCurrent === true)[0] ?? undefined
        }
      />
    </Card>
  );
}
