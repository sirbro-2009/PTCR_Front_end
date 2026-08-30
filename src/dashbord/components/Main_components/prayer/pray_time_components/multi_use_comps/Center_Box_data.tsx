import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { editZero, EditTime, editHour12 } from "./prayer_time_box";
import { useAppSelector } from "@/hooks/Redux";
const monthsArabic = [
  "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
  "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
export default function CBD() {
  const hijri = useAppSelector(state=>state.prayer.hijrid_date)
  const [fullTimeData, setFullTimeData] = useState({
    hour: "00",
    mins: "00",
    second: "00",
    am_pm: "AM",
    fullDate: "",
  });
  const [visible, setVisible] = useState(false);
  const [blur,setBlur] = useState(false)
  window.onblur = ()=>{
    setBlur(true)
  }
  window.onfocus = ()=>{
    setBlur(false)
  }
  useEffect(()=>{
  if(!blur){
  setInterval(() => {
      setVisible(!visible)
    }, 8000);
  }
  },[visible,blur])
  const is12 = false;
    setInterval(async() => {
    const data = new Date();
    const hour = data.getHours().toString();
    setFullTimeData({
      hour: String(editZero(is12 ? editHour12(Number(hour)).newHour : hour)),
      mins: String(editZero(data.getMinutes().toString())),
      second: String(editZero(data.getSeconds().toString())),
      am_pm: editHour12(Number(hour)).timeString,
      fullDate:
        editZero(data.getFullYear().toString()) +
        " " +
        monthsArabic[data.getMonth()] +
        " " +
        editZero(data.getDate().toString()),
    });
  }, 1000);

  const fullDay = {
    hijri,
    greogore: fullTimeData.fullDate,
  };

  const fadeIn = "opacity-100 transition-opacity duration-1000 ease-linear ";
  const fadeOut = "opacity-0 transition-opacity duration-1000 ease-linear ";
  return (
    <Card className="h-70   md:w-1/3 border-10">
      <Label
        className={`text-${is12 ? 6 : 7}xl m-auto text-shadow-2xs shadow-accent-foreground`}>
        {fullTimeData.hour}:{fullTimeData.mins}:{fullTimeData.second}
        {is12 ? fullTimeData.am_pm : ``}
      </Label>
      <Label className="m-auto text-xl flex-col">
        <div className={visible ? fadeOut : fadeIn}>{visible?``:fullDay.hijri}</div>
        <div className={visible ? fadeIn : fadeOut} dir="rtl">{visible?fullDay.greogore:``}</div>
      </Label>
    </Card>
  );
}
