import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppDispatch, useAppSelector } from "@/hooks/Redux";
import adkar_object from "@/assets/JSON/adkarObject.json";
import { categoriesMetadata } from "@/other/data";
import { EmptyMuted } from "./time_components/no_any_thing";
import NotificationsFiled from "./time_components/notifications_filed";
import { useEffect, useState, type InputHTMLAttributes } from "react";
import { addAlarm, getData } from "@/features/adkar/Adkar_slice";
import { toastFunctions } from "../../quran/components/quran_recitation_components/mp3_compnents/ifFulfied";
import { useTranslation } from "react-i18next";
export function Adkar_alarm() {
  localStorage.setItem("lastAindex", "setAlarm");
  const { t } = useTranslation();

  interface alarmObjectType {
    id: number;
    time: string;
  }
  useEffect(() => {
    dispatch(getData());
  }, []);
  const data = useAppSelector((state) => state.adkar);
  const isTrue = data.noftications.alaramArray.length !== 0;
  const dispatch = useAppDispatch();
  const [new_alarm, setNew_alarm] = useState({} as alarmObjectType);
  return (
    <Card>
      <CardTitle className="flex flex-row items-center w-full p-2 md:w-2/5 m-auto justify-between">
        {/**select */}
        <Select
          value={new_alarm.id?.toString()}
          onValueChange={(value) => {
            setNew_alarm({ ...new_alarm, id: Number(value) });
          }}>
          <SelectTrigger className="w-fit mx-2">
            <SelectValue placeholder={t(`dashboard.adkar_page.alarm.selectDhikrType`)} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {data.searchArrayRes.map((e, i) => {
                const keyValue = adkar_object[e as keyof typeof adkar_object];
                const metadata = categoriesMetadata[i];
                const color = metadata?.color;
                return (
                  <SelectItem
                    value={i.toString()}
                    color={metadata?.color}
                    className={color}
                    style={{ color: metadata?.color }}
                    key={i}>
                    {metadata?.icon}
                    {t(
                      `dashboard.adkar_page.adhkarNames.${metadata?.category.replaceAll(" ","_")}`,
                    )}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
        {/**time input */}
        <Input
          type="time"
          className="appearance-none bg-background w-fit [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
          value={new_alarm.time}
          onInput={(e) => {
            const target = e.target as HTMLInputElement;
            if (target.value.trim()) {
              setNew_alarm({ ...new_alarm, time: target.value.trim() });
            }
          }}
        />
        {/*add button */}
        <Plus
          size={30}
          className="rounded-full bg-accent cursor-pointer"
          onClick={async () => {
            if (new_alarm && new_alarm.time) {
              const check = data.noftications.alaramArray.filter((e, i) => {
                return e.id === new_alarm.id;
              });

              if (check.length !== 0) {
                toastFunctions(
                  t(`dashboard.adkar_page.errors.dhikrAlreadyExists`),
                  "error",
                );
                return null;
              }

              await dispatch(addAlarm(new_alarm));
              if (data.noftications.done2) {
                toastFunctions(t(`auth.done`), "success");
              }
              if (data.noftications.done2 === false) {
                toastFunctions(t(`auth.some`), "error");
              }
              if (data.noftications.done2 === null) {
                toastFunctions("wait", "loading");
              }
              setNew_alarm({ time: "" } as alarmObjectType);
            } else if (!new_alarm || !new_alarm.time) {
              toastFunctions(
                t(`dashboard.adkar_page.errors.checkInput`),
                "error",
              );
            }
          }}
        />
      </CardTitle>
      <CardContent>
        {isTrue ? (
          data.noftications.alaramArray.map((e, i) => {
            return <NotificationsFiled key={i} object={e}></NotificationsFiled>;
          })
        ) : (
          <EmptyMuted />
        )}
      </CardContent>
    </Card>
  );
}
