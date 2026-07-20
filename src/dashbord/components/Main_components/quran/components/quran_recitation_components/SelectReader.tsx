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
interface readerObject{
            id: number,
            reciter: {
                ar: string,
                en: string,
                dsc:{
                  ar:string,
                  en:string
                }
            }
}
export function SelectReader({values}:any) {
  const theData = useAppSelector((state) => {
    return state.quran;
  });
  const {readerSelect,startValue} = values || {}
  
  const allReader = theData.theData.reciters?.map((e: any, i: number) => {
    return (
      <SelectGroup key={i} >
        <SelectSeparator />
        <SelectItem
            value={e.id.toString()}
            key={i}
            className="   cursor-pointer  w-4/5 md:w-full ">
            {/**<p className="font-['Rubik'] ">{e.reciter.en}</p> */}
            <p className="font-['Rubik'] ">{e.reciter.ar}  {e.reciter?.dsc?.ar?"-"+e.reciter?.dsc?.ar:``}</p>
        </SelectItem>
        <SelectSeparator />
      </SelectGroup>
    );
  })
  return (
    <Select
    disabled={!startValue.reader}
      onValueChange={(value) => {
        readerSelect(value)
        
      }}>
      <SelectTrigger className="w-full md:w-48 my-5">
        <SelectValue placeholder="Select a Reader" />
      </SelectTrigger>
      <SelectContent>{allReader}</SelectContent>
    </Select>
  );
}
