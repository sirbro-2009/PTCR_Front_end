import { Label } from "@/components/ui/label";
import { useAppSelector } from "@/hooks/Redux";

import Loader from "@/other/Loader.";
import Whether_data from "./multi_use_comps/Whether_data";
import { useTranslation } from "react-i18next";

export default function Header_data() {
  const data = useAppSelector((state) => {
    return state.prayer;
  });
  const { i18n } = useTranslation();

  const { countryName, cityName, regionName } = data.full_location_data;
  const { is_day, weathercode, temperature } = data;
  return (
    <div className="w-full flex flex-col gap-2 p-1">
      {
      is_day &&
      weathercode &&
      temperature ? (
        <div className="w-full flex  flex-col items-center md:flex-row-reverse justify-between">
          <Label className="text-lg" dir={i18n.dir()}>
            {cityName}-{regionName}-{countryName}
          </Label>

          <Whether_data
            is_day={is_day}
            weathercode={weathercode}
            temperature={temperature}
          />
        </div>
      ) : (
        <Loader />
      )}

      <Label className="m-auto text-4xl font-bold"></Label>
    </div>
  );
}
