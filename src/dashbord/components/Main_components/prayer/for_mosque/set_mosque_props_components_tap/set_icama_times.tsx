import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  getMosque_data,
  prayers_names,
  set_icama,
} from "@/features/prayer/prayer_slice";
import { useAppDispatch, useAppSelector } from "@/hooks/Redux";
import Loader from "@/other/Loader.";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Set_icama_times() {
  const { t,i18n } = useTranslation();
  localStorage.setItem("lastIndexMP", "set_Icama");
  const data = useAppSelector((state) => state.prayer);
  const [icama, setIcamaTimes] = useState({
    Fajr: "5",
    Dhuhr: "5",
    Asr: "5",
    Maghrib: "5",
    Isha: "5",
  });
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getMosque_data());
    if (data.All_done.done4 && data.mosqueProps?.MosqueIcama) {
      console.log(data.mosqueProps?.MosqueIcama)
      setIcamaTimes(data.mosqueProps?.MosqueIcama);
    }
  }, [data.All_done.done4]);

  return (
    <Card className="flex flex-col  ">
      <div className="flex flex-col justify-between  md:flex-row ">
        {["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"].map((e, i) => {
          const key: keyof typeof icama = e as keyof typeof icama;
          return (
            <Card dir={i18n.dir()} className="flex justify-between bg-card/50 flex-row md:flex-col p-2" key={i}>
              <Label>{t(`dashboard.prayer_page.prayers.${e}`)}</Label>
              <Label>+{icama ? icama[key] : 5}</Label>
              <Input
                className="w-60 md:w-auto"
                type="number"
                onInput={(event) => {
                  const target = event.target as HTMLInputElement;
                  if (
                    !Number.isNaN(target.value) &&
                    Number(target.value) >= 5
                  ) {
                    
                    setIcamaTimes({ ...icama, [key]: target.value });
                  }
                }}
              />
            </Card>
          );
        })}
      </div>

      <Button
        onClick={() => {
          dispatch(set_icama(icama))
        }}>
        {t(`dashboard.prayer_page.timeEdit.sendData`)}
      </Button>
    </Card>
  );
}
