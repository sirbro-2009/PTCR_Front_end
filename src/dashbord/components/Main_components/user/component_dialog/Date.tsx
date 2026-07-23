import { Field } from "@/components/ui/field";
import Dialog_comp from "./Dialog_comp";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Provider } from "@/hooks/Provide";
import type { IProvider } from "@/hooks/Provide";
export function TheDate({ name = "dateOfborn" }: { name?: string }) {
  const { t } = useTranslation();

  return (
    <Dialog_comp edit_type="date">
      <Field>
        <h1 className="text-xl">{t(`auth.date`)}</h1>
        <DatePickerSimple name={name} />
      </Field>
    </Dialog_comp>
  );
}

function DatePickerSimple({ name }: { name: string }) {
  const { setReady, ready } = useContext(Provider) as IProvider;
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const [date, setDate] = useState<Date | undefined>(undefined);

  const Checker = (sentedDate: any): boolean => {
    try {
      let theDate = new Date(Date.now());
      const SendedDate = new Date(sentedDate);
      const def: number = Math.round(
        (theDate.getTime() - SendedDate.getTime()) / 1000 / 60 / 60 / 24 / 365,
      );
      return def >= 5;
    } catch {
      return false;
    }
  };

  return (
    <Field className="mx-auto w-44">
      <input
        type="hidden"
        name={name}
        value={date ? date.toISOString().split("T")[0] : ""}
      />

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className={`font-normal text-center
                ${
                  !ready
                    ? `border-red-500 bg-red-50 text-red-900 focus:ring-red-500`
                    : "border-input bg-background"
                }
              `}
          >
            {date ? date.toISOString().split("T")[0] : t(`auth.Select_date`)}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date ?? new Date()}
            defaultMonth={date ?? new Date()}
            captionLayout="dropdown"
            onSelect={(date) => {
              if (!date) return;
              setDate(date);
              setReady(Checker(date));
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </Field>
  );
}