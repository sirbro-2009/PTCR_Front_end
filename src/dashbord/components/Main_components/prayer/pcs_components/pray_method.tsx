import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { methods } from "@/other/data";
import { useTranslation } from "react-i18next";
import {
  Field,
  FieldContent,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { useAppDispatch, useAppSelector } from "@/hooks/Redux";
import { set_user_prayer_prefrence_data } from "@/features/prayer/prayer_slice";
export default function Pray_method() {
  localStorage.setItem("last_tab_name", "prayer_method");
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.prayer);
  return (
    <Card className="p-2">
      <CardTitle>
        <Label className="font-bold text-xl">{t(`dashboard.prayer_page.prayerMethod.selectTitle`)}</Label>
      </CardTitle>
      <CardDescription>
        {t(`dashboard.prayer_page.prayerMethod.defaultLabel`)}
      </CardDescription>
      <RadioGroup value={data.prayer_prefrence_data.method} className="w-full p-2" dir={i18n.dir()}>
        {methods.map((e, i) => {
          return (
            <FieldLabel
              key={i}
              onClick={() => {
                dispatch(
                  set_user_prayer_prefrence_data({
                    method: e.id.toString(),
                    school: data.prayer_prefrence_data.school,
                    tune: data.prayer_prefrence_data.tune,
                    is_12: data.prayer_prefrence_data.is_12,
                  }),
                );
              }}>
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle className="w-full justify-between">
                    {t(`dashboard.prayer_page.prayerMethod.methods.${e.name}`)}
                    
                    <span
                      className={`size-10 flex flex-row justify-between items-center`}>
                      {e.flag}
                    </span>
                  </FieldTitle>
                </FieldContent>
                <RadioGroupItem value={e.id.toString()} />
              </Field>
            </FieldLabel>
          );
        })}
      </RadioGroup>
    </Card>
  );
}
