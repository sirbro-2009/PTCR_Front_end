import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toastFunctions } from "@/dashbord/components/Main_components/quran/components/quran_recitation_components/mp3_compnents/ifFulfied";
import { editAlarm } from "@/features/adkar/Adkar_slice";
import { useAppDispatch, useAppSelector } from "@/hooks/Redux";
import { useState, type ReactNode } from "react";
import { useTranslation } from "react-i18next";

export function EditTime({
  id,
  children,
}: {
  id: number;
  children: ReactNode;
}) {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.adkar);
  const { t ,i18n} = useTranslation();

  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent className="w-80" dir={i18n.dir()}>
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">{t(`dashboard.adkar_page.alarm.editTitle`)} </h4>
            <p className="text-sm text-muted-foreground">
              {t(`dashboard.adkar_page.alarm.editSubtitle`)}
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="width">{t(`dashboard.adkar_page.alarm.timeLabel`)}</Label>
              <Input
                type="time"
                defaultValue="100%"
                id="timeInput"
                className="col-span-2 h-8"
                onKeyDown={async (e) => {
                  const target = e.target as HTMLInputElement;
                  if (e.key === "Enter" && target.value.trim().length === 5) {
                    await dispatch(editAlarm({ id, time: target.value }));
                    if (data.noftications.done2) {
                      toastFunctions(t(`auth.done`), "success");
                    }
                    if (data.noftications.done2 === false) {
                      toastFunctions(t(`auth.some`), "error");
                    }
                    if (data.noftications.done2 === null) {
                      toastFunctions("wait", "loading");
                    }
                  }
                }}
              />
              <Button className="cursor-pointer" 
              onClick={async()=>{
                const target = (document.getElementById("timeInput") as HTMLInputElement | null)?.value ?? "";
                if ( target.trim().length === 5) {
                    await dispatch(editAlarm({ id, time: target }));
                    if (data.noftications.done2) {
                      toastFunctions(t(`auth.done`), "success");
                    }
                    if (data.noftications.done2 === false) {
                      toastFunctions(t(`auth.some`), "error");
                    }
                    if (data.noftications.done2 === null) {
                      toastFunctions("wait", "loading");
                    }
                  }
              }}
              >{t(`auth.done`)}</Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
