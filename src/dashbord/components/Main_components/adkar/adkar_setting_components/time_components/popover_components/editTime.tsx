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
import type { ReactNode } from "react";

export function EditTime({
  id,
  children,
}: {
  id: number;
  children: ReactNode;
}) {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.adkar);

  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">Edit time</h4>
            <p className="text-sm text-muted-foreground">
              Set a new time for this alaram
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">time</Label>
              <Input
                type="time"
                defaultValue="100%"
                className="col-span-2 h-8"
                onKeyDown={async (e) => {
                  const target = e.target as HTMLInputElement;
                  if (e.key === "Enter" && target.value.trim().length === 5) {
                    await dispatch(editAlarm({ id, time: target.value }));
                    if (data.noftications.done2) {
                      toastFunctions("done", "success");
                    }
                    if (data.noftications.done2 === false) {
                      toastFunctions("something wrong", "error");
                    }
                    if (data.noftications.done2 === null) {
                      toastFunctions("wait", "loading");
                    }
                  }
                }}
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
