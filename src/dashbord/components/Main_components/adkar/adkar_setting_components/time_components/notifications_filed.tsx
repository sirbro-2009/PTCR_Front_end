import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldTitle,
} from "@/components/ui/field";
import { Delete, Pencil, Plus } from "lucide-react";
export default function NotificationsFiled(data:{key:number,object:{text:string,time:string}}){
    const {text,time} = data.object
return (          
        <FieldLabel key={data.key} className="my-4  mx-auto">
            <Field orientation="horizontal">
              <FieldContent className="grid grid-cols-2 md:grid-cols-1 ">
                <div className="flex flex-row items-center justify-between">
                <FieldTitle>{text}</FieldTitle>
                <FieldLegend>{time}</FieldLegend>                    
                </div>

                <FieldDescription className="flex flex-row justify-between items-center ">
                  <Pencil size={30} className="cursor-pointer" color="green"/>
                  <Delete size={30} className="cursor-pointer" color="red"/>
                </FieldDescription>
              </FieldContent>
            </Field>
          </FieldLabel>)
}