import { Separator } from "@/components/ui/separator";
import Header_data from "../header_data";
import Middle_Screen_data from "../middle_data";
import Five_Prayer_data from "../5prayes_data";
import Footer_data from "../footer_data";
import type { WeatherAndPrayerState } from "@/mosque_props_display_page/Display_mosque";
import { useAppSelector } from "@/hooks/Redux";

export default function Display_Pryaer_time({
  data,
}: {
  data?: WeatherAndPrayerState;
}) {
  const theme = useAppSelector((state) => state.quran.QDS.theme);
  const usetType = useAppSelector((state) => state.user.data.userType);
  return (
    <div
      className="w-full h-screen "
      style={{
        backgroundImage: `url(${data?.mosqueProps?.MosqueImg ?? ""})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
      <div className={`dark:bg-black/50`}>
        <Header_data object={data} />
        <Separator className="my-3 lg:my-6  opacity-0" />
        <Middle_Screen_data object={data} />
        <Separator className="my-3 lg:my-6  opacity-0" />
        <Five_Prayer_data object={data} />
        <Separator className="my-3 lg:my-6  opacity-0" />
        <Footer_data object={data} />
      </div>
    </div>
  );
}
