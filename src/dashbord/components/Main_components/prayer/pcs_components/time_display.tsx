import { useTranslation } from "react-i18next";
import {
  Card,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Field,
  FieldContent,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { useAppDispatch, useAppSelector } from "@/hooks/Redux";
import { set_user_prayer_prefrence_data } from "@/features/prayer/prayer_slice";
export default function Time_display(){
localStorage.setItem("last_tab_name","is_12")
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.prayer);
  const { t, i18n } = useTranslation();
    const options = [
        {
            title:"amPm",
            value:"true"
        },
        {
            title:"normal",
            value:"false"
        },
    ]
    return (    <Card className="p-2">
      <CardTitle>
        <Label className="font-bold text-xl">
          {t(`dashboard.prayer_page.timeDisplay.selectTitle`)}
        </Label>
      </CardTitle>
      <CardDescription>
        {t(`dashboard.prayer_page.timeDisplay.defaultLabel`)}
      </CardDescription>
      <RadioGroup value={data.prayer_prefrence_data.is_12?'true':'false'} className="w-full p-2" dir={i18n.dir()}>
        {options.map((e, i) => {
          return (
            <FieldLabel key={i} 
            
              onClick={() => {
                dispatch(
                  set_user_prayer_prefrence_data({
                    method: data.prayer_prefrence_data.method,
                    school: data.prayer_prefrence_data.school,
                    tune: data.prayer_prefrence_data.tune,
                    is_12: e.value === 'true',
                  }),
                );
              }}
                
                >
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle className="w-full justify-between">
                    {t(`dashboard.prayer_page.timeDisplay.${e.title}`)}
                  </FieldTitle>
                </FieldContent>
                <RadioGroupItem value={e.value} />
              </Field>
            </FieldLabel>
          );
        })}
      </RadioGroup></Card>)
}