import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppSelector } from "@/hooks/Redux";
import adkar_object from "@/assets/JSON/adkarObject.json";
import { categoriesMetadata } from "@/other/data";
import { EmptyMuted } from "./time_components/no_any_thing";
import NotificationsFiled from "./time_components/notifications_filed";
const array = [
  {text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",time:"10:20"},
  {text:" Illum magnam cum inventore deleniti tenetur reiciendis suscipit omnis quam asperiores eveniet ratione iusto est,",time:"10:50"},
  {text:"fuga architecto labore quas magni necessitatibus sit.",time:"00:12"}
]
export function Adkar_alarm() {
localStorage.setItem("lastAindex","setAlarm")
  const isTrue = true
  const data = useAppSelector((state) => state.adkar);
  return (
    <Card>
      <CardTitle className="flex flex-row items-center w-full p-2 md:w-2/5 m-auto justify-between">
        {/**select */}
        <Select>
          <SelectTrigger className="w-fit mx-2">
            <SelectValue placeholder="select dhikr type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {data.searchArrayRes.map((e, i) => {
                const keyValue = adkar_object[e as keyof typeof adkar_object];
                const metadata = categoriesMetadata[i];
                const color = metadata?.color
                return (
                  <SelectItem
                    value={metadata!.category}
                    color={metadata?.color}
                    className={color}
                    style={{ color: metadata?.color }}
                    key={i}>
                    {metadata?.icon}
                    {metadata?.category}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
        {/**time input */}
        <Input
          type="time"

          className="appearance-none bg-background w-fit [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
        />
        {/*add button */}
        <Plus size={30} className="rounded-full bg-accent cursor-pointer" />
      </CardTitle>
      <CardContent>
        {
          isTrue?
          array.map((e,i)=>{
            return (<NotificationsFiled key={i} object={e}></NotificationsFiled>)
          }):<EmptyMuted/>          
        }
      </CardContent>
    </Card>
  );
}
