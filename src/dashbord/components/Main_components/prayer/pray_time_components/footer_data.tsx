import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useAppSelector } from "@/hooks/Redux";
import Icon from "@/principal_page/components/bar_components/Icon";
import type { WeatherAndPrayerState } from "@/mosque_props_display_page/Display_mosque";
import { useTranslation } from "react-i18next";

export default function Footer_data({
  object,
}: {
  object?: WeatherAndPrayerState|undefined;
}) {
  const data =
    object?.mosqueProps?.MosqueId ??
    useAppSelector((state) => {
      return state.prayer.mosqueProps?.MosqueId;
    });
  const {i18n} = useTranslation()
  const mosque_page = `https://ptcr-front-end.vercel.app/mosque/${i18n.language}/${data}`;
  return (
    <Card
      dir="ltr"
      className="w-full fixed mx-auto h-24 bottom-0 right-0 left-0 bg-card/20 backdrop-blur-sm border-t border-Secondary/20 rounded-t-2xl rounded-b-none p-3 flex flex-row items-center justify-between gap-3">
      {data && (
        <div className="flex flex-row items-center gap-3 shrink-0">
          <div className="p-1 rounded-lg bg-white">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${mosque_page}&color=0-128-0`}
              alt={`mosque id: ${data}`}
              className="w-16 h-16 rounded-md"
            />
          </div>
          <Label className="text-Secondary text-xs tracking-wide">
            ID {data}
          </Label>
        </div>
      )}

      <div
        className={`flex flex-row items-center justify-between gap-4 ${
          data ? "" : "mx-auto"
        }`}>
        <div className="text-center">
          <div className="flex flex-row items-center">
            <Icon className="opacity-80" />
          <h1 className="font-bold text-base leading-tight">PTCR</h1>
          </div>
          <p className="text-sm text-Secondary/80 leading-tight">Ver 3.8.9</p>
        </div>
        
      </div>
    </Card>
  );
}
///
