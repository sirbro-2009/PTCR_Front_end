import { Label } from "@/components/ui/label";
import { QuranSurahSelect } from "../quran_recitation_components/SelectSurah";
import { useState } from "react";
import {  useAppSelector } from "@/hooks/Redux";
import { toastFunctions } from "../quran_recitation_components/mp3_compnents/ifFulfied";
import Loader from "@/other/Loader.";
import AyaQuranDisplay from '@/dashbord/components/Main_components/quran/components/quran_reading_components/readAya_components/Aya_quran_dipslay'
import { useTranslation } from "react-i18next";

export default function ReadAya() {
    const [surah,surahSelect] = useState("")
localStorage.setItem("lastTab","aya_reading")
  const {t} = useTranslation()

  const infromations = useAppSelector((state) => state.quran);
  const done = infromations.done4;
  if (done === false) {
    toastFunctions("error", "error");
  }
    return (<div className="bg-secondary p-2 flex-col flex rounded-xl w-full">
                <div className="bg-secondary p-2 justify-center flex rounded-xl w-full">

                 <Label className="my-2 font-semibold md:text-2xl">
                  {t(`dashboard.quran_page.select_surah_and_verse`)}
                </Label>
            <QuranSurahSelect values={{surahSelect,reading:true}}/>
                </div>
                      {done === null ? (
        <h1 className="text-center">{t(`dashboard.quran_page.select_to_start`)}</h1>
      ) : done === true ? (
        <AyaQuranDisplay contentObjects={{...infromations.quran_text}}/>
      ) : (
        <Loader />
      )}
            </div>)
}