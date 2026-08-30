import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
export const editZero = (text:string)=>{
  const numbred = Number(text)
  return  numbred>= 10 ?numbred:"0"+numbred
}
export function EditTime(time:string){
const array = time.split(":")
const [hour,mins] = array
const hourNumbred = Number(hour)
const newHour =hourNumbred >12?hourNumbred-12:hourNumbred
const isPm = hourNumbred >=12?'PM':'AM'
const editedHour =editZero(newHour.toString())
return editedHour+":"+mins+" "+isPm
}
export const editHour12 = (hour:number)=>{
const newHour =hour >12?hour-12:hour
const timeString = hour >=12?'PM':'AM'
return {newHour:newHour.toString(),timeString}
}
export default function PTB({
  title,
  time,
  is12,
  icama,
  isCurrent
}: {
  title: string;
  time: string;
  is12?: boolean;
  icama?: string;
  isCurrent?:boolean,
}) {
  return (
    <Card className={`md:w-50 md:h-50 my-2 items-center  flex  md:flex-col justify-between flex-row text-center md:my-auto border-10${isCurrent?`  border-lime-800`:``}`}>
        <Label className="text-2xl md:m-auto">{title}</Label>
        <Label className="text-2xl md:m-auto" dir="ltr">{!is12?time:EditTime(time)}</Label>
        {icama?<Label className="text-2xl md:m-auto">{editZero(icama)}+</Label>:``}
        
    </Card>
  );
}
