import { Label } from "@/components/ui/label";
import { Clock } from "lucide-react";
import { editZero } from "./prayer_time_box";
import type { Prayer_Object } from "@/mosque_props_display_page/Display_mosque";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { inWordTranslations } from "@/other/data";
import { useNavigate, useParams } from "react-router";

export function f(x: number){
return -x + 60 === 60 ? 0 : -x + 60
}
export default function Time_remaining({
  prayer_time,
  icama,
}: {
  prayer_time: Prayer_Object | undefined;
  icama: any;
}) {
  try {
    const [timeRemaining, setTR] = useState("00:00");
    const navigate = useNavigate();
    const { id } = useParams();
    const { t, i18n } = useTranslation();

    const mosqueIcama = prayer_time
      ? icama[prayer_time.title as keyof typeof icama]
      : undefined;

    useEffect(() => {
      if (!prayer_time?.time && !mosqueIcama && !id) return;

      const intervalId = setInterval(() => {
        const date = new Date();
        let offset: number = 0;
        if (
          date.getMinutes() === 0 &&
          date.getHours() === 0 &&
          date.getSeconds() === 0
        ) {
          location.reload();
        }
        //86400000
        if (prayer_time?.title === "Fajr") {
          const hour = Number(prayer_time.time.split(":")[0]) - date.getHours();
          if (hour < 0) {
            offset = 86400000;
          }
        }
        const full_date = `${date.getFullYear()}-${editZero((date.getMonth() + 1).toString())}-${editZero(date.getDate().toString())}`;
        const start =
          new Date(
            `${full_date}T${editZero(date.getHours().toString())}:${editZero(date.getMinutes().toString())}:${editZero(date.getSeconds().toString())}`,
          ).getTime() + offset;

        const end = new Date(`${full_date}T${prayer_time?.time}:00`).getTime();
        const dif = new Date(end - start).toLocaleTimeString().split(" ")[0];

        const diffMs = Math.max(0, end - start);
        const sub_time = Math.floor(diffMs / (60 * 1000));

        const remaining_hour = Math.floor(sub_time / 60);
        const remaining_mins = sub_time % 60;
        const second = date.getSeconds();

        const remaining_time_text = {
          full_time: `${editZero(remaining_hour.toString())}:${editZero(remaining_mins.toString())}`,
          no_hour: `${editZero(remaining_mins.toString())}:${editZero(f(second).toString())}`,
        };
        //sub_time === 0
        //  ? remaining_time_text.no_hour
        //  : remaining_time_text.full_time
        setTR(prayer_time?.title==='Fajr'?sub_time === 0
         ? remaining_time_text.no_hour
          : remaining_time_text.full_time:dif as string);
        //remaining_hour === 0 && remaining_mins === 0 && f(second) === 0
        if (prayer_time?.title!=='Fajr'? remaining_hour === 0 && remaining_mins === 0 && f(second) === 0:dif=== '0:00:00' ) {
          navigate(`/adhan/${prayer_time?.title}/${mosqueIcama ?? 5}/${id}`);
        }

        if (
          remaining_hour >= 0 &&
          remaining_mins >= 10 &&
          f(second) === 0 &&
          date.getMinutes() % 5 === 0
        ) {
          navigate(`/adkar/${id}`);
        }
      }, 1000);

      return () => clearInterval(intervalId);
    }, [prayer_time, mosqueIcama, id, navigate]);

    if (!prayer_time) return null;

    return (
      <Label className="m-auto text-3xl" dir={i18n.dir()}>
        <Clock />
        {t(`dashboard.prayer_page.prayers.${prayer_time.title}`)}{" "}
        {inWordTranslations[i18n.language as keyof typeof inWordTranslations]}
        <span dir="ltr">
          {timeRemaining
            .split(":")
            .map((e) => editZero(e))
            .join(":")}
        </span>
      </Label>
    );
  } catch {
    return <></>;
  }
}
