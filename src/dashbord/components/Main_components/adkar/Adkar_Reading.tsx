import { Label } from "@/components/ui/label";
import { SearchBar } from "./adkar_reading_components/search";
import Adkar_icons from "./adkar_reading_components/Adkar_icons";
import { useAppSelector } from "@/hooks/Redux";
import Adkar_Card from "./adkar_reading_components/adkra_Crad";
import { useTranslation } from "react-i18next";
export default function Adkar_Reading() {
  const data = useAppSelector((state) => state.adkar);
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center w-full">
      <Label className="m-auto text-7xl mt-2 animate-pulse ">
        {t(`dashboard.adkar_page.home.title`)}
        </Label>
      <div className="m-auto text-center mt-10 text font-[quranfont]">
        <p className="text-3xl" dir="rtl">
          ﴿ فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ﴾
        </p>
        <p
          className="m-auto text-lg mt-2 font-[Rubik] animate-pulse"
          dir={document.dir==='rtl'?'rtl':'ltr'}>
            {t(`dashboard.adkar_page.home.subtitle`)}
          
        </p>
      </div>
      {data.Read ? (
        <Adkar_Card />
      ) : (
        <>
          {" "}
          <SearchBar />
          <Adkar_icons />
        </>
      )}
    </div>
  );
}
