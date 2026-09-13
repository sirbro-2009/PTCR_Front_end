import { useTranslation } from "react-i18next";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
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
export default function Madhab_calc_method() {
  localStorage.setItem("last_tab_name", "Madhab_calc_method");
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.prayer);
  const { t, i18n } = useTranslation();
  const madhabs = [
    {
      title: "standard",
      id: "0",
    },
    {
      title: "hanafi",
      id: "1",
    },
  ];
  return (
    <Card className="p-2">
      <CardTitle>
        <Label className="font-bold text-xl">
          {t(`dashboard.prayer_page.madhab.selectTitle`)}
        </Label>
      </CardTitle>
      <CardDescription>{t(`dashboard.prayer_page.madhab.defaultLabel`)}</CardDescription>
      <RadioGroup value={data.prayer_prefrence_data.school} className="w-full p-2" dir={i18n.dir()}>
        {madhabs.map((e, i) => {
          return (
            <FieldLabel
              key={i}
              onClick={() => {
                dispatch(
                  set_user_prayer_prefrence_data({
                    method: data.prayer_prefrence_data.method,
                    school: e.id.toString(),
                    tune: data.prayer_prefrence_data.tune,
                    is_12: data.prayer_prefrence_data.is_12,
                  }),
                );
              }}>
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle className="w-full justify-between">
                    {t(`dashboard.prayer_page.madhab.${e.title}`)}
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
