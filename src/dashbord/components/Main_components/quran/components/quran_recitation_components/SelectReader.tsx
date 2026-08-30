import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppSelector } from "@/hooks/Redux";
import { useTranslation } from "react-i18next";
import type { IIres } from "@/features/quran/quran_slice";
export function SelectReader({ values }: any) {
  const theData = useAppSelector((state) => {
    return state.quran;
  });
  const { readerSelect, startValue } = values || {};
  const { t, i18n } = useTranslation();
  const isLatine: "en" | "ar" = ["ar", "fa", "ur"].includes(i18n.language)
    ? "ar"
    : "en";

  const allReader = theData.theData.reciters?.map((e: IIres, i: number) => {
  const reciter = e.reciter ?e.reciter[isLatine]:``
  const dsc = e.reciter?e.reciter.dsc?`- ${e.reciter.dsc[isLatine]}`:``:``
  if(theData.theData.reciters && typeof e.reciter[isLatine] === "string" ){
    return (
      <SelectGroup key={i}>
        <SelectSeparator />
        <SelectItem
          value={e.id.toString()}
          key={i}
          className="   cursor-pointer  w-4/5 md:w-full ">
          <p className="font-['Rubik'] ">
            {reciter}{" "}
            {dsc}
          </p>
        </SelectItem>
        <SelectSeparator />
      </SelectGroup>
    );    
  }

  });
  return (
    <Select
      disabled={!startValue.reader}
      onValueChange={(value) => {
        readerSelect(value);

      }}>
      <SelectTrigger className="w-full md:w-48 my-5">
        <SelectValue placeholder={t(`dashboard.quran_page.select_reader`)} />
      </SelectTrigger>
      <SelectContent>{allReader}</SelectContent>
    </Select>
  );
}
