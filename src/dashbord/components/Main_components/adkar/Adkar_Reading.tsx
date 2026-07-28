import { Label } from "@/components/ui/label";
import { SearchBar } from "./adkar_reading_components/search";
import Adkar_icons from "./adkar_reading_components/Adkar_icons";
import { useAppSelector } from "@/hooks/Redux";
import Adkar_Card from "./adkar_reading_components/adkra_Crad";
export default function Adkar_Reading() {
  const data = useAppSelector((state) => state.adkar);
  return (
    <div className="flex flex-col justify-center w-full">
      <Label className="m-auto text-7xl mt-2 animate-pulse ">Al Adkar</Label>
      <div className="m-auto text-center mt-10 text font-[quranfont]">
        <p className="text-3xl">
          ﴿ فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ﴾
        </p>
      </div>
      {data.Read ? (
        <Adkar_Card/>
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
