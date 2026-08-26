import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldTitle,
} from "@/components/ui/field";
import { Delete, Pencil, Plus } from "lucide-react";
import { EditTime } from "./popover_components/editTime";
import { DeleteAlarm } from "./popover_components/delete";
import { useAppDispatch, useAppSelector } from "@/hooks/Redux";
import { useTranslation } from "react-i18next";
export default function NotificationsFiled(data: {
  key: number;
  object: { id: number; time: string };
}) {
  const { id, time } = data.object;
  const { t } = useTranslation();

  const adkarData = useAppSelector((state) => state.adkar);
  const dispatch = useAppDispatch();
  return (
    <FieldLabel key={data.key} className="my-4  mx-auto">
      <Field orientation="horizontal">
        <FieldContent className="grid grid-cols-1 ">
          <div className="flex flex-row items-center justify-between">
            <FieldTitle>
              {t(
                `dashboard.adkar_page.adhkarNames.${adkarData.searchArrayRes[id]}`,
              )}

            </FieldTitle>
            <FieldLegend>{time}</FieldLegend>
          </div>
          <FieldDescription className="flex flex-row justify-between items-center ">
            <EditTime id={id}>
              <Pencil size={30} className="cursor-pointer" color="green" />
            </EditTime>
            <DeleteAlarm id={id}>
              <Delete size={30} className="cursor-pointer" color="red" />
            </DeleteAlarm>
          </FieldDescription>
        </FieldContent>
      </Field>
    </FieldLabel>
  );
}
