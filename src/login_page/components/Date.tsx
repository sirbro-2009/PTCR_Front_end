import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field } from "@/components/ui/field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useContext } from "react";
import { Provider } from "@/hooks/Provide";
import type { IProvider } from "@/hooks/Provide";

import { useTranslation } from "react-i18next";
export default function DatePicker() {
  const { t } = useTranslation();
  const { signUp, setSignUp } = useContext(Provider) as IProvider;
  const [open, setOpen] = useState(false);
  const Checker = (sentedDate: string): boolean => {
    let theDate = new Date(Date.now());
    const SendedDate = new Date(sentedDate);
    const def: number = Math.round(
      (theDate.getTime() - SendedDate.getTime()) / 1000 / 60 / 60 / 24 / 365,
    );
    if (def >= 5) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <Field className="mx-auto ">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className={`w-[280px] justify-start text-left font-normal transition-all ${
              signUp.isValidDate
                ? "border-red-500 bg-red-50 text-red-900 focus:ring-red-500"
                : "border-input bg-background"
            }`}>
            {signUp.dateOfborn ? signUp.dateOfborn : t(`auth.Select_date`)}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={
               new Date(signUp.dateOfborn)
            }
            defaultMonth={
               new Date(signUp.dateOfborn)
            }
            captionLayout="dropdown"
            onSelect={(date) => {
              console.log(date)
              setSignUp({
                ...signUp,
                dateOfborn: date!.toLocaleDateString(),
                isValidDate: !Checker(date!.toLocaleDateString()),
              });
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </Field>
  );
}
