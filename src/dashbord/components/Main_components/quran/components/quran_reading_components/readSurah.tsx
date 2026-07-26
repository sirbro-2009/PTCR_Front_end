import { useState, useRef, useEffect } from "react";
import { QuranSurahSelect } from "../quran_recitation_components/SelectSurah";
import { Label } from "@/components/ui/label";
import { useAppDispatch, useAppSelector } from "@/hooks/Redux";
import { toastFunctions } from "../quran_recitation_components/mp3_compnents/ifFulfied";
import Loader from "@/other/Loader.";
import Quran_surah_display from "./readSurah_components/quran_surah_display";
import { useTranslation } from "react-i18next";

export default function ReadSurah() {
  const containerRef = useRef<HTMLDivElement>(null);
    const {t} = useTranslation()

  const [currentScroll, setCurrentScroll] = useState(0);
  const [surahIndex, surahSelect] = useState("");

  const infromations = useAppSelector((state) => state.quran);
  const iSAutoModeEnabled = useAppSelector((state) => state.quran.QDS.readMode);
  const done = infromations.done4;
  const dispatch = useAppDispatch();

  useEffect(() => {
    localStorage.setItem("lastTab", "surah_reading");
  }, []);

  const handleScroll = () => {
    if (containerRef.current) {
      setCurrentScroll(containerRef.current.scrollTop);
    }
  };

  useEffect(() => {
  }, [currentScroll]);

  useEffect(() => {
    if (done === false) {
      toastFunctions("error", "error");
    }
    setInterval(()=>{
    if (done && iSAutoModeEnabled) {
      let position = containerRef.current?.scrollTop as number
      setCurrentScroll(position+2)
      containerRef.current?.scrollTo({
        top: position+2,
        behavior:"auto",
      });
    }
    },100)
  }, [done]);
useEffect(() => {
  if (!done || !iSAutoModeEnabled) return;

  let animationFrameId: number;
  const scrollSpeed = 0.3;       

  const step = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop += scrollSpeed;
      setCurrentScroll(containerRef.current.scrollTop);
    }
    animationFrameId = requestAnimationFrame(step);
  };

  animationFrameId = requestAnimationFrame(step);

  return () => {
    cancelAnimationFrame(animationFrameId)           
  };
}, [done, iSAutoModeEnabled]);
  return (
<div
  className="bg-secondary p-2 flex-col flex rounded-xl w-full scrollbar-hide overflow-y-auto max-h-screen"
  ref={containerRef}
  onScroll={handleScroll}>
      <div className="bg-secondary p-2 justify-center flex rounded-xl w-full">
        <Label className="my-2 font-semibold md:text-2xl">
          {t(`dashboard.quran_page.select_surah_and_read`)}
        </Label>
        <QuranSurahSelect values={{ surahSelect, reading: true }} />
      </div>

      {done === null ? (
        <h1 className="text-center">{t(`dashboard.quran_page.select_to_start`)}</h1>
      ) : done === true ? (
        <Quran_surah_display
          key={surahIndex}
          contentObjects={{ ...infromations.quran_text }}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
}