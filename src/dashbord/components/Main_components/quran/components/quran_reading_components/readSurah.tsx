import { useEffect, useState } from "react";
import { QuranSurahSelect } from "../quran_recitation_components/SelectSurah";
import { Label } from "@/components/ui/label";
import { quranReading } from "@/features/quran/quran_slice";
import { useAppDispatch, useAppSelector } from "@/hooks/Redux";
import { toastFunctions } from "../quran_recitation_components/mp3_compnents/ifFulfied";
import Loader from "@/other/Loader.";
import Quran_surah_display from "./readSurah_components/quran_surah_display";
export default function ReadSurah() {
  localStorage.setItem("lastTab","surah_reading")

  const [surahIndex, surahSelect] = useState("")
  const infromations = useAppSelector((state) => state.quran);
  const done = infromations.done4;
  const dispatch = useAppDispatch();
  if (done === false) {
    toastFunctions("error", "error");
  }
  return (
    <div className="bg-secondary p-2 flex-col flex rounded-xl w-full">
      <div className="bg-secondary p-2 justify-center flex rounded-xl w-full">
        <Label className="my-2 font-semibold md:text-2xl">
          Select surah and read
        </Label>
        <QuranSurahSelect  values={{ surahSelect,reading:true }} />
      </div>
      {done === null ? (
        <h1 className="text-center">select to start</h1>
      ) : done === true ? (
        <Quran_surah_display contentObjects={{...infromations.quran_text}}/>
      ) : (
        <Loader />
      )}
    </div>
  );
}
