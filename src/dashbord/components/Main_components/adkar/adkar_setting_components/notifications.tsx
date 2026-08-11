import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useAppSelector } from "@/hooks/Redux";
import { BellCheck, BellOff } from "lucide-react";


export function Notification() {
localStorage.setItem("lastAindex","notifcation")
const notification = useAppSelector(state=>state.adkar.noftications.isEnabled)
  const option = [
    {
      title: "active noftication",
      des: "we will send notification to you whene was the time of adkar.",
      value: "true",
      icon: <BellCheck />,
    },
    {
      title: "desactive noftication",
      des: "we wont send notification to you whene was the time of adkar.",
      value: "false",
      icon: <BellOff />,
    },
  ];
  return (
    <RadioGroup defaultValue="false"  className="w-full p-2">
      {option.map((e, i) => {
        return (
          <FieldLabel key={i}>
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>{e.icon}{e.title}</FieldTitle>
                <FieldDescription>{e.des}</FieldDescription>
              </FieldContent>
              <RadioGroupItem value={e.value} />
            </Field>
          </FieldLabel>
        );
      })}
    </RadioGroup>
  );
}
