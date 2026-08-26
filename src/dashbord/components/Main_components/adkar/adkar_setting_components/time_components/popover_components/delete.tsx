import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toastFunctions } from "@/dashbord/components/Main_components/quran/components/quran_recitation_components/mp3_compnents/ifFulfied";
import { deleteAlarm } from "@/features/adkar/Adkar_slice";
import { useAppDispatch, useAppSelector } from "@/hooks/Redux";
import { useState, type ReactNode } from "react";
import { useTranslation } from "react-i18next";

export function DeleteAlarm({
  children,
  id,
}: {
  children: ReactNode;
  id: number;
}) {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.adkar);
  const [open, setOpen] = useState(false);
      const { t ,i18n} = useTranslation();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent dir={i18n.dir()} className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">
              {t(`dashboard.adkar_page.dialogs.delete.title`)}  
            </h4>
            <p className="text-sm text-muted-foreground">
              {t(`dashboard.adkar_page.dialogs.delete.message`)}  
            </p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Button
              variant="default"
              size={`lg`}
              onClick={async () => {
                await dispatch(deleteAlarm({ id }));
                if (data.noftications.done2) {
                  toastFunctions(t(`auth.done`), "success");
                }
                if (data.noftications.done2 === false) {
                  toastFunctions(t(`auth.some`), "error");
                }
                if (data.noftications.done2 === null) {
                  toastFunctions("wait", "loading")
                }
              }}>
              {t(`dashboard.adkar_page.dialogs.delete.confirm`)} 
                          </Button>
            <Button onClick={()=>{
              setOpen(false)
            }} variant={`outline`} size={`lg`}>
              {t(`dashboard.adkar_page.dialogs.delete.cancel`)} 
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
