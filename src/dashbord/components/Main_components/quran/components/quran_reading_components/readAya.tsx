import { Label } from "@/components/ui/label";
import { QuranSurahSelect } from "../quran_recitation_components/SelectSurah";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/Redux";
import { toastFunctions } from "../quran_recitation_components/mp3_compnents/ifFulfied";
import Loader from "@/other/Loader.";
import AyaQuranDisplay from '@/dashbord/components/Main_components/quran/components/quran_reading_components/readAya_components/Aya_quran_dipslay'
localStorage.setItem("lastTab","aya_reading")

export default function ReadAya() {
    const [surah,surahSelect] = useState("")
  const infromations = useAppSelector((state) => state.quran);
  const done = infromations.done4;
  const dispatch = useAppDispatch();
  if (done === false) {
    toastFunctions("error", "error");
  }
    return (<div className="bg-secondary p-2 flex-col flex rounded-xl w-full">
                <div className="bg-secondary p-2 justify-center flex rounded-xl w-full">

                 <Label className="my-2 font-semibold md:text-2xl">
                    Select surah and verse
                </Label>
            <QuranSurahSelect values={{surahSelect,reading:true}}/>
                </div>
                      {done === null ? (
        <h1 className="text-center">select to start</h1>
      ) : done === true ? (
        <AyaQuranDisplay contentObjects={{...infromations.quran_text}}/>
      ) : (
        <Loader />
      )}
            </div>)
}