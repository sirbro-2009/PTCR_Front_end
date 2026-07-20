import { type SetStateAction } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { quranNarrations } from "@/dashbord/components/Main_components/quran/components/quran_recitation_components/objects";
interface e {
  ar: string;
  en: string;
  db: string;
}
export function SelectNarrations({values}:any) {
  const {startValue,narrationsSelect} = values || {}
  const allNarrations = quranNarrations.map((e: e, i: number) => {
    return (
      <SelectGroup key={i} >
        <SelectSeparator />
        <SelectItem
            value={e.db}
            key={i}
            dir="rtl"
            className="  text-center cursor-pointer  w-4/5 md:w-full ">
            {/**<p className="font-['Rubik'] ">{e.en}</p> */}
            
            <p className="font-['Rubik'] ">{e.ar}</p>
        </SelectItem>
        <SelectSeparator />
      </SelectGroup>
    );
  });
  return (
    <Select
    disabled={!startValue.narration}
      onValueChange={(value) => {
        narrationsSelect(value)
        
      }}>
      <SelectTrigger className="w-full md:w-48 my-5">
        <SelectValue placeholder="Select a Narration" />
      </SelectTrigger>
      <SelectContent>{allNarrations}</SelectContent>
    </Select>
  );
}
