import Basmala from "@/assets/icons/basmala.png";
import { QuranSurahSelect } from "./components/quran_recitation_components/SelectSurah";
import { SelectNarrations } from "./components/quran_recitation_components/SelectNarrations";
import { useState } from "react";
import { SelectReader } from "./components/quran_recitation_components/SelectReader";
import { useAppDispatch } from "@/hooks/Redux";
import { getReader, getAudio } from "@/features/quran/quran_slice";
import Mp3Playe from "./components/quran_recitation_components/Mp3Playe";
import { Separator } from "@/components/ui/separator";
import Saved from "./components/quran_recitation_components/saved"

export default function Quran_recitations() {
  const dispatch = useAppDispatch();
  const [startValue, setStartValue] = useState({
    quranSurah: "",
    narration: false,
    narrationName: "",
    reader: false,
    readerName: "",
  });
  const surahSelect = (value: string) => {
    setStartValue({ ...startValue, quranSurah: value, narration: true });
  };
  const narrationsSelect = (value: string) => {
    dispatch(getReader(value));
    setStartValue({ ...startValue, narrationName: value, reader: true });
  };
  const readerSelect = (value: string) => {
    setStartValue({ ...startValue, readerName: value });
    if (startValue.quranSurah) {
      dispatch(
        getAudio({ sourahIndex: startValue.quranSurah, reaction: value }),
      );
    }
  };
  return (
    <div className="flex flex-col ">
      <img
        className="w-150 self-center mt-20"
        src={Basmala}
        alt="In the name of Allah, the most gracious, the most merciful/بسم الله الرحمن الرحيم"
      />

      <div className="text-end self-end mt-10">
        <h1 className="text-2xl font-bold">Quran reactiations</h1>
        <h1 className="text-foreground/70">
          chouse surah and Quranic narrative and Reader
        </h1>
      </div>
      <div className="w-4/5 mt-5 self-end  m-auto md:flex md:flex-row md:justify-between">
        <QuranSurahSelect values={{ surahSelect }} />
        <SelectNarrations values={{ narrationsSelect, startValue }} />
        <SelectReader values={{ readerSelect, startValue }} />
      </div>
      <Separator className=" m-auto my-5" />

      <div className="self-center">
        <Mp3Playe />
      </div>
      <Separator className=" m-auto my-5 " />
      <h1 className="text-2xl font-bold text-end">Saved Quran reactiations</h1>
      <div className="self-end w-full ">
        <Saved/>
      </div>
    </div>
  );
}
