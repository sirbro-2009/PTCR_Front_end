import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { set_user_prayer_prefrence_data } from "@/features/prayer/prayer_slice";
import { useAppDispatch, useAppSelector } from "@/hooks/Redux";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toastFunctions } from "../../quran/components/quran_recitation_components/mp3_compnents/ifFulfied";

const All_time_titles = [
  "الفجر",
  "الشروق",
  "الظهر",
  "العصر",
  "المغرب",
  "العشاء",
  "منتصف الليل",
];
const All_times_title = [
  { name: "Fajr" },
  {name:"Sunrise",isPrayer:false},
  { name: "Dhuhr" },
  { name: "Asr" },
  { name: "Maghrib" },
  { name: "Isha" },
  {name:"Midnight",isPrayer:false},
];
export default function Prayer_time_offset() {
  localStorage.setItem("last_tab_name", "Prayer_time_offset");
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.prayer);
  const [value, setValue] = useState(
    data.prayer_prefrence_data.tune ?? ["0", "0", "0", "0", "0", "0", "0"],
  );
  const offsetIndexs = [1, 2, 3, 4, 5, 7, 8];
  return (
    <Card className="p-2" dir={i18n.dir()}>
      <Label className="text-3xl">
        {t(`dashboard.prayer_page.timeEdit.title`)}
      </Label>
      <FieldGroup dir={i18n.dir()} className="flex p-2 flex-col md:flex-row">
        {All_times_title.map((e, i) => {
          const offsetIndex = offsetIndexs[i];
          let array = [...value];
          return (
            <Field key={i} className="p-2" dir={i18n.dir()}>
              <FieldLabel className="text-xl">
                {t(`dashboard.prayer_page.${'isPrayer' in e?'titles':'prayers'}.${e.name}`)}
              </FieldLabel>
              <Input
                value={value[offsetIndex ?? 0] ?? "0"}
                onInput={(e) => {
                  const target = e.currentTarget;
                  const value = target.value;
                  array[offsetIndex!] = value;
                  setValue(array);
                }}
                placeholder={
                  data.prayer_prefrence_data.tune[offsetIndex ?? 0] ?? `0`
                }
                type="number"
              />
            </Field>
          );
        })}
      </FieldGroup>
      <Button
        className="w-full m-auto md:w-1/8 cursor-pointer"
        onClick={() => {
          const check = value.every((e, i) => {
            return e !== "";
          });
          if (check) {
            dispatch(
              set_user_prayer_prefrence_data({
                method: data.prayer_prefrence_data.method,
                school: data.prayer_prefrence_data.school,
                tune: value,
                is_12: data.prayer_prefrence_data.is_12,
              }),
            );
          } else {
            toastFunctions("you leave input empty", "error");
          }
        }}>
        {t(`dashboard.prayer_page.timeEdit.sendData`)}
      </Button>
    </Card>
  );
}
